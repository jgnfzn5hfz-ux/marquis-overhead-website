"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !phone || !message) {
    return { status: "error", message: "Please fill in your name, phone, and message." };
  }

  if (!process.env.RESEND_API_KEY) {
    // During development without an API key — log and succeed gracefully
    console.log("Contact form submission (no API key configured):", { name, phone, email, message });
    return { status: "success" };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Website <noreply@marquisoverhead.com>",
      to: "contact@marquisoverhead.com",
      replyTo: email || undefined,
      subject: `Website inquiry from ${name}`,
      text: [
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        `Email:   ${email || "not provided"}`,
        "",
        message,
      ].join("\n"),
    });
    return { status: "success" };
  } catch (err) {
    console.error("Resend error:", err);
    return { status: "error", message: "Something went wrong. Please call us at (403) 617-9797." };
  }
}
