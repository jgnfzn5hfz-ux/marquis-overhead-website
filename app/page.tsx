import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const NAVY = "#04172F";
const ORANGE = "#F74901";

const SERVICES = [
  {
    title: "Commercial Overhead Doors",
    desc: "Steel sectional, rolling steel, high-speed, and fire doors for warehouses, distribution centres, and commercial buildings.",
  },
  {
    title: "Operators & Controls",
    desc: "Commercial-grade operators, photo eyes, edge devices, activation controls, and full safety sensor setup and certification.",
  },
  {
    title: "Dock Equipment",
    desc: "Dock levelers, seals, vehicle restraints, and bumpers — supply, installation, and service for busy loading dock operations.",
  },
  {
    title: "Preventative Maintenance",
    desc: "Scheduled PM programs with detailed end-of-day reports, flagged repairs, on-site quoting, and organized equipment history.",
  },
];

const PM_STEPS = [
  {
    num: "1",
    title: "Number & Identify",
    desc: "Each door and dock is numbered, categorized, and recorded by type and size.",
  },
  {
    num: "2",
    title: "Inspect & Service",
    desc: "Equipment is inspected, tested, adjusted, and maintained by experienced technicians.",
  },
  {
    num: "3",
    title: "Daily Reports",
    desc: "Detailed end-of-day reports outline findings, completed adjustments, and concerns identified.",
  },
  {
    num: "4",
    title: "Flag Repairs",
    desc: "Further repairs are clearly flagged so nothing gets missed.",
  },
  {
    num: "5",
    title: "Quote On Site",
    desc: "Quotes are generated on site where applicable for faster decision-making.",
  },
];

const WHAT_SETS_US_APART = [
  "Numbered and categorized equipment",
  "Detailed inspection findings",
  "Record of adjustments completed",
  "Repair items clearly flagged",
  "On-site quoting where applicable",
  "End-of-day reporting",
  "Organized equipment history",
];

const TRUST_POINTS = [
  {
    title: "50+ Years Combined Experience",
    desc: "Our team brings over 50 years of hands-on industry experience to every job — residential, commercial, and industrial.",
  },
  {
    title: "In-House Reporting Platform",
    desc: "We document, track, and communicate — so you stay informed and in control. Clear reporting between Marquis and your team is a top priority.",
  },
  {
    title: "24/7 Emergency Service",
    desc: "A stuck door doesn't wait for business hours. We're available around the clock for emergency repairs across Calgary and area.",
  },
];

const FOOTER_SERVICES = [
  "Commercial Overhead Doors",
  "Operators & Controls",
  "Dock Equipment",
  "Preventative Maintenance",
  "Spring Replacement",
  "24/7 Emergency Service",
];

export default function HomePage() {
  return (
    <>
      {/* ─── STICKY HEADER ─── */}
      <header
        className="sticky top-0 z-50 border-b border-white/10"
        style={{ background: NAVY }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/marquis/logo-full-white.svg"
            alt="Marquis Overhead"
            height={44}
            style={{ height: 44, width: "auto" }}
          />

          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-blue-200">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#maintenance" className="hover:text-white transition-colors">Maintenance</a>
            <a href="#why-us" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="tel:+14036179797"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: ORANGE }}
          >
            <span>📞</span>
            <span className="hidden sm:inline">(403) 617-9797</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
        <div className="h-[3px]" style={{ background: ORANGE }} />
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center">
        <Image
          src="/images/riley-action.jpg"
          alt="Marquis Overhead technician servicing a commercial overhead door"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(4,23,47,0.90) 0%, rgba(4,23,47,0.75) 50%, rgba(4,23,47,0.40) 100%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="font-bold text-[11px] tracking-[5px] uppercase mb-4" style={{ color: ORANGE }}>
            Calgary &amp; Area
          </p>
          <h1 className="font-black text-white text-5xl sm:text-6xl leading-[1.05] mb-5 tracking-tight max-w-2xl uppercase">
            Commercial<br />Door &amp; Dock<br />
            <span style={{ color: ORANGE }}>Specialists.</span>
          </h1>
          <p className="text-blue-200 text-lg font-light mb-4 max-w-md leading-relaxed">
            Built on 50+ years of combined industry experience.
          </p>
          <p className="text-blue-300 text-sm mb-10 max-w-md">
            Overhead Door Installation · Operators &amp; Controls · Dock Equipment · Preventative Maintenance
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              Schedule a Facility Review
            </a>
            <a
              href="tel:+14036179797"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              (403) 617-9797
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICE STRIP ─── */}
      <div className="py-5" style={{ background: "#0B1E35" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-bold tracking-wide text-white/80">
            {["Commercial Overhead Doors", "Operators & Controls", "Dock Equipment", "Preventative Maintenance", "24/7 Emergency Service"].map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline" style={{ color: ORANGE }}>·</span>}
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>
            What We Do
          </p>
          <h2 className="text-4xl font-black text-center mb-3" style={{ color: NAVY }}>
            Our Services
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Reliable service for warehouses, distribution centres, and commercial facilities across Alberta.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-3 h-3 rounded-full mb-4 transition-transform group-hover:scale-125"
                  style={{ background: ORANGE }}
                />
                <h3 className="font-black text-base mb-2" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREVENTATIVE MAINTENANCE ─── */}
      <section id="maintenance" className="py-20" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>
            Scheduled Service
          </p>
          <h2 className="text-4xl font-black text-center text-white mb-2">Preventative Maintenance</h2>
          <p className="text-center font-bold tracking-wide text-white mb-2 text-sm">
            BETTER REPORTING. BETTER COMMUNICATION. BETTER CONTROL.
          </p>
          <p className="text-center text-blue-300 max-w-2xl mx-auto mb-14">
            Keep your facility running with organized preventative maintenance, clear reporting, and fast follow-up on repair needs.
          </p>

          {/* 5-step process */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
            {PM_STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-4"
                  style={{ background: ORANGE }}
                >
                  {step.num}
                </div>
                <h3 className="font-black text-white text-sm mb-2 uppercase tracking-wide">{step.title}</h3>
                <p className="text-blue-300 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* What sets us apart + CTA */}
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div
              className="rounded-xl p-8"
              style={{ background: "rgba(255,255,255,0.06)", border: `1px solid rgba(247,73,1,0.3)` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                  style={{ background: ORANGE }}
                >
                  ★
                </div>
                <h3 className="font-black text-white text-xl">What Sets Us Apart</h3>
              </div>
              <ul className="space-y-3">
                {WHAT_SETS_US_APART.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-blue-100">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-black"
                      style={{ background: ORANGE }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-[10px] tracking-[4px] uppercase mb-3" style={{ color: ORANGE }}>
                Powered by Our In-House Platform
              </p>
              <h3 className="font-black text-2xl text-white mb-4">
                Schedule a Facility Review
              </h3>
              <p className="text-blue-300 text-sm leading-relaxed mb-6">
                We document, track, and communicate — so you stay informed and in control. Clear communication between Marquis and your team is a top priority.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white font-bold">
                  <span style={{ color: ORANGE }}>📞</span>
                  <a href="tel:+14036179797" className="hover:underline">(403) 617-9797</a>
                </div>
                <div className="flex items-center gap-3 text-white font-bold">
                  <span style={{ color: ORANGE }}>🌐</span>
                  <span>marquisoverhead.com</span>
                </div>
                <div className="flex items-center gap-3 text-white font-bold">
                  <span style={{ color: ORANGE }}>📍</span>
                  <span>Calgary &amp; Area</span>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
                style={{ background: ORANGE }}
              >
                Ask About PM Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHOTO SHOWCASE ─── */}
      <section className="py-2 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden group">
              <Image
                src="/images/riley-action.jpg"
                alt="Marquis Overhead technician on the job"
                fill
                className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="block text-[10px] font-bold tracking-[3px] uppercase mb-1" style={{ color: ORANGE }}>
                  Our Technicians
                </span>
                <span className="block font-black text-xl text-white">Hands-On Service</span>
              </div>
            </div>
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden group">
              <Image
                src="/images/commercial-doors.jpg"
                alt="Commercial overhead door installation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="block text-[10px] font-bold tracking-[3px] uppercase mb-1" style={{ color: ORANGE }}>
                  Commercial
                </span>
                <span className="block font-black text-xl text-white">Overhead Doors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY MARQUIS ─── */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>
            Why Choose Us
          </p>
          <h2 className="text-4xl font-black text-center mb-12" style={{ color: NAVY }}>
            The Marquis Difference
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {TRUST_POINTS.map((t) => (
              <div key={t.title} className="text-center p-6">
                <div
                  className="w-12 h-1 mx-auto mb-5 rounded"
                  style={{ background: ORANGE }}
                />
                <h3 className="font-black text-lg mb-3" style={{ color: NAVY }}>{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* New company, proven experience callout */}
          <div
            className="rounded-2xl p-8 sm:p-12 text-center"
            style={{ background: NAVY }}
          >
            <p
              className="font-bold text-[11px] tracking-[5px] uppercase mb-4"
              style={{ color: ORANGE }}
            >
              New Company. Proven Experience.
            </p>
            <h3 className="font-black text-3xl sm:text-4xl text-white mb-4">
              Built on 50+ Years of Combined Industry Experience.
            </h3>
            <p className="text-blue-300 max-w-xl mx-auto mb-8">
              Marquis Overhead was founded by industry veterans who have spent decades in the field. We bring that experience to every facility we service.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ─── TEAM / BRAND ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/riley-profile.jpg"
                alt="Riley Mason — Marquis Overhead brand ambassador"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-[11px] tracking-[4px] uppercase mb-3" style={{ color: ORANGE }}>
                Our Team
              </p>
              <h2 className="text-4xl font-black mb-4" style={{ color: NAVY }}>
                Real Work.<br />Real People.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Marquis Overhead is built by people who know the trade. Our technicians bring hands-on experience, branded professionalism, and a work ethic that shows up on every job site — from a single door repair to a full facility PM program.
              </p>
              <ul className="space-y-3 mb-8">
                {["Tools. Service. Workwear.", "Calgary & Area locals", "Commercial door & dock specialists", "Detailed, documented work on every visit"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium" style={{ color: NAVY }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ORANGE }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
                style={{ background: ORANGE }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>
            Get In Touch
          </p>
          <h2 className="text-4xl font-black text-center mb-3" style={{ color: NAVY }}>
            Request a Free Quote
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Tell us what you need — we&apos;ll get back to you within one business day. For same-day service, call us directly at <a href="tel:+14036179797" className="font-bold" style={{ color: ORANGE }}>(403) 617-9797</a>.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <div className="py-12" style={{ background: NAVY }}>
          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/marquis/logo-full-white.svg"
                alt="Marquis Overhead"
                style={{ height: 56, width: "auto", marginBottom: "1rem" }}
              />
              <p className="text-blue-300 text-sm leading-relaxed">
                Commercial overhead door installation, repairs, dock equipment, and preventative maintenance programs for businesses across Alberta.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-black text-white text-sm tracking-wider uppercase mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-blue-300">
                {FOOTER_SERVICES.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-black text-white text-sm tracking-wider uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-300">
                <li>
                  <a href="tel:+14036179797" className="hover:text-white transition-colors">
                    📞 (403) 617-9797
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@marquisoverhead.com" className="hover:text-white transition-colors">
                    ✉ contact@marquisoverhead.com
                  </a>
                </li>
                <li className="pt-1 text-blue-400">Calgary &amp; Area, Alberta</li>
                <li className="text-blue-400">marquisoverhead.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ background: ORANGE }} className="px-6 py-3">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: NAVY }}>
              Overhead Doors · Repairs · Installations
            </span>
            <span className="text-[11px] font-bold" style={{ color: NAVY }}>
              © {new Date().getFullYear()} Marquis Overhead
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
