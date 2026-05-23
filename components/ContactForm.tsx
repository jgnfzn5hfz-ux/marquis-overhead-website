"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const NAVY = "#0D1F35";
const ORANGE = "#F07A20";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border-2 p-10 text-center" style={{ borderColor: ORANGE }}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-black mb-2" style={{ color: NAVY }}>Message Received!</h3>
        <p className="text-gray-600">Thanks — we&apos;ll get back to you shortly. For urgent requests call <a href="tel:+14036179797" className="font-bold" style={{ color: ORANGE }}>(403) 617-9797</a>.</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>
            Your Name <span style={{ color: ORANGE }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-400 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>
            Phone Number <span style={{ color: ORANGE }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(403) 555-0100"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-400 text-gray-900 placeholder-gray-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>
          Email Address <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-400 text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>
          How can we help? <span style={{ color: ORANGE }}>*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your door, what's happening, your location, and the best time to reach you..."
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-400 text-gray-900 placeholder-gray-400 resize-none"
        />
      </div>

      {state.status === "error" && (
        <p className="text-red-600 text-sm font-medium">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 rounded-lg text-white font-bold text-lg transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: ORANGE }}
      >
        {pending ? "Sending…" : "Send Message"}
      </button>

      <p className="text-center text-xs text-gray-400">
        Or call / text us directly at{" "}
        <a href="tel:+14036179797" className="font-bold text-gray-600">(403) 617-9797</a>
      </p>
    </form>
  );
}
