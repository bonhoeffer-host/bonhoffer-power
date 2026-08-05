"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const generators = [
  {
    img: "/BON-DG35Kw (2).jpg",
    name: "BON-DG-11KW-1P",
    tag: "11 kW",
    desc: "11 kW Silent Diesel Generator",
    highlights: [
      "Standby ( Kva / Kw) :- 12Kva / 12Kw",
      "Rated ( Kva / Kw) :- 11Kva / 11Kw",
      "Phase:- 1-phase",
      "Power Factor :- 1",
      "Volt :- 110/220V",
      "Frequency:- 50 HZ",
      "Current (A) :- 55",
      "Engine:- Faw 4DW81-23D",
      "Alternator:- 1st All QYI184ES",
      "Controller:- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: "/BON-DG35Kw (3).jpg",
    name: "BON-DG-17KW-1P",
    tag: "17 kW",
    desc: "17 kW Silent Diesel Generator",
    highlights: [
      "Standby ( Kva / Kw) :- 19Kva / 19Kw",
      "Rated ( Kva / Kw) :- 17Kva / 17Kw",
      "Phase:- 1-phase",
      "Power Factor :- 1",
      "Volt :- 110/220V",
      "Frequency:- 50 HZ",
      "Current (A) :- 84",
      "Engine:- Faw 4DW92-35D",
      "Alternator:- 1st All QYI184F",
      "Controller:- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: "/BON-DG35Kw (4).jpg",
    name: "BON-DG-20KW-1P",
    tag: "20 kW",
    desc: "20 kW Silent Diesel Generator",
    highlights: [
      "Standby ( Kva / Kw) :- 28Kva / 22Kw",
      "Rated ( Kva / Kw) :- 25Kva / 20Kw",
      "Phase:- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency:- 50 HZ",
      "Current (A) :- 100",
      "Engine:- Faw 4DW92-39D",
      "Alternator:- 1st All QYI184H",
      "Controller:- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: "/BON-DG35Kw (5).jpg",
    name: "BON-DG-25KW-1P",
    tag: "25 kW",
    desc: "25 kW Silent Diesel Generator",
    highlights: [
      "Standby ( Kva / Kw) :- 35Kva / 28Kw",
      "Rated ( Kva / Kw) :- 31Kva / 25Kw",
      "Phase:- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency:- 50 HZ",
      "Current (A) :- 125",
      "Engine:- Faw 4DX22-50D",
      "Alternator:- 1st All QYI224C",
      "Controller:- Deepsea DSE4520",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
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

// socialLinks and local navigation states have been refactored into global layout components

export default function Home() {
  const [activeApp, setActiveApp] = useState<number | null>(null);

  return (
    <>
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
                <Link key={g.name} href="/products" className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group flex flex-col shadow-sm cursor-pointer">
                  <div className="relative h-60 w-full overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-100 to-white">
                    <Image src={g.img} alt={g.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-black px-3 py-1 rounded-full shadow-md z-10">{g.tag}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-1">{g.name}</h3>
                      <p className="text-xs text-primary font-bold bg-primary-pale/80 px-2.5 py-1 rounded-md inline-block mb-4">{g.desc}</p>
                      <ul className="space-y-1 text-[11px] text-slate-600 mb-6">
                        {g.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full text-center bg-slate-900 group-hover:bg-primary text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md group-hover:shadow-lg flex items-center justify-center gap-2">
                      View Full Range
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </div>
                  </div>
                </Link>
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
    </>
  );
}
