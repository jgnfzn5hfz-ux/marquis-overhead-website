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

const RESIDENTIAL_FEATURES = [
  {
    title: "Built for the Canadian Climate",
    desc: "A continuous polyurethane insulated core, arctic-grade bottom seal, dual-seal section joints, and double-fin perimeter weatherstrip reduce airflow and help lower your energy bills all winter long.",
  },
  {
    title: "Built to Last",
    desc: "Sections are made from high-strength, rust-resistant galvanized steel with a baked-on polyester paint finish — durability and good looks that hold up season after season.",
  },
  {
    title: "Energy Efficient",
    desc: "Available in 1⅜\" (R-12) and 2\" (R-18) insulated thicknesses for superior thermal efficiency — a warmer garage and a quieter, smoother door.",
  },
];

const RESIDENTIAL_SERVICES = [
  {
    title: "New Garage Door Installation",
    desc: "Insulated Canadian-made steel doors in up to 20' × 14' sizes — supply, install, and haul-away of your old door.",
  },
  {
    title: "Broken Spring & Cable Repair",
    desc: "Snapped torsion springs, frayed cables, and off-track doors — fast, safe repairs to get your door moving again.",
  },
  {
    title: "Openers & Remotes",
    desc: "Quiet belt-drive and smart Wi-Fi openers with battery backup, keypads, remotes, and safety-sensor setup — installed and tested.",
  },
  {
    title: "Tune-Ups & Safety Checks",
    desc: "Seasonal maintenance to keep your door quiet, balanced, and safe — before a small issue becomes an emergency.",
  },
];

const DESIGN_OPTIONS = [
  {
    img: "/images/residential/panel-styles.png",
    title: "7 Panel Styles",
    desc: "From clean Flush and Plank to Raised and Recessed Ranch and Colonial looks.",
  },
  {
    img: "/images/residential/colour-options.png",
    title: "12 Colour Options",
    desc: "Ten factory colours plus two rich woodtone finishes to match your home.",
  },
  {
    img: "/images/residential/window-inserts.png",
    title: "Decorative Window Inserts",
    desc: "A wide range of window layouts — Ranch, Colonial, Arch, and more.",
  },
  {
    img: "/images/residential/glass-styles.png",
    title: "Glass & Grid Options",
    desc: "Clear, Satin, Obscure, and Dark-tint glass, with optional aluminum grids.",
  },
];

const TUNE_UP_INCLUDES = [
  "Full garage door inspection",
  "Spring tension adjustment",
  "Lubricate all moving parts",
  "Safety sensor test & align",
  "Balance & travel test",
  "Hardware tighten & check",
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
  "Residential Garage Doors",
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
            <a href="#residential" className="hover:text-white transition-colors">Residential</a>
            <a href="#maintenance" className="hover:text-white transition-colors">Maintenance</a>
            <a href="#why-us" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* CTA */}
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
      <section className="relative min-h-[92vh] flex items-center">
        <Image
          src="/images/dock-hero.jpg"
          alt="Commercial loading dock with Calgary skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(4,23,47,0.88) 0%, rgba(4,23,47,0.70) 50%, rgba(4,23,47,0.35) 100%)" }}
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

      {/* ─── RESIDENTIAL ─── */}
      <section id="residential" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>
            For Your Home
          </p>
          <h2 className="text-4xl font-black text-center mb-3" style={{ color: NAVY }}>
            Residential Garage Doors
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            Proudly Canadian-made garage doors, installed by the same experienced crew that services Alberta&apos;s busiest facilities. Insulated for our winters and finished to match your home.
          </p>

          {/* Canadian-made feature */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
              <Image
                src="/images/residential/hero-modern.jpg"
                alt="Modern Alberta home with insulated black garage doors at dusk"
                fill
                className="object-cover"
              />
              <span
                className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[11px] font-black tracking-wide"
                style={{ background: ORANGE }}
              >
                🍁 CANADIAN MADE
              </span>
            </div>
            <div>
              <p className="font-bold text-[10px] tracking-[4px] uppercase mb-3" style={{ color: ORANGE }}>
                Why Homeowners Choose Us
              </p>
              <h3 className="font-black text-2xl sm:text-3xl mb-6" style={{ color: NAVY }}>
                Made in Canada. Built for Canadian Winters.
              </h3>
              <div className="space-y-5">
                {RESIDENTIAL_FEATURES.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <span
                      className="w-6 h-6 mt-0.5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[11px] font-black"
                      style={{ background: ORANGE }}
                    >
                      ✓
                    </span>
                    <div>
                      <h4 className="font-black text-base mb-1" style={{ color: NAVY }}>{f.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What we do */}
          <h3 className="text-2xl font-black text-center mb-8" style={{ color: NAVY }}>
            What We Do for Homeowners
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {RESIDENTIAL_SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-orange-300 hover:shadow-lg transition-all group"
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

          {/* Design your door */}
          <div className="rounded-2xl p-8 sm:p-10 mb-20" style={{ background: "#EEF1F6" }}>
            <p className="font-bold text-[10px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>
              Make It Yours
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-center mb-3" style={{ color: NAVY }}>
              Design Your Door
            </h3>
            <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
              Mix and match panel styles, colours, and windows to complement your home.
            </p>
            <div className="space-y-6">
              {DESIGN_OPTIONS.map((o, i) => (
                <figure
                  key={o.title}
                  className={`bg-white rounded-xl border border-gray-100 overflow-hidden sm:flex sm:items-center ${i % 2 ? "sm:flex-row-reverse" : ""}`}
                >
                  <div className="sm:w-3/5 p-4 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.img} alt={o.title} className="w-full h-auto" />
                  </div>
                  <figcaption className="sm:w-2/5 p-6 sm:p-8">
                    <h4 className="font-black text-lg mb-2" style={{ color: NAVY }}>{o.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-8 max-w-xl mx-auto">
              Woodtone finishes shown include Cocoa Hickory &amp; Honey Cedar. Colours shown will vary from the actual steel finish — ask us for samples.
            </p>
          </div>

          {/* Spring Tune-Up Special */}
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] mb-8">
                <Image
                  src="/images/residential/showcase-bungalow.jpg"
                  alt="Calgary bungalow with new insulated grey garage doors"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-bold text-[10px] tracking-[4px] uppercase mb-3" style={{ color: ORANGE }}>
                Seasonal Special
              </p>
              <h3 className="font-black text-3xl mb-4" style={{ color: NAVY }}>
                Garage Door Tune-Up
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                A noisy, sluggish, or off-balance door is usually an easy fix — and cheaper than a breakdown. Our multi-point tune-up keeps your door running smoothly and safely all year.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
                style={{ background: ORANGE }}
              >
                Book a Tune-Up
              </a>
            </div>

            <div
              className="rounded-xl p-8"
              style={{ background: NAVY }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                  style={{ background: ORANGE }}
                >
                  ✓
                </div>
                <h3 className="font-black text-white text-xl">What&apos;s Included</h3>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {TUNE_UP_INCLUDES.map((item) => (
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
      <section className="relative h-[500px] sm:h-[600px]">
        <Image
          src="/images/dock-feature.jpg"
          alt="Commercial overhead door with Calgary Tower in background at sunset"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(4,23,47,0.85) 0%, rgba(4,23,47,0.40) 60%, rgba(4,23,47,0.10) 100%)" }}
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <p className="font-bold text-[11px] tracking-[5px] uppercase mb-4" style={{ color: ORANGE }}>
              Commercial Specialists
            </p>
            <h2 className="font-black text-white text-4xl sm:text-5xl leading-tight mb-5 max-w-lg">
              Every Door.<br />Every Dock.<br />
              <span style={{ color: ORANGE }}>Done Right.</span>
            </h2>
            <p className="text-blue-200 max-w-sm leading-relaxed mb-8">
              From a single spring replacement to a full loading dock retrofit — Marquis Overhead brings the experience and equipment to handle it.
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
