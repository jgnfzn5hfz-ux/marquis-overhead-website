"use server";

import { Resend } from "resend";

interface BookingData {
  name: string;
  phone: string;
  email: string;
  company: string;
  address: string;
  workType: string;
  serviceType: string;
  preferredSlots: { date: string; dateLabel: string; timeLabel: string }[];
  notes: string;
  isTuneUp: boolean;
}

export async function sendBookingNotification(data: BookingData): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.log("Booking notification (no Resend key):", data);
    return;
  }

  const subject = data.isTuneUp
    ? `Spring Tune-Up Booking — ${data.name}`
    : `New Booking Request — ${data.name}`;

  const slotLines = data.preferredSlots.length
    ? data.preferredSlots.map((s) => `  • ${s.dateLabel} at ${s.timeLabel}`).join("\n")
    : "  Not specified";

  const body = [
    data.isTuneUp ? "⭐ SPRING TUNE-UP SPECIAL ($89)\n" : "",
    `Name:        ${data.name}`,
    `Phone:       ${data.phone}`,
    `Email:       ${data.email || "not provided"}`,
    data.company ? `Company:     ${data.company}` : "",
    `Address:     ${data.address || "not provided"}`,
    `Work Type:   ${data.workType}`,
    `Service:     ${data.serviceType}`,
    "",
    "Preferred Times:",
    slotLines,
    data.notes ? `\nNotes:\n${data.notes}` : "",
    "",
    "─────────────────────────",
    "This booking has been added to your SiteCompass dashboard.",
  ].filter((l) => l !== undefined && l !== null).join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Website <noreply@marquisoverhead.com>",
      to: "contact@marquisoverhead.com",
      replyTo: data.email || undefined,
      subject,
      text: body,
    });
  } catch (err) {
    console.error("Booking notification email error:", err);
  }
}
