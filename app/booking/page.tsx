import { Suspense } from "react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

const NAVY = "#0D1F35";
const ORANGE = "#F07A20";

export const metadata = {
  title: "Book an Appointment | Marquis Overhead",
  description: "Request a service appointment for overhead door installation, repair, or operator service in Alberta.",
};

export default function BookingPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" width="28" height="35" aria-hidden="true">
              <polyline points="14,18 40,46 66,18" fill="none" stroke={ORANGE} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity="0.30"/>
              <polyline points="14,30 40,58 66,30" fill="none" stroke={ORANGE} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="14" y1="30" x2="14" y2="90" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round"/>
              <line x1="66" y1="30" x2="66" y2="90" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round"/>
            </svg>
            <div>
              <div className="font-black text-white text-lg leading-none tracking-[3px]">MARQUIS</div>
              <div className="font-bold text-[7px] tracking-[5px] uppercase" style={{ color: ORANGE }}>OVERHEAD</div>
            </div>
          </Link>
          <a
            href="tel:+14036179797"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: ORANGE }}
          >
            <span>📞</span>
            <span>(403) 617-9797</span>
          </a>
        </div>
        <div className="h-[3px]" style={{ background: ORANGE }} />
      </header>

      {/* Page body */}
      <div style={{ background: "#F8F9FA" }} className="min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#F07A20] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Book an Appointment</span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-black mb-2" style={{ color: NAVY }}>
              Request an Appointment
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within one business day to confirm your appointment.
              For urgent service, call us directly at{" "}
              <a href="tel:+14036179797" className="font-semibold" style={{ color: ORANGE }}>(403) 617-9797</a>.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <Suspense fallback={<div className="flex justify-center py-8"><div className="w-6 h-6 border-2 border-[#F07A20] border-t-transparent rounded-full animate-spin" /></div>}>
              <BookingForm />
            </Suspense>
          </div>

          {/* Why book online */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "⚡", title: "Fast Response", desc: "Reply within 1 business day" },
              { icon: "📅", title: "Flexible Times", desc: "Morning, afternoon, or evening" },
              { icon: "🤝", title: "No Obligation", desc: "Free quotes on all work" },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-1">{p.icon}</div>
                <p className="text-xs font-bold mb-0.5" style={{ color: NAVY }}>{p.title}</p>
                <p className="text-[11px] text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: NAVY }} className="py-6">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} Marquis Overhead. Alberta, Canada.
          </p>
        </div>
        <div className="h-1 mt-4" style={{ background: ORANGE }} />
      </footer>
    </>
  );
}
