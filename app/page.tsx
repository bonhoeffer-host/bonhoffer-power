"use client";
import Image from "next/image";
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

const whyUs = [
  { icon: "⛽", title: "High Fuel Efficiency", desc: "Engineered engines designed to maximize output per gallon of diesel." },
  { icon: "🛡️", title: "Silent Canopy Design", desc: "Sound-dampening acoustic enclosure that lowers operating noise." },
  { icon: "⚡", title: "Reliable Power Output", desc: "Steady active loads for continuous runs without dips or voltage drops." },
  { icon: "🏗️", title: "Heavy-Duty Construction", desc: "Built with premium structural metals that withstand tough jobs." },
  { icon: "🔧", title: "Easy Operation & Maintenance", desc: "Self-explanatory setup and layout designed for rapid upkeep." },
  { icon: "📉", title: "Low Operating Cost", desc: "Save budgets with minimal servicing tasks and long service life." },
  { icon: "❄️", title: "Excellent Cooling System", desc: "Optimized air ventilation routes to run cooler in hot environments." },
  { icon: "⏳", title: "Long Service Life", desc: "Built with quality components to last through years of peak backup runs." },
  { icon: "🎛️", title: "Stable Voltage & Frequency", desc: "High-spec alternators output clean power safe for sensitive tech." },
  { icon: "🔄", title: "Suitable for Continuous Operation", desc: "Industrial-grade hardware configured to support long running times." },
];

const industries = [
  { icon: "🏗️", name: "Construction" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🌾", name: "Agriculture" },
  { icon: "🏨", name: "Hospitality" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "🏫", name: "Education" },
  { icon: "🏪", name: "Retail" },
  { icon: "🏛️", name: "Government Projects" },
  { icon: "🛣️", name: "Infrastructure Development" },
  { icon: "⛏️", name: "Mining" },
];

const benefits = [
  "Continuous Power Supply",
  "Low Noise Emission",
  "Superior Fuel Economy",
  "Robust Protection System",
  "Easy Installation",
  "Long Operating Life",
  "Excellent After-Sales Support",
];

const trustItems = [
  { icon: "🌍", label: "International Quality Standards" },
  { icon: "🔩", label: "Durable Engineering" },
  { icon: "⚡", label: "Reliable Performance" },
  { icon: "🔋", label: "Energy Efficient" },
  { icon: "💰", label: "Competitive Pricing" },
  { icon: "📞", label: "Professional Technical Support" },
  { icon: "🚚", label: "Fast Spare Parts Availability" },
  { icon: "🤝", label: "Customer-Centric Service" },
];

const faqs = [
  {
    q: "What is a silent diesel generator?",
    a: "A silent diesel generator is enclosed within a soundproof canopy that significantly reduces operating noise while delivering reliable power.",
  },
  {
    q: "Where can these generators be used?",
    a: "They are suitable for homes, offices, factories, hospitals, construction sites, hotels, farms, and other locations requiring dependable backup power.",
  },
  {
    q: "Are Bonhoeffer generators fuel-efficient?",
    a: "Yes. Bonhoeffer Silent Diesel Generators are designed to provide excellent fuel efficiency while maintaining stable performance.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. We offer technical assistance, spare parts support, and maintenance guidance to ensure reliable long-term operation.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", mobile: "", email: "", country: "", state: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", company: "", mobile: "", email: "", country: "", state: "", product: "", message: "" });
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home">
              <Image src="/bonhoeffer_logo.webp" alt="Bonhoeffer Power" width={160} height={36} className="object-contain" priority />
            </a>
            <ul className="hidden md:flex items-center gap-4 lg:gap-8">
              {["About", "Products", "Applications", "Advantages", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-gray-700 font-medium text-sm hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Request a Quote
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-600" aria-label="menu">
              <span className="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
              <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 bg-gray-700 transition-transform" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
            </button>
          </div>
          {menuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
              {["About", "Products", "Applications", "Advantages", "FAQ", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-1">{l}</a>
              ))}
              <a href="#contact" className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2">Request a Quote</a>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-[500px] md:min-h-[480px] py-12 md:py-0 flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/banner.webp" alt="Bonhoeffer Power Banner" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary-light text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                ⚡ Bonhoeffer Power
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
                Power You Can Trust.{" "}
                <span className="text-primary-light">Performance That Never Stops.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Reliable and fuel-efficient Silent Diesel Generators engineered for homes, commercial facilities, industrial operations, construction sites, and emergency backup power. Bonhoeffer Power delivers dependable electricity with low noise, superior performance, and long service life.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  Explore Generators
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image src="/silent-generator.webp" alt="About Bonhoeffer Power" fill className="object-cover" sizes="(max-width:1024px)100vw,50vw" />
                <div className="absolute bottom-6 left-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-black">10+</div>
                  <div className="text-xs opacity-90 mt-1">Years of Excellence</div>
                </div>
              </div>
              <div>
                <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">About Us</span>
                <div className="w-10 h-1 bg-primary rounded mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Reliable Power Solutions for Every Application</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Bonhoeffer Power provides high-performance Silent Diesel Generators designed to deliver uninterrupted power whenever you need it. Built with advanced diesel engine technology, our generators combine fuel efficiency, durability, and low-noise operation to meet the demands of residential, commercial, industrial, and agricultural applications.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Whether you require standby, prime, or continuous power, Bonhoeffer Power generators ensure dependable performance under all operating conditions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#products" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5">Explore Generators</a>
                  <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5">Request a Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section id="advantages" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Why Bonhoeffer</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Why Choose Bonhoeffer Power?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We combine engineering, quality components, and support to deliver generators that outperform expectations under all loads.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:bg-primary hover:border-primary transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-primary-pale group-hover:bg-white/20 flex items-center justify-center text-2xl mx-auto mb-4 transition-colors duration-300">{w.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors text-sm">{w.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/80 text-xs leading-relaxed transition-colors">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT RANGE ── */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Our Product Range</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Silent Diesel Generators</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Reliable backup power solutions designed for quiet operation, fuel efficiency, and long-lasting performance.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {generators.map((g) => (
                <div key={g.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="bg-primary-pale p-5 flex items-center justify-center h-52 relative overflow-hidden">
                    <Image src={g.img} alt={g.name} width={180} height={180} className="object-contain group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">{g.tag}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-black text-gray-900 mb-1">{g.name}</h3>
                    <p className="text-xs text-primary font-semibold bg-primary-pale px-2 py-0.5 rounded-full inline-block mb-3 self-start">{g.desc}</p>
                    <ul className="space-y-1.5 text-xs text-gray-500 flex-1">
                      {g.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a href="#contact" className="block text-center bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 rounded-lg transition-all">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLICATIONS ── */}
        <section id="applications" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Applications</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Bonhoeffer Silent Diesel Generators are suitable for:</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: "🏠", title: "Residential Backup Power" },
                { icon: "🏢", title: "Commercial Buildings" },
                { icon: "🏗️", title: "Construction Sites" },
                { icon: "🏭", title: "Industrial Facilities" },
                { icon: "🏥", title: "Hospitals & Healthcare" },
                { icon: "🏫", title: "Schools & Educational Institutions" },
                { icon: "🏨", title: "Hotels & Restaurants" },
                { icon: "🏪", title: "Retail Stores" },
                { icon: "📦", title: "Warehouses" },
                { icon: "🌾", title: "Agricultural Farms" },
                { icon: "📡", title: "Telecommunications" },
                { icon: "🎪", title: "Event Power Supply" },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-5 hover:-translate-y-1 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{s.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR ADVANTAGES / BENEFITS ── */}
        <section className="py-20 bg-dark-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary -translate-y-1/2 translate-x-1/3" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-primary/30 border border-primary/50 text-primary-light font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Our Advantages</span>
                <div className="w-10 h-1 bg-primary rounded mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Built for Reliability</h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Every Bonhoeffer generator is manufactured using premium components and tested to deliver dependable performance in demanding environments.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">Learn More →</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/15 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-primary-light text-sm flex-shrink-0">✓</div>
                    <span className="text-white font-medium text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SERVE ── */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block bg-white/20 text-white font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Industries We Serve</span>
              <div className="w-10 h-1 bg-white/60 rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Serving Diverse Industries</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="bg-white/15 border border-white/25 rounded-xl p-5 text-center hover:bg-white/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <h3 className="text-white font-semibold text-sm">{ind.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CUSTOMERS TRUST BONHOEFFER ── */}
        <section className="py-20 bg-primary-pale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/20 text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Trust</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Why Customers Trust Bonhoeffer</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-4 border border-gray-100 hover:border-primary hover:shadow-md hover:translate-x-1 transition-all text-sm font-semibold text-gray-800">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="py-20 bg-dark-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block bg-primary/30 border border-primary/50 text-primary-light font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Need a Reliable Silent Diesel Generator?</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Our experts are ready to help you select the ideal generator for your application and power requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl text-base">
                Request a Quote
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base">
                Contact Our Team
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">FAQ</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-primary shadow-md shadow-primary/10" : "border-gray-100"}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    <span>{f.q}</span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 ml-4 transition-all duration-300 ${openFaq === i ? "bg-primary text-white rotate-45" : "bg-primary-pale text-primary"}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Contact Us</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Let&apos;s Find the Perfect Silent Generator for Your Needs</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Our power experts are ready to guide you on sizing and customized enclosure specifications.</p>
            </div>
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Info */}
              <div className="lg:col-span-2 space-y-4">
                {[
                  { icon: "📧", label: "Email Us", value: "info@bonhoefferpower.com" },
                  { icon: "📞", label: "Call Us", value: "+91 98765 43210" },
                  { icon: "📍", label: "Office", value: "India – Pan India Operations" },
                  { icon: "🕒", label: "Working Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 hover:border-primary hover:translate-x-1 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-primary-pale flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 pt-2">
                  {[{ l: "in", t: "LinkedIn" }, { l: "f", t: "Facebook" }, { l: "📸", t: "Instagram" }, { l: "▶", t: "YouTube" }].map((s) => (
                    <a key={s.t} href="#" title={s.t} className="w-10 h-10 rounded-xl bg-primary-pale border border-gray-100 flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">{s.l}</a>
                  ))}
                </div>
              </div>
              {/* Form */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Request a Free Consultation</h3>
                <p className="text-gray-400 text-sm mb-6">Our team will respond within 24 hours.</p>
                {submitted && (
                  <div className="bg-primary-pale border border-primary rounded-xl p-4 mb-5 text-primary font-semibold text-sm">
                    ✅ Thank you! We&apos;ve received your enquiry and will contact you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Full Name *", placeholder: "Your full name", type: "text", key: "name", required: true },
                      { id: "company", label: "Company Name", placeholder: "Facility / Company name", type: "text", key: "company", required: false },
                      { id: "mobile", label: "Mobile Number *", placeholder: "+91 98765 43210", type: "tel", key: "mobile", required: true },
                      { id: "email", label: "Email Address", placeholder: "your@email.com", type: "email", key: "email", required: false },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-xs font-semibold text-gray-700 mb-1.5">{field.label}</label>
                        <input
                          id={field.id} type={field.type} placeholder={field.placeholder} required={field.required}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="country" className="block text-xs font-semibold text-gray-700 mb-1.5">Country</label>
                      <select id="country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                        <option value="">Select Country</option>
                        <option>India</option><option>Sri Lanka</option><option>Bangladesh</option><option>Nepal</option><option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-xs font-semibold text-gray-700 mb-1.5">State</label>
                      <input id="state" type="text" placeholder="Your state" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-xs font-semibold text-gray-700 mb-1.5">Product Interest</label>
                    <select id="product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                      <option value="">Select product category</option>
                      {["Silent Diesel Generators", "Acoustic Enclosures", "ATS Panels", "Spare Parts Support", "General Enquiry"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      id="message" rows={4}
                      placeholder="Describe your generator requirement, load capacity, site application..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm">
                    📩 Request a Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image src="/bonhoeffer_logo.webp" alt="Bonhoeffer Power" width={160} height={36} className="object-contain brightness-0 invert mb-4" />
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Bonhoeffer Power delivers high-performance, quiet, and reliable silent diesel generators for residential, commercial, and industrial power demands.
              </p>
              <div className="flex gap-3">
                {[{ l: "in", t: "LinkedIn" }, { l: "f", t: "Facebook" }, { l: "📸", t: "Instagram" }, { l: "▶", t: "YouTube" }].map((s) => (
                  <a key={s.t} href="#" title={s.t} className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/70 font-bold text-xs hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all">{s.l}</a>
                ))}
              </div>
            </div>
            {[
              { title: "Quick Links", items: ["Home", "About Us", "Products", "Applications", "Advantages", "FAQ", "Contact Us"] },
              { title: "Products & Services", items: ["Silent Generators", "Industrial Canopies", "ATS & Sync Panels", "Control Systems", "Spare Parts", "Maintenance Guidance"] },
              { title: "Customer Support", items: ["Product Catalogues", "Warranty Registration", "Spare Parts", "After-Sales Support", "FAQs"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 pb-2 border-b-2 border-primary inline-block">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                        <span className="text-primary text-base">›</span>{item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/35 text-xs">
          <p>© 2025 Bonhoeffer Power. All rights reserved.</p>
          <p>Silent Diesel Generators – Power You Can Trust.</p>
        </div>
      </footer>
    </>
  );
}
