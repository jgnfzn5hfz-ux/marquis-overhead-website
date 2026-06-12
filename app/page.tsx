import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const NAVY = "#0D1F35";
const ORANGE = "#F07A20";

const SERVICES = [
  {
    title: "New Door Installation",
    desc: "Steel, insulated sectional, and custom garage doors for homes and acreages. Same-day quotes, professional installation.",
  },
  {
    title: "Repairs & Spring Service",
    desc: "Broken spring? Snapped cable? Stuck door? We carry common parts on the truck and get you moving again fast.",
  },
  {
    title: "Operators & Smart Home",
    desc: "LiftMaster and Chamberlain operators, myQ smart connectivity, battery backup, and full safety sensor setup.",
  },
  {
    title: "Commercial & Dock",
    desc: "Rolling steel doors, dock levelers, seals, and vehicle restraints for warehouses and industrial facilities.",
  },
];

const MAINTENANCE_FEATURES = [
  {
    icon: "📋",
    title: "Door-by-Door Inspection",
    desc: "Every overhead door, dock leveler, and seal at your facility is checked and logged at each visit.",
  },
  {
    icon: "📸",
    title: "Photo Documentation",
    desc: "Visual record of wear, damage, and completed repairs — attached to every report.",
  },
  {
    icon: "⚠️",
    title: "Priority Findings",
    desc: "Issues flagged by urgency, with clear recommendations and quotes for any repairs needed.",
  },
  {
    icon: "✅",
    title: "Safety & Compliance Checks",
    desc: "Sensor tests, restraint checks, and operator inspections — documented for your records.",
  },
  {
    icon: "🗂️",
    title: "Digital Maintenance History",
    desc: "Every report archived and accessible, so you can track the condition of each door over time.",
  },
  {
    icon: "📅",
    title: "Scheduled Visit Summary",
    desc: "A clear summary of what was done at each visit and when the next one is due.",
  },
];

const TRUST_POINTS = [
  {
    icon: "⚡",
    title: "Same-Day Service",
    desc: "Broken spring or stuck door doesn't wait — neither do we. Fast dispatch across Calgary and the surrounding area.",
  },
  {
    icon: "🏠",
    title: "Residential Specialists",
    desc: "From single-car garages to acreages and new builds — we know residential doors inside and out.",
  },
  {
    icon: "🤝",
    title: "You're Always in the Loop",
    desc: "We keep you informed from first call to final install. No surprises on timing, pricing, or scope — just clear communication and a job done right.",
  },
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
          <div className="flex items-center gap-3 flex-shrink-0">
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
          </div>

          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-blue-200">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#maintenance" className="hover:text-white transition-colors">Maintenance Plans</a>
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
            <span>(403) 617-9797</span>
          </a>
        </div>
        <div className="h-[3px]" style={{ background: ORANGE }} />
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center">
        <Image
          src="/images/hero-home.jpg"
          alt="Modern home with overhead garage doors"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,31,53,0.82) 0%, rgba(13,31,53,0.60) 60%, rgba(13,31,53,0.30) 100%)" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="font-bold text-[11px] tracking-[5px] uppercase mb-4" style={{ color: ORANGE }}>
            Calgary &amp; Area — Residential &amp; Commercial
          </p>
          <h1 className="font-black text-white text-5xl sm:text-6xl leading-[1.05] mb-5 tracking-tight max-w-2xl">
            Garage Doors &amp;<br />Overhead Doors<br />
            <span style={{ color: ORANGE }}>Done Right.</span>
          </h1>
          <p className="text-blue-200 text-xl font-light mb-10 max-w-lg leading-relaxed">
            New installations, spring repairs, and same-day service for homeowners in Calgary and area.
          </p>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>What We Do</p>
          <h2 className="text-4xl font-black text-center mb-3" style={{ color: NAVY }}>Our Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">From broken springs to brand-new doors — fast, reliable service for homeowners and businesses across Alberta.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="p-6 rounded-xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-3 h-3 rounded-full mb-4 transition-transform group-hover:scale-125" style={{ background: ORANGE }} />
                <h3 className="font-black text-base mb-2" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO SHOWCASE ─── */}
      <section className="py-2 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden group">
              <Image
                src="/images/residential-doors.jpg"
                alt="Residential overhead door installation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="block text-[10px] font-bold tracking-[3px] uppercase mb-1" style={{ color: ORANGE }}>Residential</span>
                <span className="block font-black text-xl text-white">Sectional Doors</span>
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
                <span className="block text-[10px] font-bold tracking-[3px] uppercase mb-1" style={{ color: ORANGE }}>Commercial</span>
                <span className="block font-black text-xl text-white">Industrial Doors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY MARQUIS ─── */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>Why Choose Us</p>
          <h2 className="text-4xl font-black text-center mb-12" style={{ color: NAVY }}>The Marquis Difference</h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {TRUST_POINTS.map((t) => (
              <div key={t.title} className="text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-black text-lg mb-2" style={{ color: NAVY }}>{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Door construction callout */}
          <div className="rounded-2xl overflow-hidden grid sm:grid-cols-2 shadow-sm border border-gray-100">
            <div className="relative h-72 sm:h-auto">
              <Image
                src="/images/door-construction.jpg"
                alt="Insulated door panel cross-section"
                fill
                className="object-contain bg-white p-4"
              />
            </div>
            <div className="p-8 flex flex-col justify-center" style={{ background: NAVY }}>
              <p className="font-bold text-[10px] tracking-[4px] uppercase mb-3" style={{ color: ORANGE }}>Quality You Can See</p>
              <h3 className="font-black text-2xl text-white mb-4">Insulated Steel Construction</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                We install polyurethane foam-injected steel sectional doors — better insulation, quieter operation, and built to last Alberta winters. The same product used in fire halls and warehouses, now in your garage.
              </p>
              <ul className="space-y-2">
                {["High R-value insulation", "Quieter, smoother operation", "Heavy-duty galvanized tracks", "Weatherseal on all four sides"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ORANGE }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMERCIAL MAINTENANCE ─── */}
      <section id="maintenance" className="py-20" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[10px] tracking-[4px] uppercase text-center mb-3" style={{ color: ORANGE }}>
            New · Commercial Services
          </p>
          <h2 className="text-4xl font-black text-center text-white mb-4">Commercial Maintenance Reporting</h2>
          <p className="text-center text-blue-300 max-w-2xl mx-auto mb-12">
            A scheduled maintenance program for warehouses, dock equipment, and multi-location facilities — with a clear, documented report after every visit.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {MAINTENANCE_FEATURES.map((f) => (
              <div key={f.title} className="text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-black text-lg text-white mb-2">{f.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-lg transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              📋 Ask About Maintenance Plans
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-bold text-[11px] tracking-[4px] uppercase text-center mb-2" style={{ color: ORANGE }}>Get In Touch</p>
          <h2 className="text-4xl font-black text-center mb-3" style={{ color: NAVY }}>Request a Free Quote</h2>
          <p className="text-center text-gray-500 mb-10">
            Tell us what you need — we&apos;ll get back to you within one business day. For same-day service, book online and we&apos;ll reach out to confirm.
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
              <div className="flex items-center gap-3 mb-4">
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
              </div>
              <p className="text-blue-300 text-sm leading-relaxed">
                Garage door installation, repairs, and service for homeowners and businesses across Alberta.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-black text-white text-sm tracking-wider uppercase mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-blue-300">
                <li>Overhead Door Installation</li>
                <li>Repairs &amp; Service</li>
                <li>Dock Equipment</li>
                <li>Operators &amp; Controls</li>
                <li>Spring Replacement</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-black text-white text-sm tracking-wider uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-300">
                <li><a href="tel:+14036179797" className="hover:text-white transition-colors">📞 (403) 617-9797</a></li>
                <li><a href="mailto:contact@marquisoverhead.com" className="hover:text-white transition-colors">✉ contact@marquisoverhead.com</a></li>
                <li className="pt-1 text-blue-400">Calgary &amp; Area, Alberta</li>
                <li className="text-blue-400">Residential &amp; Commercial</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ background: ORANGE }} className="px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-1 max-w-full">
          <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: NAVY }}>
            Overhead Doors · Repairs · Installations
          </span>
          <span className="text-[11px] font-bold" style={{ color: NAVY }}>
            © {new Date().getFullYear()} Marquis Overhead
          </span>
        </div>
      </footer>
    </>
  );
}
