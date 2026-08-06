"use client";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import { useState, useEffect } from "react";

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
    desc: "Optimized engines deliver maximum power with lower fuel consumption and reduced operating costs.",
  },
  {
    icon: "🔇",
    title: "Silent Operation",
    desc: "Advanced canopy design reduces noise for comfortable and quiet performance.",
  },
  {
    icon: "⚡",
    title: "Reliable Power",
    desc: "Stable and uninterrupted power supply for homes, industries, and businesses.",
  },
  {
    icon: "🏗️",
    title: "Heavy-Duty Design",
    desc: "Built with durable components to perform in demanding conditions.",
  },
  {
    icon: "🔧",
    title: "Easy Maintenance",
    desc: "User-friendly design simplifies servicing and reduces downtime.",
  },
  {
    icon: "💰",
    title: "Low Operating Cost",
    desc: "Efficient performance with reduced maintenance and running expenses.",
  },
  {
    icon: "❄️",
    title: "Advanced Cooling",
    desc: "Efficient cooling system ensures reliable operation in all conditions.",
  },
  {
    icon: "⏳",
    title: "Long Service Life",
    desc: "Premium components ensure durability and extended performance.",
  },
  {
    icon: "🎛️",
    title: "Stable Power Output",
    desc: "Consistent voltage and frequency protect your electrical equipment.",
  },
  {
    icon: "🔄",
    title: "Continuous Operation",
    desc: "Designed for long hours of reliable industrial performance.",
  },
];

const applications = [
  {
    icon: "🏠",
    title: "Residential Backup Power",
    img: "/BON-DG35Kw (2).jpg",
    paras: [
      "Reliable diesel generators provide uninterrupted backup power for homes during outages. They support lighting, AC, refrigerators, water pumps, security systems, and other essential appliances.",
      "Designed for quiet operation and efficient performance, they ensure comfort, safety, and peace of mind."
    ],
  },

  {
    icon: "🏢",
    title: "Commercial Buildings",
    img: "/BON-DG35Kw (3).jpg",
    paras: [
      "Bonhoeffer generators deliver dependable backup power for offices, business centers, and commercial facilities.",
      "They support critical systems including lighting, elevators, HVAC, IT infrastructure, and security systems to maintain business continuity."
    ],
  },

  {
    icon: "🏗️",
    title: "Construction Sites",
    img: "/BON-DG35Kw (4).jpg",
    paras: [
      "Built for demanding environments, our generators provide reliable power for construction tools, machinery, lighting, and site operations.",
      "Durable design ensures continuous performance and reduced downtime at project locations."
    ],
  },

  {
    icon: "🏭",
    title: "Industrial Facilities",
    img: "/BON-DG35Kw (5).jpg",
    paras: [
      "Our industrial generators deliver stable power for factories, manufacturing units, and processing facilities.",
      "Designed for heavy-duty applications, they help maintain production and operational efficiency."
    ],
  },

  {
    icon: "🏥",
    title: "Hospitals & Healthcare",
    img: "/BON-DG35Kw (6).jpg",
    paras: [
      "Reliable backup power solutions for hospitals, clinics, and healthcare facilities where continuous electricity is essential.",
      "Supports medical equipment, emergency systems, lighting, and critical healthcare operations."
    ],
  },

  {
    icon: "🏫",
    title: "Schools & Institutions",
    img: "/BON-DG35Kw.jpg",
    paras: [
      "Provides dependable backup power for schools, colleges, and educational facilities.",
      "Keeps classrooms, labs, servers, lighting, and essential systems running during outages."
    ],
  },

  {
    icon: "🏨",
    title: "Hotels & Restaurants",
    img: "/a1.webp",
    paras: [
      "Ensures uninterrupted power for hotels, restaurants, and hospitality businesses.",
      "Supports lighting, cooling systems, kitchens, refrigeration, and guest services."
    ],
  },

  {
    icon: "🏪",
    title: "Retail Stores",
    img: "/a3.webp",
    paras: [
      "Reliable generators help retail businesses maintain smooth operations during power failures.",
      "Supports POS systems, lighting, refrigeration, security, and customer services."
    ],
  },

  {
    icon: "📦",
    title: "Warehouses",
    img: "/a4.webp",
    paras: [
      "Provides dependable power for warehouses, logistics centers, and storage facilities.",
      "Supports lighting, security systems, equipment, and operational activities."
    ],
  },

  {
    icon: "🌾",
    title: "Agricultural Farms",
    img: "/a5.webp",
    paras: [
      "Designed to support farms with reliable power for irrigation, pumps, ventilation, and essential equipment.",
      "Helps maintain productivity and smooth agricultural operations."
    ],
  },

  {
    icon: "📡",
    title: "Telecommunications",
    img: "/silent-generator.webp",
    paras: [
      "Provides reliable backup power for telecom towers and communication infrastructure.",
      "Ensures continuous connectivity by supporting critical network equipment."
    ],
  },

  {
    icon: "🎪",
    title: "Event Power Supply",
    img: "/banner.webp",
    paras: [
      "Reliable temporary power solutions for concerts, exhibitions, weddings, and outdoor events.",
      "Supports lighting, sound systems, catering equipment, and event infrastructure."
    ],
  },
];

export default function Home() {
  const [activeApp, setActiveApp] = useState<number | null>(null);
  
        const [selectedProduct, setSelectedProduct] = useState(generators[0]);


  return (
    <>
    <main className="pt-16">
  <section
    id="home"
    className="relative flex items-center overflow-hidden min-h-[460px] md:min-h-[440px] lg:min-h-[520px] py-10 md:py-0"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <Image
        src="/banner.webp"
        alt="Bonhoeffer Power Banner"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-dark-green/95 via-dark-green/85 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 mb-5 rounded-full border border-primary/40 bg-primary/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-light sm:text-xs">
          ⚡ Bonhoeffer Power • Silent Diesel Generators
        </span>

        {/* Heading */}
        <h1 className="mb-5 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Trusted Power.
          <br />
          <span className="text-primary-light">
            Lasting Performance.
          </span>
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">
          Efficient Silent Diesel Generators providing reliable, low-noise backup
          power solutions for homes, industries, and businesses.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl"
          >
            Explore Generators
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </div>

      </div>
    </div>
  </section>



{/* ── ADVANTAGES SECTION ──
<section
  id="advantages"
  className="overflow-hidden bg-white py-24"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Section Header 
    <div className="mb-14 text-center">
      <span className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        Advantages
      </span>

      <h2 className="text-3xl font-black text-gray-900 md:text-4xl lg:text-5xl">
        Why Choose <span className="text-primary">Bonhoeffer Power?</span>
      </h2>

      <div className="mx-auto my-5 h-1 w-20 rounded-full bg-primary" />

      <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">
        Engineered to maximize efficiency, quietness, and performance under
        demanding industrial and residential operating conditions.
      </p>
    </div>

    {/* Advantage Cards 
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {advantages.map((adv, index) => {
        const images = [
          "/BON-DG35Kw (2).jpg",
          "/BON-DG35Kw (3).jpg",
          "/BON-DG35Kw (4).jpg",
          "/BON-DG35Kw (5).jpg",
          "/BON-DG35Kw (2).jpg",
          "/BON-DG35Kw (3).jpg",
        ];

        return (
          <div
            key={adv.title}
            className="group relative h-[250px] cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            {/* Background Image 
            <Image
              src={images[index % images.length]}
              alt={adv.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay 
            <div className="absolute inset-0 bg-black/80 transition-all duration-300 group-hover:bg-black/65" />

            {/* Top Accent 
            <div className="absolute left-0 top-0 h-1 w-full bg-primary" />

            {/* Card Content 
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-3 text-sm font-bold uppercase leading-6 tracking-wide text-white">
                {adv.title}
              </h3>

              <p className="text-xs leading-5 text-gray-200">
                {adv.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section> */}



{/* ── ADVANTAGES SECTION ── */}
<section
  id="advantages"
  className="py-20 bg-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <div className="mb-14">

      <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
        Advantages
      </span>

      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
        Why Choose Bonhoeffer Power?
      </h2>

      <p className="mt-5 max-w-3xl text-gray-600 leading-8">
        Engineered to maximize efficiency, quietness, and performance under
        demanding industrial and residential operational conditions.
      </p>

    </div>

    {/* Cards */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {advantages.map((adv) => (

        <div
          key={adv.title}
          className="bg-white border border-gray-200 rounded-md p-6 transition-all duration-300 hover:border-primary hover:shadow-lg"
        >

          {/* Icon + Title */}

          <div className="flex items-start gap-3 mb-4">

            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary text-lg flex-shrink-0">
              {adv.icon}
            </div>

            <h3 className="text-[18px] font-bold text-gray-900 leading-6">
              {adv.title}
            </h3>

          </div>

          {/* Description */}

          <p className="text-[14px] text-gray-600 leading-7">
            {adv.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>
{/* ── OUR PRODUCT RANGE ── */}
<section
  id="products"
  className="border-b border-gray-200 bg-white py-20"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="mb-14 text-center">
      <span className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
        Our Product Range
      </span>

      <h2 className="text-3xl font-black text-gray-900 lg:text-4xl">
        Silent Diesel Generators
      </h2>

      <div className="mx-auto my-5 h-1 w-20 rounded-full bg-primary" />

      <p className="mx-auto max-w-2xl text-gray-600">
        Explore our robust series of high-performance generators built for
        continuous reliability, low maintenance, and silent operation.
      </p>
    </div>

    {/* Product Layout */}
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[90px_1fr_1fr]">

      {/* Thumbnail Gallery */}
      <div
        className="
          scrollbar-hide
          flex w-full gap-4 overflow-x-auto pb-2
          lg:h-[500px] lg:w-[90px] lg:flex-col
          lg:justify-center lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0
        "
      >
        {generators.map((generator) => (
          <button
            key={generator.name}
            onClick={() => setSelectedProduct(generator)}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 ${
              selectedProduct.name === generator.name
                ? "border-primary ring-2 ring-primary/30 shadow-lg"
                : "border-gray-200 hover:border-primary"
            }`}
          >
            <Image
              src={generator.img}
              alt={generator.name}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Product Image */}
      <div
        className="
          relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg
          h-[280px] sm:h-[380px] md:h-[450px]
          lg:h-[500px] xl:h-[550px]
        "
      >
        <Image
          key={selectedProduct.img}
          src={selectedProduct.img}
          alt={selectedProduct.name}
          fill
          priority
          className="object-contain p-2 transition-transform duration-500 hover:scale-105 sm:p-4"
        />
      </div>

      {/* Product Details */}
      <div>

        {/* Title */}
        <h2 className="text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
          {selectedProduct.name}
        </h2>

        {/* Description */}
        <p className="mt-2 mb-6 text-sm text-gray-600 sm:text-base lg:mb-8 lg:text-lg">
          {selectedProduct.desc}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {selectedProduct.highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2"
            >
              <span className="mt-1 text-primary">⚡</span>

              <span className="text-sm text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-md bg-primary px-8 py-3 font-bold text-white transition-colors hover:bg-primary-hover">
            REQUEST A QUOTE
          </button>

          <button className="rounded-md border border-gray-300 px-8 py-3 font-bold transition-colors hover:border-primary">
            DOWNLOAD BROCHURE
          </button>
        </div>

        {/* Specifications */}
        <button className="mt-8 w-full rounded-md bg-gray-900 py-4 font-bold text-white transition-colors hover:bg-primary">
          VIEW FULL SPECIFICATIONS
        </button>

      </div>
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
