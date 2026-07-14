"use client";
import Image from "next/image";
import { useState } from "react";

const pumps = [
  { img: "/BON-P-WP1.0-31.webp", name: "BON-P-WP1.0-31", tag: "1.0 HP" },
  { img: "/BON-P-WP1.5-79.webp", name: "BON-P-WP1.5-79", tag: "1.5 HP" },
  { img: "/BON-P-WP1.5-224HL.webp", name: "BON-P-WP1.5-224HL", tag: "1.5 HP" },
  { img: "/BON-P-WP2.0-149.webp", name: "BON-P-WP2.0-149", tag: "2.0 HP" },
  { img: "/BON-P-WP2.0-196.webp", name: "BON-P-WP2.0-196", tag: "2.0 HP" },
  { img: "/BON-P-WP2.0-196CH.webp", name: "BON-P-WP2.0-196CH", tag: "2.0 HP" },
  { img: "/BON-P-WP2.0-196TR.webp", name: "BON-P-WP2.0-196TR", tag: "2.0 HP" },
  { img: "/BON-P-WP2.0-224HL.webp", name: "BON-P-WP2.0-224HL", tag: "2.0 HP" },
  { img: "/BON-P-WP2.0-420HL.png", name: "BON-P-WP2.0-420HL", tag: "2.0 HP" },
  { img: "/BON-P-WP3.0-196.webp", name: "BON-P-WP3.0-196", tag: "3.0 HP" },
  { img: "/BON-P-WP3.0-420HL.png", name: "BON-P-WP3.0-420HL", tag: "3.0 HP" },
  { img: "/BON-P-WP4.0-272.webp", name: "BON-P-WP4.0-272", tag: "4.0 HP" },
  { img: "/BON-P-WP6.0-420.webp", name: "BON-P-WP6.0-420", tag: "6.0 HP" },
];

const categories = [
  { icon: "💧", title: "Drip Irrigation", desc: "Efficient water delivery directly to plant roots for maximum water savings." },
  { icon: "🌀", title: "Sprinkler Irrigation", desc: "Uniform water distribution for farms, orchards, gardens, and landscapes." },
  { icon: "🔧", title: "Irrigation Filters", desc: "Protect irrigation systems with advanced filtration technology." },
  { icon: "🎛️", title: "Valves & Control Systems", desc: "Reliable flow control and pressure management for every network." },
  { icon: "🌿", title: "Fertigation Solutions", desc: "Accurate fertilizer application through integrated irrigation systems." },
  { icon: "🔩", title: "Pipes & Fittings", desc: "Premium-quality pipes and accessories for durable infrastructure." },
  { icon: "⚡", title: "Irrigation Automation", desc: "Smart controllers and sensors for automated irrigation management." },
  { icon: "⚙️", title: "Water Pumps", desc: "High-performance pumps for agricultural and commercial irrigation." },
];

const whyUs = [
  { icon: "💦", title: "Water Saving Technology", desc: "Reduce water consumption while maintaining healthy crop growth." },
  { icon: "📈", title: "Higher Crop Yield", desc: "Improve irrigation efficiency for better productivity and quality." },
  { icon: "🏆", title: "Premium Quality Products", desc: "Manufactured using high-grade materials for long service life." },
  { icon: "🔨", title: "Easy Installation", desc: "User-friendly systems designed for quick installation and maintenance." },
  { icon: "👨‍🔬", title: "Technical Expertise", desc: "Professional guidance from planning to implementation." },
  { icon: "🤝", title: "Reliable After-Sales Support", desc: "Dedicated customer service and technical assistance." },
];

const steps = [
  { n: "01", title: "Consultation", desc: "Understand your irrigation requirements." },
  { n: "02", title: "Site Assessment", desc: "Evaluate field conditions and water sources." },
  { n: "03", title: "System Design", desc: "Create a customized irrigation layout." },
  { n: "04", title: "Product Supply", desc: "Deliver high-quality irrigation components." },
  { n: "05", title: "Installation Support", desc: "Technical guidance for smooth installation." },
  { n: "06", title: "Service & Maintenance", desc: "Ensure long-term performance and support." },
];

const industries = [
  { icon: "🌾", name: "Agriculture" }, { icon: "🌱", name: "Horticulture" },
  { icon: "🍇", name: "Fruit Orchards" }, { icon: "☕", name: "Tea & Coffee" },
  { icon: "🏠", name: "Greenhouses" }, { icon: "🌳", name: "Landscaping" },
  { icon: "🏗️", name: "Commercial" }, { icon: "🏛️", name: "Govt Projects" },
  { icon: "🏟️", name: "Sports Grounds" }, { icon: "⛳", name: "Golf Courses" },
];

const benefits = [
  "Save Up to 60% Water", "Reduce Labour Costs", "Improve Crop Health",
  "Uniform Water Distribution", "Increase Farm Productivity", "Lower Energy Consumption",
  "Environmentally Sustainable", "Easy Monitoring & Automation",
];

const testimonials = [
  { text: "Bonhoeffer Irrigation's drip system transformed our farm. We saved over 50% water and our sugarcane yield increased significantly. Excellent product quality and great support.", name: "Ramesh Patel", role: "Sugarcane Farmer, Gujarat", init: "RP" },
  { text: "We installed Bonhoeffer sprinkler systems across our 200-acre orchard. The uniformity and pressure management is outstanding. Highly recommend for large-scale orchards.", name: "Suresh Reddy", role: "Orchard Owner, Telangana", init: "SR" },
  { text: "As an irrigation contractor, Bonhoeffer's filtration and automation products stand out for quality and reliability. My clients are always satisfied.", name: "Manish Verma", role: "Irrigation Contractor, Maharashtra", init: "MV" },
];

const faqs = [
  { q: "Which irrigation system is best for my crop?", a: "The best system depends on your crop type, soil profile, field size, and water availability. Drip irrigation is ideal for row crops, orchards, and vegetables. Sprinkler systems work great for large open fields. Our experts will recommend the perfect solution for your farm." },
  { q: "How much water can drip irrigation save?", a: "Drip irrigation typically saves 40–60% water compared to traditional flood irrigation. By delivering water precisely at the root zone, there is minimal evaporation and zero runoff, making it the most water-efficient irrigation method." },
  { q: "Do you provide complete irrigation solutions?", a: "Yes. Bonhoeffer Irrigation offers end-to-end solutions — from initial consultation and site assessment to system design, product supply, installation support, and ongoing service & maintenance." },
  { q: "Can I become a Bonhoeffer Irrigation dealer?", a: "Absolutely! We welcome dealers across regions. Fill out our dealer application form and our team will contact you with details on margins, training, marketing support, and how to get started." },
  { q: "Do you offer installation support?", a: "Yes. We provide complete technical guidance and installation support for all our products. Our field engineers are available to assist during installation and commissioning." },
  { q: "What warranty is available on your products?", a: "All Bonhoeffer Irrigation products come with manufacturer warranty covering material and workmanship defects. Warranty terms vary by product category — please contact us for details." },
];

const blogs = [
  { img: "/banner.webp", cat: "Drip Irrigation", title: "Complete Guide to Drip Irrigation Systems", date: "July 10, 2025", time: "7 min read" },
  { img: "/1_DESBROZADORA.webp", cat: "Sprinkler", title: "Benefits of Sprinkler Irrigation for Modern Farming", date: "June 25, 2025", time: "5 min read" },
  { img: "/1_bomba-de-agua-gasolina.webp", cat: "Conservation", title: "Water Conservation Through Smart Irrigation", date: "June 14, 2025", time: "6 min read" },
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
              <Image src="/bonhoeffer_logo.png" alt="Bonhoeffer Irrigation" width={160} height={36} className="object-contain" priority />
            </a>
            <ul className="hidden md:flex items-center gap-4 lg:gap-8">
              {["About", "Products", "Solutions", "Dealer", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-gray-700 font-medium text-sm hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">
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
              {["About", "Products", "Solutions", "Dealer", "Blog", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-1">{l}</a>
              ))}
              <a href="#contact" className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2">Request a Quote</a>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-[500px] md:min-h-[400px] py-12 md:py-0 flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/banner.webp" alt="Bonhoeffer Irrigation Banner" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary-light text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                🌱 Bonhoeffer Irrigation
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
                Smart Irrigation Solutions for{" "}
                <span className="text-primary-light">Sustainable Agriculture</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Delivering innovative irrigation systems that maximize crop productivity, conserve water, and improve farming efficiency across agriculture, horticulture, landscaping, and commercial projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  🔍 Explore Products
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1">
                  📋 Request a Quote
                </a>
                <a href="#dealer" className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1">
                  🤝 Become a Dealer
                </a>
              </div>
            </div>
          </div>
          {/* Stats */}

        </section>
        <section>
          <div className=" bottom-0 left-0 right-0 z-10 bg-dark-green/95 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["500+", "Projects Completed"], ["60%", "Water Savings"], ["8+", "Product Categories"], ["10+", "Years Experience"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-primary-light font-black text-2xl md:text-3xl">{n}</div>
                  <div className="text-white/70 text-xs mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image src="/banner.webp" alt="About Bonhoeffer Irrigation" fill className="object-cover" sizes="(max-width:1024px)100vw,50vw" />
                <div className="absolute bottom-6 left-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-black">10+</div>
                  <div className="text-xs opacity-90 mt-1">Years of Excellence</div>
                </div>
              </div>
              <div>
                <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">About Us</span>
                <div className="w-10 h-1 bg-primary rounded mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Precision Irrigation for Better Farming</h2>
                <p className="text-gray-500 leading-relaxed mb-4">Bonhoeffer Irrigation is committed to providing advanced irrigation solutions that help farmers and businesses achieve higher productivity with efficient water management. Our comprehensive product range is engineered for durability, performance, and sustainable agriculture.</p>
                <p className="text-gray-500 leading-relaxed mb-8">Whether you need drip irrigation, sprinkler systems, filtration units, irrigation automation, or complete project solutions, Bonhoeffer Irrigation delivers products designed to perform in diverse farming conditions.</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Drip Irrigation Systems", "Sprinkler Solutions", "Advanced Filtration", "Smart Automation", "Fertigation Units", "Complete Projects"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#products" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5">View Products</a>
                  <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCT CATEGORIES ── */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Our Products</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Our Product Categories</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Comprehensive irrigation solutions engineered for durability, performance, and sustainable agriculture across every application type.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((c) => (
                <div key={c.title} className="bg-white rounded-xl border border-gray-100 p-7 text-center hover:-translate-y-2 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-14 h-14 rounded-2xl bg-primary-pale group-hover:bg-primary flex items-center justify-center text-2xl mx-auto mb-4 transition-colors duration-300">{c.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WATER PUMPS (with real product images) ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Featured Products</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Bonhoeffer Water Pumps</h2>
              <p className="text-gray-500 max-w-xl mx-auto">High-performance water pumps for agricultural and commercial irrigation. Available in 1.0 HP to 6.0 HP configurations.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {pumps.map((p) => (
                <div key={p.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <div className="bg-primary-pale p-5 flex items-center justify-center h-40 relative overflow-hidden">
                    <Image src={p.img} alt={p.name} width={120} height={120} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">{p.tag}</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-gray-800 text-center">{p.name}</h3>
                    <div className="mt-2 text-center">
                      <span className="text-xs text-primary font-semibold bg-primary-pale px-2 py-0.5 rounded-full">Water Pump</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Request Product Catalogue
              </a>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section id="solutions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Applications</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Complete Irrigation Solutions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Designed for every application — from small farms to large commercial projects, we deliver tailored irrigation systems.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🌾", title: "Agriculture Farms", desc: "Comprehensive drip and sprinkler systems designed for large-scale crop farming." },
                { icon: "🍎", title: "Orchards", desc: "Precision micro-irrigation for fruit orchards ensuring optimal yield and quality." },
                { icon: "🏠", title: "Greenhouses", desc: "High-efficiency systems for controlled environment agriculture and nurseries." },
                { icon: "🥦", title: "Vegetable Farming", desc: "Row crop drip irrigation for vegetables ensuring consistent moisture supply." },
                { icon: "🌴", title: "Plantation Crops", desc: "Scalable irrigation networks for sugarcane, banana, and coffee plantations." },
                { icon: "🌳", title: "Landscaping", desc: "Aesthetic yet functional irrigation for lawns, parks, and green spaces." },
                { icon: "🌺", title: "Parks & Gardens", desc: "Sprinkler and drip solutions for beautiful and sustainable public gardens." },
                { icon: "⛳", title: "Golf Courses", desc: "Professional-grade irrigation systems for premium turf management." },
                { icon: "🏗️", title: "Commercial Projects", desc: "Custom-engineered irrigation solutions for large commercial developments." },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Why Bonhoeffer</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Why Choose Bonhoeffer Irrigation</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We combine technology, quality, and expertise to deliver irrigation solutions that outperform expectations in every condition.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:bg-primary hover:border-primary transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-primary-pale group-hover:bg-white/20 flex items-center justify-center text-3xl mx-auto mb-5 transition-colors duration-300">{w.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">{w.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Our Process</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How We Work</h2>
              <p className="text-gray-500 max-w-xl mx-auto">A proven 6-step process to deliver the perfect irrigation solution for your farm or project.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {steps.map((s, i) => (
                <div key={s.n} className="text-center group">
                  <div className="relative inline-block mb-5">
                    <div className="w-16 h-16 rounded-full bg-primary text-white font-black text-lg flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">{s.n}</div>
                    {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-primary/30" />}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block bg-white/20 text-white font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Industries We Serve</span>
              <div className="w-10 h-1 bg-white/60 rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Serving Diverse Industries</h2>
              <p className="text-white/75 max-w-xl mx-auto">Our irrigation solutions span across multiple sectors — delivering water-efficient systems everywhere.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="bg-white/15 border border-white/25 rounded-xl p-5 text-center hover:bg-white/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <h3 className="text-white font-semibold text-sm">{ind.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-20 bg-dark-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary -translate-y-1/2 translate-x-1/3" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-primary/30 border border-primary/50 text-primary-light font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Benefits</span>
                <div className="w-10 h-1 bg-primary rounded mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Benefits of Smart Irrigation</h2>
                <p className="text-white/70 leading-relaxed mb-8">Investing in smart irrigation technology pays off with measurable gains in water efficiency, crop health, and long-term profitability for your farm or project.</p>
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

        {/* ── DEALER ── */}
        <section id="dealer" className="py-20 bg-primary-pale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-primary/20 text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Dealer Program</span>
                <div className="w-10 h-1 bg-primary rounded mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Grow Your Business with Bonhoeffer Irrigation</h2>
                <p className="text-gray-500 leading-relaxed mb-8">Join our expanding dealer network and offer world-class irrigation products to farmers and agricultural businesses. Partner with a trusted brand and build a profitable business delivering premium irrigation solutions.</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: "💰", label: "Attractive Dealer Margins" },
                    { icon: "📢", label: "Marketing Support" },
                    { icon: "🎓", label: "Product Training" },
                    { icon: "🛠️", label: "Technical Assistance" },
                    { icon: "🚚", label: "Fast Product Availability" },
                    { icon: "📞", label: "Dedicated Sales Support" },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-primary hover:translate-x-1 transition-all text-sm font-semibold text-gray-800">
                      <span className="text-xl">{b.icon}</span>{b.label}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">Apply for Dealership →</a>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 text-center">
                <div className="text-6xl mb-5">🤝</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Be Our Trusted Dealer</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Join a community of successful dealers who are growing their business with Bonhoeffer's world-class irrigation products and dedicated support.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[["200+", "Active Dealers"], ["25+", "States Covered"], ["95%", "Dealer Satisfaction"], ["48h", "Product Dispatch"]].map(([n, l]) => (
                    <div key={l} className="bg-primary-pale rounded-xl p-5 text-center">
                      <div className="text-2xl font-black text-primary">{n}</div>
                      <div className="text-gray-500 text-xs mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 w-full">Apply Now – It&apos;s Free</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Testimonials</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Trusted by Farmers and Irrigation Professionals</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Real success stories from farmers and contractors who have experienced the Bonhoeffer difference.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{t.init}</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Project Gallery</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Our Project Gallery</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Showcasing our water pumps and irrigation products that power farms, orchards, and commercial projects.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Large featured image - banner */}
              <div className="md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: "220px" }}>
                <Image src="/banner.webp" alt="Bonhoeffer Irrigation Project" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px)50vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-4 py-5">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Featured</span>
                  <p className="text-white text-sm font-semibold">Smart Irrigation Solutions</p>
                </div>
              </div>
              {/* Pump image 1 */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-primary-pale" style={{ minHeight: "180px" }}>
                <Image src="/BON-P-WP2.0-149.webp" alt="BON-P-WP2.0-149 Water Pump" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-300" sizes="(max-width:768px)50vw,33vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">BON-P-WP2.0 Pump</p>
                </div>
                <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">2.0 HP</span>
              </div>
              {/* Pump image 2 */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-green-50" style={{ minHeight: "180px" }}>
                <Image src="/BON-P-WP3.0-420HL.png" alt="BON-P-WP3.0-420HL Water Pump" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-300" sizes="(max-width:768px)50vw,33vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">BON-P-WP3.0-420HL Pump</p>
                </div>
                <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">3.0 HP</span>
              </div>
              {/* Desbrozadora product */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: "180px" }}>
                <Image src="/1_DESBROZADORA.webp" alt="Bonhoeffer Desbrozadora Equipment" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px)50vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">Agricultural Equipment</p>
                </div>
              </div>
              {/* Water pump product */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: "180px" }}>
                <Image src="/1_bomba-de-agua-gasolina.webp" alt="Bonhoeffer Water Pump" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px)50vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">High-Power Water Pump</p>
                </div>
              </div>
            </div>
            {/* Second row of pump images */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
              {[
                { img: "/BON-P-WP1.0-31.webp", name: "WP1.0-31", tag: "1.0 HP" },
                { img: "/BON-P-WP1.5-79.webp", name: "WP1.5-79", tag: "1.5 HP" },
                { img: "/BON-P-WP2.0-196.webp", name: "WP2.0-196", tag: "2.0 HP" },
                { img: "/BON-P-WP2.0-196CH.webp", name: "WP2.0-196CH", tag: "2.0 HP" },
                { img: "/BON-P-WP4.0-272.webp", name: "WP4.0-272", tag: "4.0 HP" },
                { img: "/BON-P-WP6.0-420.webp", name: "WP6.0-420", tag: "6.0 HP" },
              ].map((p) => (
                <div key={p.name} className="relative rounded-xl overflow-hidden group cursor-pointer bg-primary-pale aspect-square">
                  <Image src={p.img} alt={p.name} fill className="object-contain p-3 group-hover:scale-110 transition-transform duration-300" sizes="(max-width:640px)33vw,(max-width:768px)25vw,16vw" />
                  <span className="absolute top-1.5 right-1.5 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{p.tag}</span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-[10px] font-semibold text-center">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOGS ── */}
        <section id="blog" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Latest Blogs</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Latest from Our Blog</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Expert guides and insights on irrigation systems, water conservation, and modern farming techniques.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {blogs.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="h-48 relative overflow-hidden">
                    <Image src={b.img} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px)100vw,33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{b.cat}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors">{b.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>📅 {b.date}</span>
                      <span>⏱ {b.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-primary-pale text-primary font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">FAQ</span>
              <div className="w-10 h-1 bg-primary rounded mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Find answers to common questions about Bonhoeffer irrigation products and solutions.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-primary shadow-md shadow-primary/10" : "border-gray-100"}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:text-primary transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Let&apos;s Build a Smarter Irrigation System Together</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Our experts are ready to help you choose the right irrigation solution for your farm or project.</p>
            </div>
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Info */}
              <div className="lg:col-span-2 space-y-4">
                {[
                  { icon: "📧", label: "Email Us", value: "info@bonhoefferirrigation.com" },
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
                      { id: "company", label: "Company Name", placeholder: "Farm / Company name", type: "text", key: "company", required: false },
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
                      {["Drip Irrigation", "Sprinkler Irrigation", "Irrigation Filters", "Valves & Control Systems", "Fertigation Solutions", "Pipes & Fittings", "Irrigation Automation", "Water Pumps", "Complete Project Solution", "Dealership Enquiry"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea id="message" rows={4} placeholder="Describe your irrigation requirement, farm size, crop type..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
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
              <Image src="/bonhoeffer_logo.png" alt="Bonhoeffer Irrigation" width={160} height={36} className="object-contain brightness-0 invert mb-4" />
              <p className="text-white/50 text-sm leading-relaxed mb-6">Bonhoeffer Irrigation delivers innovative, reliable irrigation solutions for agriculture, horticulture, landscaping, and commercial irrigation projects across India.</p>
              <div className="flex gap-3">
                {[{ l: "in", t: "LinkedIn" }, { l: "f", t: "Facebook" }, { l: "📸", t: "Instagram" }, { l: "▶", t: "YouTube" }].map((s) => (
                  <a key={s.t} href="#" title={s.t} className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/70 font-bold text-xs hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all">{s.l}</a>
                ))}
              </div>
            </div>
            {[
              { title: "Quick Links", items: ["Home", "About Us", "Products", "Solutions", "Dealer Network", "Blogs", "Contact Us"] },
              { title: "Products", items: ["Drip Irrigation", "Sprinkler Irrigation", "Filtration Systems", "Valves & Controls", "Automation", "Water Pumps"] },
              { title: "Customer Support", items: ["Product Catalogues", "Downloads", "Warranty", "Spare Parts", "FAQs"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 pb-2 border-b-2 border-primary inline-block">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-1 transition-all duration-200">
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
          <p>© 2025 Bonhoeffer Irrigation. All rights reserved.</p>
          <p>Smart Irrigation Solutions for Sustainable Agriculture</p>
        </div>
      </footer>
    </>
  );
}
