"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allProducts } from "@/data/products";
import SystemAdvantages from "@/components/SystemAdvantages";

const ITEMS_PER_PAGE = 20;

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("All");
  const [selectedFrequency, setSelectedFrequency] = useState("All");
  const [selectedDuty, setSelectedDuty] = useState("All");
  const [selectedUnit, setSelectedUnit] = useState("English");

 /* =========================================================
   GET PRODUCT FREQUENCY
========================================================= */

const getProductFrequency = (product: (typeof allProducts)[number]) => {
  const frequencyItem = product.highlights?.find((item) =>
    item.toLowerCase().startsWith("frequency")
  );

  if (!frequencyItem) return "";

  const value = frequencyItem.split(":-")[1]?.trim().toLowerCase() || "";

  if (value.includes("60")) return "60";
  if (value.includes("50")) return "50";

  if (value.includes("dual")) return "Dual";

  return "";
};


/* =========================================================
   GET PRODUCT PHASE
========================================================= */

const getProductPhase = (product: (typeof allProducts)[number]) => {
  const phaseValue = product.phase?.toLowerCase().trim();

  // First check the main phase property
  if (phaseValue) {
    if (
      phaseValue === "1-phase" ||
      phaseValue === "1 phase" ||
      phaseValue === "1p"
    ) {
      return "1-P";
    }

    if (
      phaseValue === "3-phase" ||
      phaseValue === "3 phase" ||
      phaseValue === "3p"
    ) {
      return "3-P";
    }
  }

  // Fallback: check highlights
  const phaseItem = product.highlights?.find((item) =>
    item.toLowerCase().startsWith("phase")
  );

  if (!phaseItem) return "";

  const value = phaseItem.split(":-")[1]?.trim().toLowerCase() || "";

  if (
    value === "1-phase" ||
    value === "1 phase" ||
    value.includes("1-phase")
  ) {
    return "1-P";
  }

  if (
    value === "3-phase" ||
    value === "3 phase" ||
    value.includes("3-phase")
  ) {
    return "3-P";
  }

  return "";
};


/* =========================================================
   FILTER PRODUCTS
========================================================= */

const filteredProducts = allProducts.filter((product) => {

  const productText = [
    product.name,
    product.series,
    product.desc,
    product.phase,
    ...(product.highlights || []),
  ]
    .join(" ")
    .toLowerCase();


  /* ================= SEARCH ================= */

  const searchMatch =
    searchTerm.trim() === "" ||
    productText.includes(searchTerm.toLowerCase().trim());


  /* ================= EXACT PHASE ================= */

  const productPhase = getProductPhase(product);

  const phaseMatch =
    selectedPhase === "All" ||
    productPhase === selectedPhase;


  /* ================= EXACT FREQUENCY ================= */

  const productFrequency = getProductFrequency(product);

  const frequencyMatch =
    selectedFrequency === "All" ||
    productFrequency === selectedFrequency;


  /* ================= DUTY ================= */

  const dutyMatch =
    selectedDuty === "All" ||
    productText.includes(selectedDuty.toLowerCase());


  return (
    searchMatch &&
    phaseMatch &&
    frequencyMatch &&
    dutyMatch
  );
});
  /* =========================================================
     PAGINATION
  ========================================================= */

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* =========================================================
     RESET
  ========================================================= */

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedPhase("All");
    setSelectedFrequency("All");
    setSelectedDuty("All");
    setCurrentPage(1);
  };

  return (
    <>
    <div className="min-h-screen w-full overflow-x-hidden">
     

      <main className="pt-16">

        {/* =========================================================
            HERO / SILENT DIESEL SERIES BANNER
        ========================================================= */}
<section className="relative h-[280px] overflow-hidden bg-black sm:h-[340px] md:h-[400px] lg:h-[450px]">
  <Image
    src="/banner/contact-banner.webp"
    alt="Soluciones de Energía"
    fill
    priority
    sizes="100vw"
    className="object-cover object-[15%_center] sm:object-center"
  />

  {/* White Text */}
  <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Soluciones de Energía
      </h1>

      <p className="mt-2 text-sm font-medium leading-relaxed text-white/90 sm:mt-3 sm:text-base md:text-lg">
        Explora nuestra gama confiable de generadores de alto rendimiento,
        diseñados para ofrecer energía confiable y un rendimiento duradero.
      </p>
    </div>
  </div>
</section>

{/* ── BANNER TAGLINE ── */}
<section className="w-full h-[80px] sm:h-[86px] bg-[#EAE9E9] border-t-[2px] border-[#1689d8] flex items-center justify-center px-5 sm:px-8">
  <p className="font-sans w-full max-w-[900px] m-0 text-center text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.02em] text-black leading-relaxed">
    Impulsados por la ingeniería, construidos para ofrecer energía confiable.
  </p>
</section>
{/* =========================================================
    PRODUCT CATALOG
========================================================= */}

<section className="w-full bg-white py-6 sm:py-8">

  <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6">

    <div className="flex w-full flex-col lg:flex-row gap-3 items-start">

      {/* =====================================================
          LEFT FILTER SIDEBAR
      ===================================================== */}

      <aside className="w-full lg:w-[190px] xl:w-[205px] shrink-0 bg-black text-white px-3 py-4">

        {/* SEARCH */}

        <div className="mb-6">

          <label className="font-mono block font-mono text-[10px] font-medium uppercase tracking-[0.10em] mb-2">
            Search
          </label>

          <div className="relative">

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Product Name"
              className="w-full h-[30px] bg-white text-black placeholder:text-[#999] px-2 pr-7 text-[10px] outline-none border-none"
            />

            <svg
              className="absolute right-2 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-black pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="m20 20-4-4" strokeWidth="2" strokeLinecap="round" />
            </svg>

          </div>

        </div>

{/* 
        {/* UNITS */}
{/* 
        <div className="mb-6">

          <h3 className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase mb-2">
            Units
          </h3>

          <div className="border-t border-white/50 pt-2 space-y-1.5">

            {["English", "Metrics"].map((unit) => (

              <label key={unit} className="flex items-center gap-2 text-[10px] cursor-pointer">

                <input
                  type="radio"
                  name="units"
                  checked={selectedUnit === unit}
                  onChange={() => setSelectedUnit(unit)}
                  className="appearance-none w-[10px] h-[10px] rounded-full border border-white relative shrink-0 checked:after:content-[''] checked:after:absolute checked:after:w-[4px] checked:after:h-[4px] checked:after:bg-white checked:after:rounded-full checked:after:left-[2px] checked:after:top-[2px]"
                />

                {unit}

              </label>

            ))}

          </div>

        </div> */} 


        {/* FREQUENCY */}

        <div className="mb-6">

          <h3 className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase mb-2">
            Frequency
          </h3>

          <div className="border-t border-white/50 pt-2 space-y-1.5">

            {[
              { label: "50", value: "50" },
              { label: "60", value: "60" },
              { label: "Dual", value: "Dual" },
            ].map((item) => (

              <label key={item.value} className="flex items-center gap-2 text-[10px] cursor-pointer">

                <input
                  type="radio"
                  name="frequency"
                  checked={selectedFrequency === item.value}
                  onChange={() => {
                    setSelectedFrequency(item.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none w-[10px] h-[10px] rounded-full border border-white relative shrink-0 checked:after:content-[''] checked:after:absolute checked:after:w-[4px] checked:after:h-[4px] checked:after:bg-white checked:after:rounded-full checked:after:left-[2px] checked:after:top-[2px]"
                />

                {item.label}

              </label>

            ))}

          </div>

        </div>


        {/* PHASE */}

        <div className="mb-6">

          <h3 className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase mb-2">
            Phase
          </h3>

          <div className="border-t border-white/50 pt-2 space-y-1.5">

            {[
              { label: "1-P", value: "1-P" },
              { label: "3-P", value: "3-P" },
            ].map((item) => (

              <label key={item.value} className="flex items-center gap-2 text-[10px] cursor-pointer">

                <input
                  type="radio"
                  name="phase"
                  checked={selectedPhase === item.value}
                  onChange={() => {
                    setSelectedPhase(item.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none w-[10px] h-[10px] rounded-full border border-white relative shrink-0 checked:after:content-[''] checked:after:absolute checked:after:w-[4px] checked:after:h-[4px] checked:after:bg-white checked:after:rounded-full checked:after:left-[2px] checked:after:top-[2px]"
                />

                {item.label}

              </label>

            ))}

          </div>

        </div>


        {/* DUTY */}

        {/* <div>

          <h3 className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase mb-2">
            Duty
          </h3>

          <div className="border-t border-white/50 pt-2 space-y-1.5">

            {["Continuous", "Prime", "Standby"].map((item) => (

              <label key={item} className="flex items-center gap-2 text-[10px] cursor-pointer">

                <input
                  type="radio"
                  name="duty"
                  checked={selectedDuty === item}
                  onChange={() => {
                    setSelectedDuty(item);
                    setCurrentPage(1);
                  }}
                  className="appearance-none w-[10px] h-[10px] rounded-full border border-white relative shrink-0 checked:after:content-[''] checked:after:absolute checked:after:w-[4px] checked:after:h-[4px] checked:after:bg-white checked:after:rounded-full checked:after:left-[2px] checked:after:top-[2px]"
                />

                {item}

              </label>

            ))}

          </div>

        </div> */}

      </aside>

{/* =====================================================
    PRODUCTS TABLE
===================================================== */}

<div className="w-full flex-1 min-w-0">

  <div className="w-full overflow-x-auto">

    <table className="w-full min-w-[780px] border-collapse table-fixed">

      {/* TABLE HEADER */}
      <thead>

        <tr className="bg-[#d4d4d4]">

          <th className="font-mono w-[22%] border-r border-white px-3 py-3.5 text-left text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.02em] whitespace-nowrap">
            Model
          </th>

          <th className="font-mono w-[18%] border-r border-white px-3 py-3.5 text-left text-[13px] sm:text-[14px] font-bold uppercase whitespace-nowrap">
            Standby
          </th>

          <th className="font-mono w-[18%] border-r border-white px-3 py-3.5 text-left text-[13px] sm:text-[14px] font-bold uppercase whitespace-nowrap">
            Prime
          </th>

          <th className="font-mono w-[22%] border-r border-white px-3 py-3.5 text-left text-[13px] sm:text-[14px] font-bold uppercase whitespace-nowrap">
            Engine
          </th>

          <th className="font-mono w-[20%] px-3 py-3.5 text-left text-[13px] sm:text-[14px] font-bold uppercase whitespace-nowrap">
            Details
          </th>

        </tr>

      </thead>


      {/* TABLE BODY */}
      <tbody>

        {currentProducts.map((product) => {

          /*
           * ---------------------------------------------
           * DYNAMIC PRODUCT HIGHLIGHTS
           * ---------------------------------------------
           */

          const highlights = product.highlights || [];


          /*
           * STANDBY
           * Example:
           * "Standby (Kva / Kw) :- 12Kva / 12Kw"
           */

          const standby =
          highlights.find((item) =>
            item.toLowerCase().startsWith("standby power")
          )?.split(":-")[1]?.trim() || "-";

        const prime =
          highlights.find((item) =>
            item.toLowerCase().startsWith("prime power")
          )?.split(":-")[1]?.trim() || "-";


          /*
           * ENGINE
           * Example:
           * "Engine :- Faw 4DW81-23D"
           */

          const engine =
            highlights.find((item) =>
              item.toLowerCase().startsWith("engine")
            )?.split(":-")[1]?.trim() || "-";


          return (

            <tr
              key={product.slug}
              className="border-b border-[#c9c9c9] hover:bg-[#f5f5f5] transition"
            >

              {/* MODEL */}

              <td className="px-3 py-3 text-[12px] sm:text-[13px] font-bold text-[#222] whitespace-nowrap overflow-hidden text-ellipsis">

                <Link
                  href={`/products/${product.slug}`}
                  className="font-mono hover:text-[#1689d8] transition"
                >
                  {product.name}
                </Link>

              </td>


              {/* STANDBY */}

              <td className="font-mono px-3 py-3 text-[12px] sm:text-[13px] font-bold text-[#333] whitespace-nowrap">

                {standby}

              </td>


              {/* PRIME */}

              <td className="font-mono px-3 py-3 text-[12px] sm:text-[13px] font-bold text-[#333] whitespace-nowrap">

                {prime}

              </td>


              {/* ENGINE */}

              <td className="font-mono px-3 py-3 text-[12px] sm:text-[13px] font-bold text-[#333] whitespace-nowrap overflow-hidden text-ellipsis">

                {engine}

              </td>


              {/* DETAILS */}

              <td className="px-3 py-3 text-[12px] sm:text-[13px] whitespace-nowrap">

                <Link
                  href={`/products/${product.slug}`}
                  className="font-mono text-[#c2d400] hover:text-[#1689d8] font-bold transition"
                >
                  Specifications
                </Link>

              </td>

            </tr>

          );

        })}


        {/* NO PRODUCTS */}

        {currentProducts.length === 0 && (

          <tr>

            <td
              colSpan={5}
              className="py-12 text-center"
            >

              <p className="text-[13px] sm:text-[14px] font-semibold text-gray-500">
                No products found.
              </p>

              <button
                onClick={clearFilters}
                className="mt-3 bg-black text-white px-5 py-2.5 text-[12px] sm:text-[13px] font-semibold"
              >
                Clear Filters
              </button>

            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>


  {/* =====================================================
      PAGINATION
  ===================================================== */}

  {totalPages > 0 && (

    <div className="flex justify-end items-center gap-[5px] mt-[14px]">

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map((page) => (

        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-[28px] h-[28px] text-[11px] font-semibold flex items-center justify-center transition ${
            currentPage === page
              ? "bg-black text-white"
              : "bg-[#777] text-white hover:bg-black"
          }`}
        >
          {page}
        </button>

      ))}

    </div>

  )}

</div>    </div>

  </div>

</section>


<SystemAdvantages/>

{/* ── BANNER TAGLINE ── */}
<section className="w-full h-[80px] sm:h-[86px] bg-white border-t-[2px] border-[#1689d8] flex items-center justify-center px-5 sm:px-8">
 <p className="font-sans w-full max-w-[900px] m-0 text-center text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.02em] text-black leading-relaxed">
  Con la confianza de contratistas, propietarios y operadores de obras en todo el mundo
</p>
</section>
</main>

      </div>
    </>
  );

}



       