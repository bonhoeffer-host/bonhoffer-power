"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    color: "hover:bg-blue-600",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919667515523",
    color: "hover:bg-green-500",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    color: "hover:bg-red-600",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    color: "hover:bg-blue-700",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const offices = [
  {
    flag: "🇮🇳",
    country: "Registered & Corporate Office",
    name: "BONHOEFFER MACHINES PRIVATE LIMITED",
    address: "Plot No 756, 2nd Floor, Udyog Vihar, Phase V, Gurugram, Haryana Pin Code: 122001",
    accent: "border-primary",
  },
  {
    flag: "🇨🇳",
    country: "China Office",
    name: " NINGBO BONHOEFFER MACHINES IMPORT & EXPORT CO. LTD, Room",
    address: "Room A163, Building 003(4-1) (4-2), No.1083 Zhongshan East Road, Yinzhou District, Ningbo, Zhejiang, China.",
    accent: "border-emerald-500",
  },
  {
    flag: "🇭🇰",
    country: "Hong Kong Office",
    name: "HEINE CORPORATION HK PRIVATE LIMITED",
    address: "RM 1607 TREND CTR 29-31 CHEUNG LEE ST CHAI WAN HONG KONG",
    accent: "border-lime-500",
  },
];

const tabs = ["Request a Quote / Enquiry", "Distributor Form", "Inquiry Form"] as const;
type Tab = typeof tabs[number];

const emptyEnquiry = { name: "", company: "", mobile: "", email: "", country: "", state: "", product: "", message: "" };
const emptyDistributor = { name: "", company: "", mobile: "", email: "", country: "", state: "", region: "", experience: "", message: "" };
const emptyInquiry = { name: "", mobile: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Request a Quote / Enquiry");

  const [enquiryForm, setEnquiryForm] = useState(emptyEnquiry);
  const [distributorForm, setDistributorForm] = useState(emptyDistributor);
  const [inquiryForm, setInquiryForm] = useState(emptyInquiry);

  const [submittedTab, setSubmittedTab] = useState<Tab | null>(null);

  const handleSubmit = (e: React.FormEvent, tab: Tab) => {
    e.preventDefault();
    setSubmittedTab(tab);
    setTimeout(() => setSubmittedTab(null), 5000);
    if (tab === "Request a Quote / Enquiry") setEnquiryForm(emptyEnquiry);
    if (tab === "Distributor Form") setDistributorForm(emptyDistributor);
    if (tab === "Inquiry Form") setInquiryForm(emptyInquiry);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
    

      <main className="pt-16">

        {/* ── HERO BANNER ── */}
       <section className="relative h-[280px] overflow-hidden bg-black sm:h-[340px] md:h-[400px] lg:h-[450px]">
  <Image
    src="/banner/contact-banner.webp"
    alt="Contact Us"
    fill
    priority
    sizes="100vw"
    className="object-cover object-[15%_center] sm:object-center"
  />


  {/* White Text */}
  <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Get In Touch
      </h1>

      <p className="mt-2 text-sm font-medium leading-relaxed text-white/90 sm:mt-3 sm:text-base md:text-lg">
        Have questions or need assistance? Our team is here to help with
        reliable power solutions and expert support.
      </p>
    </div>
  </div>
</section>

        {/* ── CONTACT INFO CARDS ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 border border-primary/20">
                REACH US
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">Direct Contact Information</h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📞",
                  label: "PHONE NUMBER",
                  lines: ["+91 87962 30337"],
                  href: "tel:+918796230337.",
                  cta: "Call Now",
                },
              
                {
                  icon: "📧",
                  label: "EMAIL ADDRESSES",
                  lines: [
                    "Sales: crm.power@bonhoeffermachines.com",
                    // "Support: support@bonhoeffermachines.com",
                    // "Career: hr@bonhoeffermachines.com",
                  ],
                  href: "mailto:crm.power@bonhoeffermachines.com",
                  cta: "Send Mail",
                },
                {
                  icon: "🕒",
                  label: "WORKING HOURS",
                  lines: ["24/7"],
                  href: null,
                  cta: null,
                },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary-pale flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {card.icon}
                    </div>
                    <p className="font-mono text-xs font-black text-primary uppercase tracking-wider mb-2">{card.label}</p>
                    <div className="space-y-1.5">
                      {card.lines.map((line, li) => (
                        <p key={li} className="font-sans text-slate-700 text-sm font-semibold leading-snug">{line}</p>
                      ))}
                    </div>
                  </div>
                  {card.href && card.cta && (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors group-hover:translate-x-1"
                    >
                      <span>{card.cta}</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICE ADDRESSES ── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <span className="font-mono inline-block bg-primary/20 border border-primary/40 text-lime-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
                OFFICES
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white">Registered &amp; Corporate Locations</h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className={`font-display bg-slate-800/60 border-t-4 ${office.accent} border-b border-l border-r border-slate-700/60 rounded-3xl p-8 hover:bg-slate-800 transition-all duration-300 shadow-xl flex flex-col justify-between`}
                >
                  <div>
                    <div className="text-4xl mb-4">{office.flag}</div>
                    <span className="text-lime-400 text-xs font-bold uppercase tracking-wider block mb-2">{office.country}</span>
                    <h4 className="font-black text-white text-base mb-4 leading-snug">{office.name}</h4>
                    <p className="font-sans text-slate-300 text-sm leading-relaxed font-normal">{office.address}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/50 text-xs text-slate-500 font-mono">
                    GLOBAL PRESENCE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMS SECTION ── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-mono inline-block bg-primary-pale border border-primary/20 text-primary font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Submit Your Inquiry</h2>
              <p className="font-sans text-slate-600 max-w-lg mx-auto text-sm">Select the form type below to reach out directly to our relevant department.</p>
            </div>

            {/* Form Selection Tabs */}
            {/* <div className="flex flex-col sm:flex-row border border-slate-200 rounded-2xl overflow-hidden mb-10 bg-slate-50 p-1.5 gap-1.5 shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-5 text-sm font-extrabold rounded-xl transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-slate-900 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div> */}

            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-12">

              {/* Success Message */}
              {submittedTab === activeTab && (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 mb-8 flex items-center gap-4 shadow-sm">
                  <span className="text-3xl">✅</span>
                  <div>
                    <p className="font-extrabold text-emerald-900 text-base">Form Submitted Successfully!</p>
                    <p className="text-emerald-700 text-xs mt-1">Thank you for contacting Bonhoeffer. Our team will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {/* 1. REQUEST FORM / ENQUIRY FORM */}
              {activeTab === "Request a Quote / Enquiry" && (
                <form onSubmit={(e) => handleSubmit(e, "Request a Quote / Enquiry")} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Request Form / Inquiry Form</h3>
                    <p className="text-slate-500 text-xs mt-1">Please provide your details and product interest below.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eq-name" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Full Name *</label>
                      <input id="eq-name" type="text" required placeholder="Enter full name" value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="eq-company" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Company Name</label>
                      <input id="eq-company" type="text" placeholder="Enter company name" value={enquiryForm.company}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="eq-mobile" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Mobile Number *</label>
                      <input id="eq-mobile" type="tel" required placeholder="Enter mobile number" value={enquiryForm.mobile}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, mobile: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="eq-email" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                      <input id="eq-email" type="email" placeholder="name@example.com" value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="eq-country" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Country</label>
                      <select id="eq-country" value={enquiryForm.country} onChange={(e) => setEnquiryForm({ ...enquiryForm, country: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                        <option value="">Select Country</option>
                        <option>India</option><option>China</option><option>Hong Kong</option><option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eq-state" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">State</label>
                      <input id="eq-state" type="text" placeholder="Enter state" value={enquiryForm.state}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, state: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="eq-product" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Product Interest</label>
                    <select id="eq-product" value={enquiryForm.product} onChange={(e) => setEnquiryForm({ ...enquiryForm, product: e.target.value })}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                      <option value="">Select Product Range</option>
                      <option>BON-DG-20KW-1P Silent Diesel Generator</option>
                      <option>BON-DG-17KW-1P Silent Diesel Generator</option>
                      <option>BON-DG-15KW-1P Silent Diesel Generator</option>
                      <option>BON-DG-11KW-1P Silent Diesel Generator</option>
                      <option>General Product Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eq-message" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="eq-message" rows={4} placeholder="Describe your power requirements or questions..." value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm tracking-wide">
                    SUBMIT REQUEST FORM
                  </button>
                </form>
              )}

              {/* 2. DISTRIBUTOR FORM 
              {activeTab === "Distributor Form" && (
                <form onSubmit={(e) => handleSubmit(e, "Distributor Form")} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Distributor Form</h3>
                    <p className="text-slate-500 text-xs mt-1">Partner with Bonhoeffer Machines as an authorized distributor.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dist-name" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Full Name *</label>
                      <input id="dist-name" type="text" required placeholder="Enter full name" value={distributorForm.name}
                        onChange={(e) => setDistributorForm({ ...distributorForm, name: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="dist-company" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Company Name *</label>
                      <input id="dist-company" type="text" required placeholder="Enter company name" value={distributorForm.company}
                        onChange={(e) => setDistributorForm({ ...distributorForm, company: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="dist-mobile" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Mobile Number *</label>
                      <input id="dist-mobile" type="tel" required placeholder="Enter mobile number" value={distributorForm.mobile}
                        onChange={(e) => setDistributorForm({ ...distributorForm, mobile: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="dist-email" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Email Address *</label>
                      <input id="dist-email" type="email" required placeholder="name@example.com" value={distributorForm.email}
                        onChange={(e) => setDistributorForm({ ...distributorForm, email: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="dist-country" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Country *</label>
                      <input id="dist-country" type="text" required placeholder="Enter country" value={distributorForm.country}
                        onChange={(e) => setDistributorForm({ ...distributorForm, country: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="dist-state" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">State / Region *</label>
                      <input id="dist-state" type="text" required placeholder="Enter state or region" value={distributorForm.state}
                        onChange={(e) => setDistributorForm({ ...distributorForm, state: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dist-message" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Distributor Network / Message</label>
                    <textarea id="dist-message" rows={4} placeholder="Describe your experience, current distribution channels, and sales region..." value={distributorForm.message}
                      onChange={(e) => setDistributorForm({ ...distributorForm, message: e.target.value })}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm tracking-wide">
                    SUBMIT DISTRIBUTOR FORM
                  </button>
                </form>
              )}*/}

              {/* 3. INQUIRY FORM 
              {activeTab === "Inquiry Form" && (
                <form onSubmit={(e) => handleSubmit(e, "Inquiry Form")} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">General Inquiry Form</h3>
                    <p className="text-slate-500 text-xs mt-1">Send a general question or message to our team.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inq-name" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Full Name *</label>
                      <input id="inq-name" type="text" required placeholder="Enter full name" value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label htmlFor="inq-mobile" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Mobile Number</label>
                      <input id="inq-mobile" type="tel" placeholder="Enter mobile number" value={inquiryForm.mobile}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, mobile: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="inq-email" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Email Address *</label>
                      <input id="inq-email" type="email" required placeholder="name@example.com" value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inq-subject" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Subject *</label>
                    <input id="inq-subject" type="text" required placeholder="Inquiry Subject" value={inquiryForm.subject}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50" />
                  </div>
                  <div>
                    <label htmlFor="inq-message" className="block text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Message *</label>
                    <textarea id="inq-message" rows={5} required placeholder="Write your query details here..." value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-slate-50/50 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm tracking-wide">
                    SUBMIT INQUIRY FORM
                  </button>
                </form>
              )}*/}
            </div>
          </div>
        </section>

      </main>

         </div>
  );
}
