"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { sendBookingNotification } from "@/app/actions/notify";

interface BookingConfig {
  enabled: boolean;
  minDaysOut: number;
  maxDaysOut: number;
  businessHoursStart: string;
  businessHoursEnd: string;
  afterHoursEnabled: boolean;
  afterHoursStart: string;
  afterHoursEnd: string;
}

interface TimeSlot {
  date: string;      // "YYYY-MM-DD"
  dateLabel: string; // "Mon, Jun 2"
  timeLabel: string; // "9:00 AM"
}

const SITECOMPASS_URL = process.env.NEXT_PUBLIC_SITECOMPASS_URL ?? "http://localhost:3000";

const DEFAULT_CONFIG: BookingConfig = {
  enabled: true,
  minDaysOut: 1,
  maxDaysOut: 5,
  businessHoursStart: "08:00",
  businessHoursEnd: "15:00",
  afterHoursEnabled: false,
  afterHoursStart: "16:00",
  afterHoursEnd: "20:00",
};

function generateTimeLabels(cfg: BookingConfig): string[] {
  function slotsFor(start: string, end: string): string[] {
    const [sh] = start.split(":").map(Number);
    const [eh] = end.split(":").map(Number);
    const slots: string[] = [];
    for (let h = sh; h < eh; h += 2) {
      const ampm = h < 12 ? "AM" : "PM";
      const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
      slots.push(`${display}:00 ${ampm}`);
    }
    return slots;
  }
  const slots = slotsFor(cfg.businessHoursStart, cfg.businessHoursEnd);
  if (cfg.afterHoursEnabled) slots.push(...slotsFor(cfg.afterHoursStart, cfg.afterHoursEnd));
  return slots;
}

function generateAvailableDates(cfg: BookingConfig): { value: string; label: string }[] {
  const dates: { value: string; label: string }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + cfg.maxDaysOut + 1);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + cfg.minDaysOut);

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    if (day === 0 || day === 6) continue; // skip weekends
    const value = d.toISOString().split("T")[0];
    const label = d.toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric" });
    dates.push({ value, label });
  }
  return dates;
}

export default function BookingForm() {
  const searchParams = useSearchParams();
  const isTuneUp = searchParams.get("deal") === "tune-up";

  const [config, setConfig] = useState<BookingConfig>(DEFAULT_CONFIG);
  const [configLoaded, setConfigLoaded] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [workType, setWorkType] = useState<"residential" | "commercial">("residential");
  const [serviceType, setServiceType] = useState<"installation" | "repair" | "operators">("repair");
  const [selectedSlots, setSelectedSlots] = useState<TimeSlot[]>([]);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRenderTime = useRef(Date.now());

  useEffect(() => {
    fetch(`${SITECOMPASS_URL}/api/public/booking-config`)
      .then((r) => r.json())
      .then((data) => { setConfig(data); setConfigLoaded(true); })
      .catch(() => setConfigLoaded(true));
  }, []);

  const availableDates = generateAvailableDates(config);
  const timeLabels = generateTimeLabels(config);

  function toggleSlot(date: string, dateLabel: string, timeLabel: string) {
    const key = `${date}|${timeLabel}`;
    const exists = selectedSlots.find((s) => `${s.date}|${s.timeLabel}` === key);
    if (exists) {
      setSelectedSlots((prev) => prev.filter((s) => `${s.date}|${s.timeLabel}` !== key));
    } else if (selectedSlots.length < 3) {
      setSelectedSlots((prev) => [...prev, { date, dateLabel, timeLabel }]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const elapsed = Date.now() - formRenderTime.current;

    try {
      const res = await fetch(`${SITECOMPASS_URL}/api/public/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          company: company.trim(),
          address: address.trim(),
          workType,
          serviceType,
          preferredSlots: JSON.stringify(selectedSlots),
          notes: notes.trim(),
          _trap: "",
          _elapsed: elapsed,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        // Fire-and-forget email notification
        sendBookingNotification({
          name: name.trim(), phone: phone.trim(), email: email.trim(),
          company: company.trim(), address: address.trim(),
          workType, serviceType,
          preferredSlots: selectedSlots,
          notes: notes.trim(),
          isTuneUp,
        }).catch(() => {});
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again or call us.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not connect. Please call us at (403) 617-9797.");
    }
  }

  if (!configLoaded) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-6 h-6 border-2 border-[#F07A20] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!config.enabled) {
    return (
      <div className="bg-[#0D1F35]/5 border border-[#0D1F35]/20 rounded-xl p-8 text-center">
        <p className="text-lg font-semibold text-[#0D1F35] mb-2">Online Booking Unavailable</p>
        <p className="text-gray-600 mb-4">Online booking is temporarily disabled. Please contact us directly.</p>
        <a href="tel:+14036179797" className="inline-flex items-center gap-2 bg-[#F07A20] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
          📞 Call (403) 617-9797
        </a>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0D1F35] mb-2">Request Received!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We&apos;ll review your request and follow up within one business day to confirm your appointment.
          If you need immediate service, call us at{" "}
          <a href="tel:+14036179797" className="text-[#F07A20] font-semibold">(403) 617-9797</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <input type="text" name="_trap" defaultValue="" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />

      {/* Tune-up deal banner */}
      {isTuneUp && (
        <div className="bg-[#F07A20]/10 border border-[#F07A20]/30 rounded-lg px-4 py-3 flex items-center gap-3">
          <span className="text-xl">🔧</span>
          <div>
            <p className="text-sm font-bold text-[#0D1F35]">Spring Tune-Up Special — $89</p>
            <p className="text-xs text-gray-500">Residential repair · mention in your notes to claim the deal</p>
          </div>
        </div>
      )}

      {/* Work type toggle — hidden for tune-up deal */}
      {!isTuneUp && (
        <div>
          <label className="block text-sm font-semibold text-[#0D1F35] mb-2">Work Type</label>
          <div className="grid grid-cols-2 gap-2">
            {(["residential", "commercial"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setWorkType(t)}
                className={`py-3 rounded-lg border-2 text-sm font-semibold capitalize transition-colors ${
                  workType === t
                    ? "border-[#F07A20] bg-[#F07A20]/10 text-[#F07A20]"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {t === "residential" ? "🏠 Residential" : "🏭 Commercial"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Service type — hidden for tune-up deal */}
      {!isTuneUp && (
        <div>
          <label className="block text-sm font-semibold text-[#0D1F35] mb-2">Service Needed</label>
          <div className="grid grid-cols-3 gap-2">
            {([
              { value: "repair", label: "🔧 Repair" },
              { value: "installation", label: "🚪 Installation" },
              { value: "operators", label: "⚙️ Operators" },
            ] as const).map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setServiceType(s.value)}
                className={`py-3 rounded-lg border-2 text-xs font-semibold transition-colors ${
                  serviceType === s.value
                    ? "border-[#F07A20] bg-[#F07A20]/10 text-[#F07A20]"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#0D1F35] mb-1.5">
            Full Name <span className="text-[#F07A20]">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F07A20] focus:ring-1 focus:ring-[#F07A20]/30"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0D1F35] mb-1.5">
            Phone <span className="text-[#F07A20]">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(403) 555-0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F07A20] focus:ring-1 focus:ring-[#F07A20]/30"
          />
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#0D1F35] mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F07A20] focus:ring-1 focus:ring-[#F07A20]/30"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0D1F35] mb-1.5">
            Company <span className="text-gray-400 font-normal text-xs">(optional)</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Corp"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F07A20] focus:ring-1 focus:ring-[#F07A20]/30"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold text-[#0D1F35] mb-1.5">
          Service Address <span className="text-[#F07A20]">*</span>
        </label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Industrial Ave, Calgary, AB"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F07A20] focus:ring-1 focus:ring-[#F07A20]/30"
        />
      </div>

      {/* Preferred slots */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-[#0D1F35]">
            Preferred Date &amp; Time
          </label>
          <span className="text-xs text-gray-500">
            {selectedSlots.length}/3 selected
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-3">
          Select up to 3 preferred time slots. We&apos;ll do our best to accommodate.
        </p>

        <div className="space-y-3">
          {availableDates.map((d) => (
            <div key={d.value}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{d.label}</p>
              <div className="flex flex-wrap gap-2">
                {timeLabels.map((time) => {
                  const isSelected = selectedSlots.some((s) => s.date === d.value && s.timeLabel === time);
                  const isDisabled = !isSelected && selectedSlots.length >= 3;
                  return (
                    <button
                      key={time}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => toggleSlot(d.value, d.label, time)}
                      className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                        isSelected
                          ? "border-[#F07A20] bg-[#F07A20] text-white font-semibold"
                          : isDisabled
                          ? "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed"
                          : "border-gray-200 text-gray-700 hover:border-[#F07A20]/60 hover:bg-[#F07A20]/5"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {selectedSlots.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedSlots.map((s) => (
              <span key={`${s.date}|${s.timeLabel}`} className="inline-flex items-center gap-1 text-xs bg-[#F07A20]/10 text-[#F07A20] border border-[#F07A20]/20 px-2.5 py-1 rounded-full">
                {s.dateLabel} · {s.timeLabel}
                <button type="button" onClick={() => toggleSlot(s.date, s.dateLabel, s.timeLabel)} className="ml-0.5 hover:text-[#F07A20]/70">×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-semibold text-[#0D1F35] mb-1.5">
          Additional Notes <span className="text-gray-400 font-normal text-xs">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Describe the issue, door size, or anything that helps us prepare..."
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F07A20] focus:ring-1 focus:ring-[#F07A20]/30 resize-none"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-[#F07A20] hover:opacity-90 disabled:opacity-60 text-white font-bold text-base rounded-lg transition-opacity"
      >
        {status === "submitting" ? "Sending Request…" : "Request Appointment"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        This is a booking request — not a confirmed appointment. We&apos;ll contact you within one business day.
      </p>
    </form>
  );
}
