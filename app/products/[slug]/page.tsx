import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/products";

import SystemAdvantages from "@/components/SystemAdvantages";

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
//  const specs = Object.fromEntries( 
//   product.highlights.map((item) => { 
//     const [key, value] = item.split(" :- "); 
//     return [key.trim(), value?.trim() ?? ""]; 
//   }) 
// ); 
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
<section className="relative h-[380px] -4 overflow-hidden bg-black sm:h-[430px] lg:h-[480px] xl:h-[500px]">

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
        ⚡ Nuestra Gama Completa
      </span>

      {/* Heading */}
      <h1 className="mb-3 text-[32px] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-[38px] lg:text-[44px]">
        Gama de Generadores
        <br />
        <span className="text-transparent [-webkit-text-stroke:1px_white]">
          Diésel Silenciosos
        </span>
      </h1>

      {/* Line */}
      <div className="mb-4 h-[3px] w-14 bg-[#1689d8]" />

      {/* Description */}
      <p className="max-w-[440px] text-[11px] font-medium leading-[1.55] text-white/90 sm:text-[12px] lg:text-[13px]">
        Explora nuestro catálogo completo de{" "}
        <span className="font-bold text-white">
          {allProducts.length}
        </span>{" "}
        generadores diésel silenciosos de alto rendimiento y bajo consumo de combustible.
      </p>

    </div>
  </div>
</section>

{/* PRODUCT DETAILS */}
<section className="bg-white mb-4 py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 gap-7 md:gap-8 lg:h-[430px] lg:grid-cols-[3.35fr_1.7fr_1.15fr] lg:items-stretch lg:gap-5">

     {/* =====================================================
    LEFT — PRODUCT IMAGE + THUMBNAILS
===================================================== */}
<div className="flex min-w-0 flex-col lg:h-full">

  {/* MAIN PRODUCT IMAGE */}
  <div className="relative min-h-0 flex-1 overflow-hidden border border-[#bdbdbd] bg-white">

    <Image
      src="/products/side-2.webp"
      alt={product.name}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 58vw"
      className="object-contain"
    />

  </div>

  {/* THUMBNAILS */}
  <div className="mt-3 grid h-[86px] shrink-0 grid-cols-3 gap-3">

    {[
      "/products/side-1.webp",
      "/products/side-2.webp",
      "/products/side-3.webp",
      // "/products/side-4.webp",
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
            Clasificación
          </p>
          <p className="font-display mt-1 m-0 text-[9px] font-bold uppercase text-[#222]"> 
            {product.name}
          </p> 

         

        </div>


                {/* RATED */}
        <div className="shrink-0 px-1.5 pb-3.5">

          <p className="m-0 text-[8px] font-medium uppercase tracking-[0.12em] text-[#999]">
             Potencia Nominal:
          </p>

          <div className="mt-1.5 grid grid-cols-2 text-[8px] font-bold uppercase text-[#222]">

            <span>
              {specs["Prime Power"] || "-"}
            </span>

            <span className="text-right">
              Fases: {specs["Phase"] || "-"}
            </span>

          </div>

          <div className="mt-1.5 grid grid-cols-2 text-[8px] font-bold uppercase text-[#222]">

            <span>
               Voltaje: {specs["Voltage"] || "-"}
            </span>

            <span className="text-right">
             Frecuencia: {specs["Frequency"] || "-"}
            </span>

          </div>

        </div>

                {/* =====================================================
                    DARK SPECIFICATION BOX
                ===================================================== */}
                {/* DARK SPECIFICATION BOX */}
        <div className="min-h-0 flex-1 bg-[#0d1117] px-4 py-3.5">

          {/* STANDBY */}
          <div className="border-b border-white/20 pb-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[8px] font-medium uppercase text-white">
                    Reserva (kW/kVA)
              </span>

              <span className="text-right text-[9px] font-bold text-white">
                {specs["Standby Power"] || "-"}
              </span>
            </div>
          </div>


          {/* PRIME */}
          <div className="border-b border-white/20 py-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[8px] font-medium uppercase text-white">
                Principal (kW/kVA)
              </span>

              <span className="text-right text-[9px] font-bold text-white">
                {specs["Prime Power"] || "-"}
              </span>
            </div>
          </div>


          {/* ENGINE */}
          <div className="border-b border-white/20 py-2.5">
            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                 Motor
              </span>

              <span className="text-right text-[7.5px] font-semibold uppercase text-white">
                {specs["Engine"] || "-"}
              </span>

            </div>
          </div>


          {/* ASPIRATION */}
          <div className="border-b border-white/20 py-2.5">
            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
               Aspiración
              </span>

              <span className="max-w-[65%] text-right text-[7.5px] font-semibold uppercase text-white">
                {specs["Aspiration"] || "-"}
              </span>

            </div>
          </div>


          {/* GOVERNOR */}
          <div className="border-b border-white/20 py-2.5">
            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                Gobernador
              </span>

              <span className="text-right text-[7.5px] font-semibold uppercase text-white">
                {specs["Governor"] || "-"}
              </span>

            </div>
          </div>


          {/* ALTERNATOR */}
          <div className="border-b border-white/20 py-2.5">
            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                Alternador
              </span>

              <span className="max-w-[65%] text-right text-[7.5px] font-semibold uppercase text-white">
                {specs["Alternator"] || "-"}
              </span>

            </div>
          </div>


          {/* CONTROLLER */}
          <div className="border-b border-white/20 py-2.5">
            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
                 Controlador
              </span>

              <span className="max-w-[65%] text-right text-[7.5px] font-semibold uppercase text-white">
                {specs["Controller"] || "-"}
              </span>

            </div>
          </div>


          {/* TANK */}
          <div className="pt-2.5">
            <div className="flex items-center justify-between gap-3">

              <span className="text-[8px] font-medium uppercase text-white">
               Tanque
              </span>

              <span className="max-w-[65%] text-right text-[7.5px] font-semibold uppercase text-white">
                {specs["Tank"] || "-"}
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
              Ficha Técnica (EN)
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
                Ficha Técnica (ES)
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
          Solicitar Cotización
        </Link>

      </div>


      {/* =====================================================
          RIGHT — OPTIONALS
      ===================================================== */}
      <div className="min-w-0 lg:h-full lg:pt-[96px]">

        <div className="h-full bg-[#e9e9e9] px-4 py-4">

          <h3 className="m-0 mb-4 text-[9px] font-bold uppercase tracking-[0.04em] text-[#222]">
             Opcionales:
          </h3>


          <ul className="m-0 list-none space-y-3 p-0">

            {[
                "Precalentador de motor, precalentador diésel y calefactor del alternador",
                "Bomba eléctrica para la entrada de diésel con purga de aire",
                "Tanque desmontable fabricado en aleación metálica",
                "Pintura especial (RAL 6018, C3, C4, C5), grado de protección reforzado",
                "Interruptor ABB",
                "Medidor electrónico del nivel del tanque",
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


<SystemAdvantages/>

{/* ── BANNER TAGLINE ── */}
<section className="w-full h-[80px] sm:h-[86px] bg-white border-t-[2px] border-[#1689d8] flex items-center justify-center px-5 sm:px-8">
  <p className="w-full max-w-[900px] font-sans m-0 text-center text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.02em] text-black leading-relaxed">
    Con la confianza de contratistas, propietarios y operadores de obras en todo el mundo
  </p>
</section>

</main>


      

    </>
  );
}