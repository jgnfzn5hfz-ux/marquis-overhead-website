"use server";

import { Resend } from "resend";

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

  // Send email notification via Resend
  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form submission (no Resend key):", { name, phone, email, message });
    return { status: "success" };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Website <noreply@marquisoverhead.com>",
      to: "contact@marquisoverhead.com",
      replyTo: email || undefined,
      subject: `New Website Inquiry — ${name}`,
      text: [
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        `Email:   ${email || "not provided"}`,
        "",
        message,
        "",
        "─────────────────────────",
        "This inquiry has been added to your SiteCompass dashboard.",
      ].join("\n"),
    });
    return { status: "success" };
  } catch (err) {
    console.error("Resend error:", err);
    return { status: "error", message: "Something went wrong. Please call us at (403) 617-9797." };
  }
}
