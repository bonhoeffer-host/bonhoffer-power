"use client";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/products";



export default function ProductsPage() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/bonhoeffer_logo.webp"
                alt="Bonhoeffer Power"
                width={160}
                height={36}
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
            <ul className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={`text-slate-700 font-semibold text-sm hover:text-primary transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all ${l.label === "Products"
                        ? "text-primary after:w-full"
                        : ""
                      }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* ── HERO BANNER ── */}
        <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-lime-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              ⚡ Our Complete Range
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Silent Diesel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">
                Generator Range
              </span>
            </h1>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-lime-400 rounded-full mx-auto mb-5" />
            <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
              Explore our full catalog of {allProducts.length} high-performance, fuel-efficient silent diesel generators — engineered for homes, businesses, construction sites, and industrial facilities.
            </p>
          </div>
        </section>

        {/* ── PRODUCT COUNT BAR ── */}
        <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
              Complete Catalog
            </span>

          </div>
        </section>

        {/* ── PRODUCT GRID ── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {allProducts.map((g, idx) => (
                <div
                  key={g.name + idx}
                  className={`bg-white rounded-3xl border overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col shadow-sm ${g.series === "AquamaX"
                      ? "border-teal-200/80 hover:border-teal-400/60"
                      : "border-slate-200/80 hover:border-primary/50"
                    }`}
                >
                  {/* Image — edge-to-edge */}
                 <Link href={`/products/${g.slug}`}>
  <div className="relative h-56 w-full overflow-hidden border-b border-slate-100 cursor-pointer">
    <Image
      src={g.img}
      alt={g.name}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />

    <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
      {g.phase}
    </span>

    <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-black px-3 py-1 rounded-full shadow-md z-10">
      {g.tag}
    </span>
  </div>
</Link>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                        {g.name} 
                      </h3> 
                      <p className="text-[11px] text-primary font-bold bg-primary-pale/80 px-2 py-0.5 rounded-md inline-block mb-3">
                        {g.desc}
                      </p>
                      {/* <ul className="space-y-1 text-[11px] text-slate-600 mb-5">
                        {g.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul> */}
                    </div> 
                    <Link
                      href="/contact"
                      className="w-full text-center bg-slate-900 hover:bg-primary text-white text-xs font-bold py-3 rounded-xl transition-all shadow-md group-hover:shadow-lg"
                    >
                      Request a Quote
                    </Link>
                  </div>
                // </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden border-t border-slate-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-lime-400 font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-6">
              ⚡ GET IN TOUCH
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
              Need Help Choosing the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">
                Right Generator?
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Our experts will help you find the perfect model for your power requirements and application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold px-9 py-4 rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 text-base"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <Image
            src="/bonhoeffer_logo.webp"
            alt="Bonhoeffer Power"
            width={130}
            height={30}
            className="object-contain brightness-0 invert"
          />
          <p>© 2025 Bonhoeffer Power. All rights reserved.</p>
          <p>Silent Diesel Generators – Power You Can Trust.</p>
        </div>
      </footer>
    </>
  );
}
