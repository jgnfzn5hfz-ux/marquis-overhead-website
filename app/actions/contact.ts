"use server";

import nodemailer from "nodemailer";

const SITECOMPASS_URL = process.env.NEXT_PUBLIC_SITECOMPASS_URL ?? "http://localhost:3000";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Skip in dev / before key is configured
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    const data = await res.json() as { success: boolean };
    return data.success === true;
  } catch {
    return true; // Network error — fail open so real users aren't blocked
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const source = formData.get("source")?.toString().trim() ?? "";
  const turnstileToken = formData.get("cf-turnstile-response")?.toString() ?? "";

  if (!name || !phone || !message) {
    return { status: "error", message: "Please fill in your name, phone, and message." };
  }

  // Verify CAPTCHA
  const captchaPassed = await verifyTurnstile(turnstileToken);
  if (!captchaPassed) {
    return { status: "error", message: "CAPTCHA verification failed. Please refresh and try again." };
  }

  // Post to SiteCompass as a web booking (serviceType: "inquiry")
  try {
    await fetch(`${SITECOMPASS_URL}/api/public/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        company: "",
        address: "",
        workType: "residential",
        serviceType: "inquiry",
        preferredSlots: "[]",
        notes: message,
        _trap: "",
        _elapsed: 9999,
        _turnstileToken: turnstileToken,
      }),
    });
  } catch (err) {
    console.error("SiteCompass contact sync error:", err);
    // Non-fatal — continue to email
  }

  // Send email notification via Gmail (nodemailer) — the same proven setup
  // SiteCompass uses for invoices and estimates.
  // Never fake success: if we can't email the lead, tell the customer to call
  // so the lead is never silently dropped.
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPass) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not set — cannot email the lead:", { name, phone, email, message });
    return { status: "error", message: "Something went wrong on our end. Please call us at (403) 617-9797." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });
    // Gmail rewrites the From to the authenticated mailbox, so send as that
    // mailbox to keep From and envelope aligned.
    await transporter.sendMail({
      from: `"Marquis Overhead Website" <${gmailUser}>`,
      to: ["contact@marquisoverhead.com", "aaron@marquisoverhead.com"],
      replyTo: email || undefined,
      subject: source ? `New Lead (${source}) — ${name}` : `New Website Inquiry — ${name}`,
      text: [
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        `Email:   ${email || "not provided"}`,
        `Source:  ${source || "Website contact form"}`,
        "",
        message,
        "",
        "─────────────────────────",
        "Sent from the marquisoverhead.com contact form.",
      ].join("\n"),
    });
    return { status: "success" };
  } catch (err) {
    console.error("Gmail send error:", err);
    return { status: "error", message: "Something went wrong. Please call us at (403) 617-9797." };
  }
}
