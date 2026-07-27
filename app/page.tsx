"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const generators = [
  {
    img: "https://bonhoeffermachines.com/public/machines/BON-DG-20KW-1P.webp",
    name: "BON-DG-20KW-1P",
    tag: "20 kW",
    desc: "20 kW Silent Diesel Generator",
    highlights: [
      "High-performance diesel engine",
      "Low-noise acoustic enclosure",
      "Fuel-efficient operation",
      "Stable power output",
      "Ideal for commercial and industrial applications",
    ],
  },
  {
    img: "https://bonhoeffermachines.com/public/machines/BON-DG-17KW-1P.webp",
    name: "BON-DG-17KW-1P",
    tag: "17 kW",
    desc: "17 kW Silent Diesel Generator",
    highlights: [
      "Reliable backup power",
      "Heavy-duty construction",
      "Low maintenance",
      "Compact silent design",
      "Easy operation",
    ],
  },
  {
    img: "https://bonhoeffermachines.com/public/machines/BON-DG-15KW-1P.webp",
    name: "BON-DG-15KW-1P",
    tag: "15 kW",
    desc: "15 kW Silent Diesel Generator",
    highlights: [
      "Efficient fuel consumption",
      "Durable engine",
      "Stable electrical output",
      "Quiet performance",
      "Suitable for residential and commercial use",
    ],
  },
  {
    img: "https://bonhoeffermachines.com/public/machines/BON-DG-11KW-1P.webp",
    name: "BON-DG-11KW-1P",
    tag: "11 kW",
    desc: "11 kW Silent Diesel Generator",
    highlights: [
      "Compact and portable design",
      "Silent operation",
      "Low fuel consumption",
      "Reliable emergency backup",
      "Easy maintenance",
    ],
  },
];

const advantages = [
  {
    icon: "⛽",
    title: "High Fuel Efficiency",
    desc: "Advanced engines maximize power output while minimizing diesel consumption, reducing fuel costs and improving overall operating efficiency.",
  },
  {
    icon: "🔇",
    title: "Silent Canopy Design",
    desc: "Advanced acoustic enclosures significantly reduce operating noise, creating a quieter, more comfortable environment for surrounding personnel and communities.",
  },
  {
    icon: "⚡",
    title: "Reliable Power Output",
    desc: "Delivers stable, uninterrupted power for continuous operation, maintaining consistent performance without voltage fluctuations or unexpected power interruptions.",
  },
  {
    icon: "🏗️",
    title: "Heavy-Duty Construction",
    desc: "Built with premium-grade materials and robust components to withstand demanding industrial environments and challenging operating conditions.",
  },
  {
    icon: "🔧",
    title: "Easy Operation & Maintenance",
    desc: "User-friendly controls and accessible components simplify operation, servicing, and routine maintenance, reducing downtime and improving overall convenience.",
  },
  {
    icon: "💰",
    title: "Low Operating Cost",
    desc: "Designed for efficient operation, minimal maintenance requirements, and long service life, helping reduce total ownership and operating costs.",
  },
  {
    icon: "❄️",
    title: "Excellent Cooling System",
    desc: "Optimized cooling and ventilation systems maintain efficient engine temperatures, ensuring reliable performance even in demanding hot-weather conditions.",
  },
  {
    icon: "⏳",
    title: "Long Service Life",
    desc: "Premium-quality components and robust engineering ensure dependable performance and extended service life under demanding operating conditions.",
  },
  {
    icon: "🎛️",
    title: "Stable Voltage & Frequency",
    desc: "Advanced alternators deliver clean, stable power with consistent voltage and frequency, protecting sensitive electrical and electronic equipment.",
  },
  {
    icon: "🔄",
    title: "Suitable for Continuous Operation",
    desc: "Industrial-grade components and robust engineering enable reliable, extended operation for demanding applications requiring long running hours.",
  },
];

const applications = [
  {
    icon: "🏠",
    title: "Residential Backup Power",
    img: "/BON-DG35Kw (2).jpg",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for homes during unexpected power outages. Designed to keep essential household systems running, they can support lighting, refrigerators, air conditioning, water pumps, security systems, home offices, and other critical electrical equipment.",
      "With reliable performance and efficient operation, our generator sets help ensure comfort, safety, and peace of mind for residential properties. Whether used as an automatic standby power solution or for extended backup requirements, our generators deliver dependable power when you need it most.",
    ],
  },
  {
    icon: "🏢",
    title: "Commercial Buildings",
    img: "/BON-DG35Kw (3).jpg",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for offices, business centers, corporate buildings, and other commercial facilities. Designed to support essential electrical systems during power outages, they help keep lighting, elevators, HVAC systems, security systems, IT infrastructure, and other critical equipment operating.",
      "With excellent performance, durability, and efficient operation, our generator sets help businesses maintain continuity and minimize disruption caused by unexpected power failures. Whether used as a standby power solution or for extended backup requirements, our generators deliver reliable power for demanding commercial environments.",
    ],
  },
  {
    icon: "🏗️",
    title: "Construction Sites",
    img: "/BON-DG35Kw (4).jpg",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable power for construction sites, infrastructure projects, and temporary work locations where access to grid electricity may be limited or unavailable. Designed for demanding environments, our generators can support construction tools, heavy machinery, lighting systems, site offices, welding equipment, pumps, and other essential electrical equipment.",
      "Built for reliable performance and continuous operation, our generator sets help construction teams maintain productivity and minimize downtime. With durable construction and dependable power output, they provide an efficient power solution for projects of different sizes and requirements.",
    ],
  },
  {
    icon: "🏭",
    title: "Industrial Facilities",
    img: "/BON-DG35Kw (5).jpg",
    paras: [
      "Our reliable industrial diesel generator sets are designed to meet the demanding power requirements of factories, manufacturing plants, processing facilities, and other industrial operations. They provide dependable backup power to support production machinery, manufacturing equipment, control systems, pumps, compressors, lighting, and other critical industrial applications.",
      "Engineered for reliable performance and continuous operation, our generator sets help minimize downtime and maintain operational continuity during power interruptions. With durable construction, stable power output, and efficient operation, they provide a dependable power solution for demanding industrial environments.",
    ],
  },
  {
    icon: "🏥",
    title: "Hospitals & Healthcare",
    img: "/BON-DG35Kw (6).jpg",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for hospitals, clinics, medical centers, laboratories, and other healthcare facilities. Designed to support critical operations during power interruptions, our generators can provide power for medical equipment, emergency systems, lighting, HVAC systems, refrigeration, communication systems, and other essential healthcare infrastructure.",
      "With reliable performance and dependable operation, our generator sets help healthcare facilities maintain essential services and minimize disruption during power failures. Built to deliver stable and consistent power, they provide a trusted backup power solution for environments where reliable electricity is essential.",
    ],
  },
  {
    icon: "🏫",
    title: "Schools & Educational Institutions",
    img: "/BON-DG35Kw.jpg",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for schools, colleges, universities, training centers, and other educational institutions. During power interruptions, they help maintain essential operations by supporting classroom lighting, computer laboratories, servers, networking systems, security systems, communication equipment, water pumps, and other critical electrical infrastructure.",
      "Designed for reliable performance and efficient operation, our generator sets help educational institutions continue their academic and administrative activities with minimal disruption. Whether used for emergency backup or extended power requirements, our generators provide a dependable power solution for creating a safe, connected, and productive learning environment.",
    ],
  },
  {
    icon: "🏨",
    title: "Hotels & Restaurants",
    img: "/a1.webp",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for hotels, resorts, restaurants, cafés, and other hospitality establishments. During power interruptions, they help maintain essential guest services and business operations by supporting lighting, air conditioning, refrigeration, kitchen equipment, elevators, water pumps, security systems, and other critical facilities.",
      "In the hospitality industry, uninterrupted power is essential for guest comfort and customer satisfaction. Our generator sets are designed to deliver reliable performance and stable power, helping hotels and restaurants continue their operations smoothly while minimizing disruption during unexpected power failures.",
    ],
  },
  {
    icon: "🏪",
    title: "Retail Stores",
    img: "/a3.webp",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for retail stores, supermarkets, shopping centers, department stores, and other commercial retail facilities. During power interruptions, they help keep essential operations running by supporting lighting, point-of-sale systems, refrigeration and freezers, security systems, elevators, automatic doors, IT equipment, and other critical electrical systems.",
      "Reliable power is essential for maintaining customer service and protecting business operations. Our generator sets are designed to deliver dependable performance during unexpected power failures, helping retail businesses minimize downtime, protect temperature-sensitive products, and continue serving customers with confidence.",
    ],
  },
  {
    icon: "📦",
    title: "Warehouses",
    img: "/a4.webp",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for warehouses, distribution centers, logistics facilities, and storage operations. During power interruptions, they help maintain essential operations by supporting warehouse lighting, security and surveillance systems, material-handling equipment, loading and unloading systems, refrigeration and cold-storage units, IT infrastructure, and other critical electrical equipment.",
      "Designed for reliable performance in demanding operational environments, our generator sets help warehouses minimize downtime and maintain smooth day-to-day operations. Whether used for emergency backup power or extended power requirements, they provide a dependable solution for protecting inventory, supporting logistics, and maintaining business continuity.",
    ],
  },
  {
    icon: "🌾",
    title: "Agricultural Farms",
    img: "/a5.webp",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable power for agricultural farms, livestock facilities, poultry farms, dairy farms, greenhouses, and other agricultural operations. They help support essential equipment such as irrigation systems, water pumps, ventilation and cooling systems, milking equipment, feeding systems, refrigeration units, lighting, and other farm machinery.",
      "Designed for reliable performance in both remote and grid-connected locations, our generator sets help agricultural businesses maintain continuous operations during power interruptions. With dependable power and efficient operation, they support productivity, protect livestock and crops, and help ensure the smooth operation of essential agricultural systems.",
    ],
  },
  {
    icon: "📡",
    title: "Telecommunications",
    img: "/silent-generator.webp",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable backup power for telecommunications towers, network infrastructure, data transmission facilities, and other critical communication systems. During power interruptions, they help keep essential telecommunications equipment operating, including network systems, communication equipment, signal transmission systems, monitoring systems, and supporting infrastructure.",
      "Reliable power is essential for maintaining continuous connectivity and communication services. Our generator sets are designed to deliver dependable performance in remote and demanding locations, helping telecommunications operators minimize service interruptions and maintain network availability during grid power failures.",
    ],
  },
  {
    icon: "🎪",
    title: "Event Power Supply",
    img: "/banner.webp",
    paras: [
      "Our reliable industrial diesel generator sets provide dependable power for concerts, exhibitions, conferences, festivals, sports events, outdoor functions, weddings, and other temporary events. They help support essential event equipment, including stage lighting, sound systems, LED screens, catering equipment, temporary structures, cooling systems, and other electrical installations.",
      "Designed to deliver reliable and stable power in a wide range of locations, our generator sets help event organizers maintain smooth operations and minimize the risk of power interruptions. Whether for a small private function or a large-scale public event, our dependable power solutions help ensure a successful and uninterrupted event experience.",
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919667515523",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<number | null>(null);

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center">
              <Image src="/bonhoeffer_logo.webp" alt="Bonhoeffer Power" width={160} height={36} className="object-contain hover:opacity-90 transition-opacity" priority />
            </a>
            <ul className="hidden md:flex items-center gap-4 lg:gap-8">
              <li>
                <a
                  href="#home"
                  className="text-slate-700 font-semibold text-sm hover:text-primary transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  Home
                </a>
              </li>
              {["About", "Advantages", "Products", "Applications", "Contact"].map((l) => (
                <li key={l}>
                  {l === "About" ? (
                    <Link
                      href="/about"
                      className="text-slate-700 font-semibold text-sm hover:text-primary transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                    >
                      {l}
                    </Link>
                  ) : l === "Contact" ? (
                    <Link
                      href="/contact"
                      className="text-slate-700 font-semibold text-sm hover:text-primary transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                    >
                      {l}
                    </Link>
                  ) : (
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-slate-700 font-semibold text-sm hover:text-primary transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                    >
                      {l}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
              <span>Request a Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-700" aria-label="menu">
              <span className="block w-6 h-0.5 bg-slate-800 mb-1.5 transition-transform" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
              <span className="block w-6 h-0.5 bg-slate-800 mb-1.5" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 bg-slate-800 transition-transform" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
            </button>
          </div>
          {menuOpen && (
            <div className="lg:hidden border-t border-slate-100 py-4 flex flex-col gap-3">
              <a href="#home" onClick={() => setMenuOpen(false)} className="text-slate-700 font-medium py-1">Home</a>
              {["About", "Advantages", "Products", "Applications", "Contact"].map((l) =>
                l === "About" ? (
                  <Link key={l} href="/about" onClick={() => setMenuOpen(false)} className="text-slate-700 font-medium py-1">{l}</Link>
                ) : l === "Contact" ? (
                  <Link key={l} href="/contact" onClick={() => setMenuOpen(false)} className="text-slate-700 font-medium py-1">{l}</Link>
                ) : (
                  <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-slate-700 font-medium py-1">{l}</a>
                )
              )}
              <Link href="/contact" className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2">Request a Quote</Link>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-[460px] md:min-h-[440px] py-10 md:py-0 flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/banner.webp" alt="Bonhoeffer Power Banner" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-green/95 via-dark-green/85 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-light text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                ⚡ Bonhoeffer Power • Silent Diesel Generators
              </span>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug tracking-tight mb-4">
                Power You Can Trust.{" "}
                <span className="text-primary-light">Performance That Never Stops.</span>
              </h1>
              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-xl font-normal">
                Reliable and fuel-efficient Silent Diesel Generators engineered for homes, commercial facilities, industrial operations, construction sites, and emergency backup power. Bonhoeffer Power delivers dependable electricity with low noise, superior performance, and long service life.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#products" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-md hover:-translate-y-0.5">
                  Explore Generators
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/70 hover:border-white hover:bg-white/10 text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ADVANTAGES SECTION ── */}
        <section id="advantages" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/20 border border-primary/40 text-lime-400 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-md">
                ADVANTAGES
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Why Choose <span className="text-primary-light">Bonhoeffer Power?</span>
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-lime-400 rounded-full mx-auto mb-4" />
              <p className="text-slate-400 max-w-2xl mx-auto text-base">
                Engineered to maximize efficiency, quietness, and performance under demanding industrial and residential operational conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className="group relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/60 rounded-3xl p-8 hover:bg-slate-800/90 hover:border-primary/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/20 transition-colors pointer-events-none" />
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-pale/20 to-primary/30 border border-primary/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      {adv.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-300">
                    <span className="font-mono">BENEFIT 0{i + 1}</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">✓ Certified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR PRODUCT RANGE (PLACED IN THE MIDDLE) ── */}
        <section id="products" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary-pale border border-primary/20 text-primary font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-sm">
                OUR PRODUCT RANGE
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Silent Diesel Generators
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Explore our robust series of high-performance generators built for continuous reliability, low maintenance, and silent operation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {generators.map((g) => (
                <div key={g.name} className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group flex flex-col shadow-sm">
                  <div className="bg-gradient-to-b from-slate-100 to-white p-6 flex items-center justify-center h-60 relative overflow-hidden border-b border-slate-100">
                    <Image src={g.img} alt={g.name} width={200} height={200} className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-black px-3 py-1 rounded-full shadow-md">{g.tag}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-1">{g.name}</h3>
                      <p className="text-xs text-primary font-bold bg-primary-pale/80 px-2.5 py-1 rounded-md inline-block mb-4">{g.desc}</p>
                      <ul className="space-y-2 text-xs text-slate-600 mb-6">
                        {g.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact" className="w-full text-center bg-slate-900 hover:bg-primary text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md group-hover:shadow-lg">
                      Request Details & Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLICATION SECTION ── */}
        <section id="applications" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 border border-primary/20">
                APPLICATION
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Versatile Power Across Industries
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Discover how Bonhoeffer industrial diesel generator sets provide dependable continuous and backup electricity across diverse operations.
              </p>
            </div>

            {/* Quick Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-14">
              {applications.map((app, idx) => (
                <button
                  key={app.title}
                  onClick={() => setActiveApp(activeApp === idx ? null : idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${
                    activeApp === idx
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="text-sm">{app.icon}</span>
                  <span>{app.title}</span>
                </button>
              ))}
            </div>

            {/* Application Showcase Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {applications.map((app, idx) => (
                <div
                  key={app.title}
                  id={`app-${idx}`}
                  className={`bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${
                    activeApp !== null && activeApp !== idx ? "opacity-50 blur-[0.5px]" : "opacity-100"
                  }`}
                >
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={app.img}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:1024px)100vw,50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                      <span className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md">
                        <span>{app.icon}</span>
                        <span>APPLICATION 0{idx + 1}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/50">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-primary-pale text-primary text-lg flex items-center justify-center">{app.icon}</span>
                        <span>{app.title}</span>
                      </h3>
                      <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        {app.paras.map((para, pi) => (
                          <p key={pi} className="font-normal">{para}</p>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Industrial Grade</span>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-extrabold text-primary hover:text-primary-hover transition-colors">
                        <span>Inquire for {app.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GET STARTED / CTA SECTION (NEW HIGH-END DESIGN) ── */}
        <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
          {/* Ambient Lighting FX */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/30 via-lime-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-deep/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-lime-400 font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-6 shadow-xl">
              ⚡ GET STARTED
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Need a Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">Silent Diesel Generator?</span>
            </h2>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Our power experts are ready to help you select the ideal generator set for your application and power requirements. Contact our sales and engineering team today.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold px-9 py-4 rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 text-base">
                <span>Request a Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 border border-slate-700 hover:border-slate-500 bg-slate-800/80 hover:bg-slate-800 text-white font-extrabold px-9 py-4 rounded-xl transition-all hover:-translate-y-1 text-base shadow-md">
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image src="/bonhoeffer_logo.webp" alt="Bonhoeffer Power" width={160} height={36} className="object-contain brightness-0 invert mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Bonhoeffer Power delivers high-performance, quiet, and reliable silent diesel generators for residential, commercial, and industrial power demands.
              </p>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 transition-all"
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Quick Links", items: ["Home", "About Us", "Advantages", "Products", "Applications", "Contact Us"] },
              { title: "Products & Services", items: ["Silent Generators", "Industrial Canopies", "ATS & Sync Panels", "Control Systems", "Spare Parts", "Maintenance Guidance"] },
              { title: "Customer Support", items: ["Product Catalogues", "Warranty Registration", "Spare Parts", "After-Sales Support", "FAQs"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 pb-2 border-b-2 border-primary inline-block">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                        <span className="text-primary text-base">›</span>{item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <p>© 2025 Bonhoeffer Power. All rights reserved.</p>
          <p>Silent Diesel Generators – Power You Can Trust.</p>
        </div>
      </footer>
    </>
  );
}
