import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/products";
import {Fuel, VolumeX, Zap, HardHat, Wrench, CircleDollarSign, Snowflake,SlidersHorizontal,RefreshCw,
} from "lucide-react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product = allProducts.find(
    (item) => item.slug === slug
  );


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Product Not Found
      </div>
    );
  }
 const specs = Object.fromEntries( 
  product.highlights.map((item) => { 
    const [key, value] = item.split(" :- "); 
    return [key.trim(), value?.trim() ?? ""]; 
  }) 
); 
 


  return (
    <>
        <main className="pt-16">

{/* HERO BANNER */}
<section className="relative h-[380px] overflow-hidden bg-black sm:h-[430px] lg:h-[480px] xl:h-[500px]">

  {/* Background */}
  <div className="absolute inset-0">
    <Image
      src="/banner/product detail banner.jpeg"
      alt="Bonhoeffer Power Diesel Generators"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Extra Left Dark Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">

    <div className="max-w-[480px] pt-2 text-left">

      {/* Small Tag */}
      <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300 sm:text-[11px]">
        ⚡ Our Complete Range
      </span>

      {/* Heading */}
      <h1 className="mb-3 text-[32px] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-[38px] lg:text-[44px]">
        Silent Diesel
        <br />
        <span className="text-transparent [-webkit-text-stroke:1px_white]">
          Generator Range
        </span>
      </h1>

      {/* Line */}
      <div className="mb-4 h-[3px] w-14 bg-[#1689d8]" />

      {/* Description */}
      <p className="max-w-[440px] text-[11px] font-medium leading-[1.55] text-white/90 sm:text-[12px] lg:text-[13px]">
        Explore our full catalog of{" "}
        <span className="font-bold text-white">
          {allProducts.length}
        </span>{" "}
        high-performance, fuel-efficient silent diesel generators.
      </p>

    </div>
  </div>
</section>

{/* PRODUCT DETAILS */}
<section className="bg-white py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 gap-7 md:gap-8 lg:h-[430px] lg:grid-cols-[3.35fr_1.7fr_1.15fr] lg:items-stretch lg:gap-5">

     {/* =====================================================
    LEFT — PRODUCT IMAGE + THUMBNAILS
===================================================== */}
<div className="flex min-w-0 flex-col lg:h-full">

  {/* MAIN PRODUCT IMAGE */}
  <div className="relative min-h-0 flex-1 overflow-hidden border border-[#bdbdbd] bg-white">

    <Image
      src="/products/Front view 1.webp"
      alt={product.name}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 58vw"
      className="object-contain"
    />

  </div>

  {/* THUMBNAILS */}
  <div className="mt-3 grid h-[86px] shrink-0 grid-cols-4 gap-3">

    {[
      "/products/Front view 1.webp",
      "/products/Front view 2.webp",
      "/products/2 pt. view 2 1.webp",
      "/products/2 pt. view 1.webp",
    ].map((image, index) => (

      <button
        key={image}
        type="button"
        className="relative h-full overflow-hidden border border-[#bdbdbd] bg-white transition hover:border-[#1689d8]"
      >

        <Image
          src={image}
          alt={`${product.name} view ${index + 1}`}
          fill
          sizes="220px"
          className="object-contain p-2"
        />

      </button>

    ))}

  </div>

</div>

      {/* =====================================================
          CENTER — PRODUCT INFORMATION
      ===================================================== */}
      <div className="flex min-w-0 flex-col lg:h-full">

        {/* PRODUCT CODE */}
        <div className="flex h-[48px] shrink-0 items-center justify-between bg-[#eeeeee] px-4">

          <h1 className="font-display m-0 text-[13px] font-bold uppercase text-[#111] sm:text-[14px]">
            {product.name}
          </h1>

          <svg
            className="h-4 w-4 text-[#888]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>

        </div>


        {/* CLASSIFICATION */}
        <div className="shrink-0 px-1.5 pt-5 pb-2.5">

          <p className="m-0 text-[8px] font-medium uppercase tracking-[0.12em] text-[#999]">
            Classification
          </p>
          <p className="font-display mt-1 m-0 text-[9px] font-bold uppercase text-[#222]"> 
            {product.name 
              .replace(/^BON-DG-/i, "") 
              .replace(/-/g, " ")} 
          </p> 

         

        </div>


        {/* RATED */}
        <div className="shrink-0 px-1.5 pb-3.5">

          <p className="m-0 text-[8px] font-medium uppercase tracking-[0.12em] text-[#999]">
            Rated:
          </p>

          <div className="mt-1.5 grid grid-cols-2 text-[8px] font-bold uppercase text-[#222]">

            <span>
              13kW
            </span>

            <span className="text-right">
              Phase: 1-Ph
            </span>

          </div>

          <div className="mt-1.5 grid grid-cols-2 text-[8px] font-bold uppercase text-[#222]">

            <span>
              Volt: 110/220V
            </span>

            <span className="text-right">
              Freq: 60Hz
            </span>

          </div>

        </div>


        {/* =====================================================
            DARK SPECIFICATION BOX
        ===================================================== */}
        <div className="min-h-0 flex-1 bg-[#0d1117] px-4 py-3.5">

          {/* STANDBY */}
          <div className="border-b border-white/20 pb-2.5">

            <div className="flex items-center justify-between">

              <span className="text-[8px] font-medium uppercase text-white">
                Standby (kW/kVA)
              </span>

              <span className="text-[9px] font-bold text-white">
                13/15.1
              </span>

            </div>

          </div>


          {/* PRIME */}
          <div className="border-b border-white/20 py-2.5">

            <div className="flex items-center justify-between">

              <span className="text-[8px] font-medium uppercase text-white">
                Prime (kW/kVA)
              </span>

              <span className="text-[9px] font-bold text-white">
                12/15
              </span>

            </div>

          </div>


          {/* ENGINE */}
          <div className="border-b border-white/20 py-2.5">

            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                Engine
              </span>

              <span className="text-right text-[7.5px] font-semibold uppercase text-white">
                FAW-4108D-28D
              </span>

            </div>

          </div>


          {/* ALTERNATOR */}
          <div className="border-b border-white/20 py-2.5">

            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                Alternator
              </span>

              <span className="text-right text-[7.5px] font-semibold uppercase text-white">
                QYI184ES
              </span>

            </div>

          </div>


          {/* CONTROLLER */}
          <div className="border-b border-white/20 py-2.5">

            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                Controller
              </span>

              <span className="text-right text-[7.5px] font-semibold uppercase text-white">
                DEEPSEA-DSE4520
              </span>

            </div>

          </div>


          {/* ATS */}
          <div className="border-b border-white/20 py-2.5">

            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                ATS
              </span>

              <span className="text-right text-[7.5px] font-semibold uppercase text-white">
                SUYANG-ATS-100A
              </span>

            </div>

          </div>


          {/* FUEL */}
          <div className="pt-2.5">

            <div className="flex items-center justify-between">

              <span className="text-[8px] font-medium uppercase text-white">
                Fuel Tank
              </span>

              <span className="text-[9px] font-bold uppercase text-white">
                60L
              </span>

            </div>

          </div>

        </div>


        {/* SPECS BUTTONS */}
        <div className="mt-2.5 grid h-[25px] shrink-0 grid-cols-2 gap-1.5">

          <button
            type="button"
            className="flex items-center justify-between border border-[#cfcfcf] bg-white px-2.5 text-[7px] font-bold uppercase tracking-[0.04em] text-[#777]"
          >

            <span>
              Specs Sheet (EN)
            </span>

            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>

          </button>


          <button
            type="button"
            className="flex items-center justify-between border border-[#cfcfcf] bg-white px-2.5 text-[7px] font-bold uppercase tracking-[0.04em] text-[#777]"
          >

            <span>
              Specs Sheet (ES)
            </span>

            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>

          </button>

        </div>


        {/* GET A QUOTE */}
        <Link
          href="/contact"
          className="mt-1.5 flex h-[27px] shrink-0 items-center justify-center bg-[#111111] text-[7.5px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#1689d8]"
        >
          Get a Quote
        </Link>

      </div>


      {/* =====================================================
          RIGHT — OPTIONALS
      ===================================================== */}
      <div className="min-w-0 lg:h-full lg:pt-[96px]">

        <div className="h-full bg-[#e9e9e9] px-4 py-4">

          <h3 className="m-0 mb-4 text-[9px] font-bold uppercase tracking-[0.04em] text-[#222]">
            Optionals:
          </h3>


          <ul className="m-0 list-none space-y-3 p-0">

            {[
              "Engine preheater, diesel preheater, alternator space heater",
              "Electric pump for diesel inlet with air purge",
              "Removable tank made by metal alloy",
              "Special painting (RAL 6018, C3, C4, C5), reinforced protection degree",
              "ABB breaker",
              "Electronic tank level meter",
            ].map((item, index) => (

              <li
                key={index}
                className="relative pl-3.5 text-[7.5px] leading-[1.6] text-[#333] sm:text-[8px]"
              >

                <span className="absolute left-0 top-[6px] h-[3px] w-[3px] rounded-full bg-[#333]" />

                {item}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Advantages Section */}
<section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* Section Header */}
    <div className="mb-10 border-b border-white/20 pb-6 sm:mb-12 lg:mb-14">
      <div className="flex items-start justify-between gap-6">

        <div className="max-w-3xl">
          <h2 className="font-mono text-xl font-bold uppercase tracking-[0.14em] text-white sm:text-base"
          >
           SYSTEM ADVANTAGES
         </h2>  

        </div>

        <span className="hidden pt-2 text-[12px] font-mono uppercase tracking-[0.18em] text-primary-light md:block">
          [ METRICS ]
        </span>

      </div>
    </div>

    {/* Advantages Grid */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* 01 - Fuel Efficiency */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            01
          </span>

          <Fuel
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
        Fuel Efficiency
        </h3>

        <p className="text-xs font-sans leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Optimized engines deliver maximum power with lower fuel consumption
          and reduced operating costs.
        </p>
      </div>

      {/* 02 - Silent Operation */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            02
          </span>

          <VolumeX
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Silent Operation
        </h3>

        <p className=" font-sans text-xs  leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Advanced canopy design reduces noise for comfortable and quiet
          performance.
        </p>
      </div>

      {/* 03 - Reliable Power */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            03
          </span>

          <Zap
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Reliable Power
        </h3>

        <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Stable and uninterrupted power supply for homes, industries, and
          businesses.
        </p>
      </div>

      {/* 04 - Heavy Duty */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            04
          </span>

          <HardHat
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Heavy-Duty Design
        </h3>

        <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Built with durable components to perform in demanding conditions.
        </p>
      </div>

      {/* 05 - Maintenance */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            05
          </span>

          <Wrench
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Easy Maintenance
        </h3>

        <p className="text-xs font-sans leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          User-friendly design simplifies servicing and reduces downtime.
        </p>
      </div>

      {/* 06 - Operating Cost */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            06
          </span>

          <CircleDollarSign
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Low Operating Cost
        </h3>

        <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Efficient performance with reduced maintenance and running expenses.
        </p>
      </div>

      {/* 07 - Cooling */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            07
          </span>

          <Snowflake
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Advanced Cooling
        </h3>

        <p className=" font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Efficient cooling system ensures reliable operation in all
          conditions.
        </p>
      </div>

      {/* 08 - Stable Output */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            08
          </span>

          <SlidersHorizontal
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
       >
          Stable Power Output
        </h3>

        <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Consistent voltage and frequency protect your electrical equipment.
        </p>
      </div>

      {/* 09 - Continuous Operation */}
      <div className="group min-h-[190px] border border-white/35 p-6 transition-all duration-300 hover:border-primary-light hover:bg-white/[0.04] sm:p-7">
        <div className="mb-7 flex items-start justify-between">
          <span className="text-[10px] font-mono text-white/60 sm:text-xs">
            09
          </span>

          <RefreshCw
            className="h-5 w-5 text-primary-light sm:h-6 sm:w-6"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"
        >
          Continuous Operation
        </h3>

        <p className=" font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"
        >
          Designed for long hours of reliable industrial performance.
        </p>
      </div>

    </div>
  </div>
</section>


{/* ── BANNER TAGLINE ── */}
<section className="w-full h-[80px] sm:h-[86px] bg-white border-t-[2px] border-[#1689d8] flex items-center justify-center px-5 sm:px-8">
  <p className="w-full max-w-[900px] font-sans m-0 text-center text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.02em] text-black leading-relaxed">
  Trusted by contractors, homeowners, and site operators worldwide
  </p>
</section>

</main>


      

    </>
  );
}