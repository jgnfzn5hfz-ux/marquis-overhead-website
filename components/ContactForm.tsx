"use client";

import { useActionState, useEffect } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const NAVY = "#0D1F35";
const ORANGE = "#F07A20";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  // Load Cloudflare Turnstile script (implicit mode — auto-renders widget in .cf-turnstile divs)
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return;
    if (document.querySelector('script[src*="turnstile"]')) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border-2 p-10 text-center" style={{ borderColor: ORANGE }}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-black mb-2" style={{ color: NAVY }}>Message Received!</h3>
        <p className="text-gray-600">Thanks — we&apos;ll get back to you within one business day.</p>
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

      {/* Cloudflare Turnstile — implicit mode, auto-injects cf-turnstile-response into form */}
      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile flex justify-center"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        />
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
        We&apos;ll get back to you within one business day.
      </p>
    </form>
  );
}
