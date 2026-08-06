"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allProducts } from "@/data/products";



const ITEMS_PER_PAGE = 10;
export default function ProductsPage() {
 

const [currentPage, setCurrentPage] = useState(1);

const [selectedPhase, setSelectedPhase] = useState("All");
const [selectedFrequency, setSelectedFrequency] = useState("All");

const filteredProducts = allProducts.filter((product) => {

  const phaseMatch =
    selectedPhase === "All" ||
    product.phase.toLowerCase().includes(selectedPhase.toLowerCase());

  const frequencyText =
    product.highlights.find((item) =>
      item.toLowerCase().includes("frequency")
    ) || "";

  const frequencyMatch =
    selectedFrequency === "All" ||
    frequencyText.toLowerCase().includes(selectedFrequency.toLowerCase());

  return phaseMatch && frequencyMatch;

});
// const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

const currentProducts = filteredProducts.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);



  return (
    <>
    <div className="min-h-screen w-full overflow-x-hidden">
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
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
          {/* LEFT */}
         <div className="flex flex-wrap gap-3">
           <button
            onClick={() => {
            setSelectedPhase("All");
            setSelectedFrequency("All");
            setCurrentPage(1);
          }}
          className={`px-6 py-2.5 rounded-xl font-bold transition ${
          selectedPhase === "All" && selectedFrequency === "All"
            ? "bg-primary text-white"
          : "bg-white border border-slate-300"
            }`}
          >
            All Products
          </button>

    <button onClick={() => {setSelectedFrequency("50"); setCurrentPage(1); }}
      className={`px-6 py-2.5 rounded-xl font-bold transition ${
        selectedFrequency === "50"
          ? "bg-primary text-white"
          : "bg-white border border-slate-300"}`}>
          50 Hz
      </button>

      <button onClick={() => { setSelectedFrequency("60"); setCurrentPage(1); }}
        className={`px-6 py-2.5 rounded-xl font-bold transition ${
        selectedFrequency === "60"
          ? "bg-primary text-white"
          : "bg-white border border-slate-300" }`} >
          60 Hz
      </button>
       </div>

      {/* RIGHT */}
      <div className="flex flex-wrap gap-3">
        
       <button onClick={() => { setSelectedPhase("3-phase"); setCurrentPage(1);}}
        className={`px-6 py-2.5 rounded-xl font-bold transition ${
        selectedPhase === "3-phase"
          ? "bg-primary text-white"
          : "bg-white border border-slate-300" }`}>
          Three Phase
          </button>
          
            <button  onClick={() => { setSelectedPhase("1-phase"); setCurrentPage(1);}}
            className={`px-6 py-2.5 rounded-xl font-bold transition ${
            selectedPhase === "1-phase"
            ? "bg-primary text-white"
            : "bg-white border border-slate-300"}`} >
            Single Phase
           </button>  
             </div>
             </div>

            <div className="w-full overflow-x-auto rounded-2xl shadow-lg border border-slate-200 bg-white">
            <table className="w-full min-w-[900px]">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left">Product Model</th>
                <th className="px-6 py-4 text-center">Phase</th>
                <th className="px-6 py-4 text-center">Series</th>
                <th className="px-6 py-4 text-center">Description</th>
                <th className="px-6 py-4 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((g, index) => (
          // {allProducts.map((g, index) => (

            <tr
              key={g.slug}
              className={`border-b hover:bg-slate-50 transition ${
                index % 2 === 0 ? "bg-white" : "bg-slate-100"
              }`}
            >

              {/* Product Name */}
              <td className="px-6 py-4 font-semibold text-red-600">
                <Link
                  href={`/products/${g.slug}`}
                  className="hover:text-primary"
                >
                  {g.name}
                </Link>
              </td>

              {/* Phase */}
              <td className="px-6 py-4 text-center"> {g.phase} </td>
              <td className="px-6 py-4 text-center"> {g.series} </td>
              <td className="px-6 py-4 text-center">{g.desc} </td>
              <td className="px-6 py-4 text-center">
                 <Link href={`/products/${g.slug}`}
                  className="text-green-600 font-semibold hover:underline">
                  Specifications
                </Link>
               </td>
                </tr>
                ))}
             </tbody>
            </table>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
              <p className="text-sm text-slate-600"> Showing{" "} <span className="font-semibold">
              {(currentPage - 1) * ITEMS_PER_PAGE + 1}
              </span> {" "}to{" "} 
              <span className="font-semibold">
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}
             </span>
              {" "}of{" "}
              <span className="font-semibold">
                {/* {allProducts.length} */}
                {filteredProducts.length}
              </span>{" "}
              Products
            </p>
            <div className="flex items-center gap-2">
             <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white disabled:opacity-50 hover:bg-primary hover:text-white transition"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg font-semibold transition ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-white border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white disabled:opacity-50 hover:bg-primary hover:text-white transition"
            >
              Next
            </button>

          </div>

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
      </div>
    </>
  );

}



        {/* ── PRODUCT GRID ── 
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
                  {/* Image — edge-to-edge
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

                  {/* Content 
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
                      </ul> 
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
        </section>  */}

        