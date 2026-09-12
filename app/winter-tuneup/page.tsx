import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const NAVY = "#04172F";
const ORANGE = "#F74901";

export const metadata: Metadata = {
  title: "Winter Tune-Up — $89 Garage Door Service | Marquis Overhead",
  description:
    "Book your $89 + GST residential garage door Winter Tune-Up in Calgary & area. Lubrication, spring & balance adjustment, safety checks, and a full inspection — keep your door running smooth, safe, and reliable all winter.",
  openGraph: {
    title: "Winter Tune-Up — Just $89 + GST | Marquis Overhead",
    description:
      "Keep your garage door running smooth, safe, and reliable all winter. Book your $89 residential tune-up in Calgary & area.",
    type: "website",
  },
};

const INCLUDED = [
  "Full multi-point safety inspection",
  "Lubricate all moving parts — rollers, hinges & springs",
  "Spring tension & door balance adjustment",
  "Tighten & check all hardware",
  "Safety sensor & auto-reverse test",
  "Weather-seal & winter-readiness check",
  "Opener limits & manual release check",
  "Overall visual inspection with honest recommendations",
];

const VALUE_PROPS = [
  {
    title: "Local Calgary Team",
    desc: "Family-run and based right here in Calgary & area — real people who answer the phone.",
  },
  {
    title: "50+ Years Combined Experience",
    desc: "Every door is handled by technicians who have seen it all, residential and commercial.",
  },
  {
    title: "Upfront Pricing",
    desc: "$89 flat for the tune-up. If we spot anything else, you get a clear quote first — no surprises.",
  },
];

export default function WinterTuneUpPage() {
  return (
    <>
      {/* ─── MINIMAL HEADER ─── */}
      <header className="sticky top-0 z-50 border-b border-white/10" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/marquis/logo-full-white.svg"
            alt="Marquis Overhead"
            height={40}
            style={{ height: 40, width: "auto" }}
          />
          <a
            href="tel:+14036179797"
            className="flex-shrink-0 inline-flex flex-col items-center px-5 py-2 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: ORANGE }}
          >
            <span className="flex items-center gap-2">
              <span>📞</span>
              <span className="hidden sm:inline">(403) 617-9797</span>
              <span className="sm:hidden">Call / Text</span>
            </span>
            <span className="hidden sm:block text-[10px] font-medium opacity-90 tracking-wide">Call or Text</span>
          </a>
        </div>
        <div className="h-[3px]" style={{ background: ORANGE }} />
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[86vh] flex items-center">
        <Image
          src="/images/residential/hero-modern.jpg"
          alt="Modern home with a well-maintained garage door in winter"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(4,23,47,0.92) 0%, rgba(4,23,47,0.78) 45%, rgba(4,23,47,0.45) 100%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
          <p className="font-bold text-[11px] tracking-[5px] uppercase mb-4" style={{ color: ORANGE }}>
            Calgary &amp; Area · Residential
          </p>
          <h1 className="font-black text-white text-5xl sm:text-7xl leading-[0.95] mb-6 tracking-tight uppercase">
            Winter
            <br />
            Tune-Up
          </h1>

          {/* Price badge */}
          <div className="inline-flex items-baseline gap-2 rounded-xl px-6 py-3 mb-6" style={{ background: ORANGE }}>
            <span className="text-white/90 font-bold text-sm uppercase tracking-wide">Only</span>
            <span className="text-white font-black text-5xl leading-none">$89</span>
            <span className="text-white/90 font-bold text-lg">+ GST</span>
          </div>

          <p className="text-blue-100 text-xl font-light mb-9 max-w-lg leading-relaxed">
            Keep your garage door running smooth, safe, and reliable all winter long.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              Book My Tune-Up →
            </a>
            <a
              href="tel:+14036179797"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              📞 (403) 617-9797
            </a>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS ─── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-3 gap-8">
          {VALUE_PROPS.map((p) => (
            <div key={p.title}>
              <h3 className="font-black text-lg mb-2" style={{ color: NAVY }}>
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[5px] uppercase mb-3 text-center" style={{ color: ORANGE }}>
            What&apos;s Included
          </p>
          <h2 className="font-black text-3xl sm:text-4xl text-center mb-3 tracking-tight" style={{ color: NAVY }}>
            Everything in your $89 tune-up
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            A thorough, no-shortcuts service to catch small problems before they become cold-morning emergencies.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-black"
                  style={{ background: ORANGE }}
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-gray-800 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            Parts and any additional repairs are extra — always quoted upfront before we proceed.
          </p>

          <div className="text-center mt-10">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              Book My $89 Tune-Up →
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST / TESTIMONIAL ─── */}
      <section className="py-20" style={{ background: NAVY }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-5" style={{ color: ORANGE }} aria-hidden>
            &ldquo;
          </div>
          <p className="text-blue-50 text-xl sm:text-2xl font-light leading-relaxed mb-6">
            Aaron was great to work with, pricing was upfront and there were no hidden charges. Communication was
            excellent and we were very happy with the finished product.
          </p>
          <p className="font-bold text-white">Ryan Buckler</p>
          <p className="text-blue-300 text-sm">Recommended on Facebook · Aug 2026</p>
        </div>
      </section>

      {/* ─── BOOKING ─── */}
      <section id="book" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[5px] uppercase mb-3 text-center" style={{ color: ORANGE }}>
            Book Now
          </p>
          <h2 className="font-black text-3xl sm:text-4xl text-center mb-3 tracking-tight" style={{ color: NAVY }}>
            Book your $89 Winter Tune-Up
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Fill out the form and we&apos;ll confirm your appointment within one business day. Prefer to talk? Call or
            text{" "}
            <a href="tel:+14036179797" className="font-bold" style={{ color: ORANGE }}>
              (403) 617-9797
            </a>
            .
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-9">
            <ContactForm source="Winter Tune-Up $89 Landing Page" />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/marquis/logo-full-white.svg"
            alt="Marquis Overhead"
            height={38}
            style={{ height: 38, width: "auto" }}
          />
          <div className="text-center sm:text-right text-sm text-blue-200 space-y-1">
            <p>
              <a href="tel:+14036179797" className="hover:text-white transition-colors">
                📞 (403) 617-9797
              </a>
            </p>
            <p>
              <a href="mailto:contact@marquisoverhead.com" className="hover:text-white transition-colors">
                ✉ contact@marquisoverhead.com
              </a>
            </p>
            <p className="text-blue-300">Calgary &amp; Area, Alberta</p>
          </div>
        </div>
        <p className="text-center text-blue-400 text-xs mt-8">© 2026 Marquis Overhead</p>
      </footer>
    </>
  );
}
