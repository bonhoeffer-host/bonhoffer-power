"use client";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import { useState, useEffect } from "react";
import {Fuel, VolumeX, Zap, HardHat, Wrench, CircleDollarSign, Snowflake,SlidersHorizontal,RefreshCw,
} from "lucide-react";
import SystemAdvantages from "@/components/SystemAdvantages";

const generators = [
  {
  img: "/products/side-2.webp",
  name: "BON-D3300-3P60",
  slug: "bon-d3300-3p60",
  tag: "3000 kW",
  phase: "3-phase",
  series: "Rango 3 - Imported Cummins",
  desc: "3000 kW / 3750 kVA Silent Diesel Generator",

  highlights: [
    "Standby  :- 3300 kW / 4125 kVA",
    "Phase :- 3-phase",
    "Power Factor :- 1",
    "Volt :- 440/254",
    "Frequency :- 60",
    "Current (A) :- 60",
    "Engine :- QSK95-G9",
    "Alternator :- Original Stamford",
    "Controller :- DSE8610",
    "ATS :- check by case",
    "Aspiration :- Turbocharged + Aftercooled",
    "Governor :- Electronic",
  ]
},
{
  img: "/products/side-1.webp",
  name: "BON-D2200-3P50",
  slug: "bon-d2200-3p50",
  tag: "2200 kW",
  phase: "3-Phase",
  series: "Rango 3 - Imported Cummins",
  desc: "2200 kW / 2750 kVA Silent Diesel Generator",

  highlights: [
    "Standby :- 2200 kW / 2750 kVA",
    "Phase :- 3-phase",
    "Power Factor :- 1",
    "Volt :- 400/230V",
    "Frequency :- 50 Hz",
    "Current (A) :- 50",
    "Engine :- Cummins QSK60-G23",
    "Alternator :- Original Stamford",
    "Controller :- Deepsea DSE8610",
    "ATS :- check by case",
    "Aspiration :- Turbocharged and Aftercooled",
    "Governor :- Electronic",
  ],
},
 {
  img: "/products/side-3.webp",
  name: "BON-D2000-3P60",
  slug: "bon-d2000-3p60",
  tag: "2000 kW",
  phase: "3-Phase",
  series: "Rango 3 - Imported Cummins",
  desc: "2000 kW / 2500 kVA Silent Diesel Generator",

  highlights: [
    "Standby :- 2000 kW / 2500 kVA",
    "Phase :- 3-phase",
    "Power Factor :- 1",
    "Volt :- 440/254",
    "Frequency :- 60 Hz",
    "Current (A) :- 60",
    "Engine :- Cummins QSK60-G7",
    "Alternator :- Original Stamford",
    "Controller :- Deepsea DSE8610",
    "ATS :- check by case",
    "Aspiration :- Turbocharged + Aftercooled",
    "Governor :- Electronic",
  ],
},
];


const faqs = [
  {
    question: "¿Qué tamaño de generador necesito para mi hogar?",
    answer:
      "El tamaño depende de las cargas esenciales que desea mantener en funcionamiento, como climatización, luces, refrigerador y bomba de agua. Utilice nuestra calculadora de dimensionamiento o consulte a un electricista certificado para realizar un cálculo preciso de la carga.",
  },

  {
    question: "¿Tengo que encender el generador manualmente cuando se produce un corte de energía?",
    answer:
      "No, no es necesario encenderlo manualmente. Nuestros generadores están equipados con un sistema ATS que pone en marcha el generador automáticamente cuando se produce un corte de energía.",
  },

  {
    question: "¿Tengo que encender manualmente el generador cuando se corta la electricidad?",
    answer:
      "No, no es necesario encenderlo manualmente. Nuestros generadores cuentan con un sistema ATS que permite que el generador se encienda automáticamente cuando se produce un corte de energía.",
  },
];
  // {
  //   question: "Can I install a standby generator myself?",
  //   answer:
  //     "No. Standby installations require a licensed electrician to ensure safe connection to your electrical panel and meet local building codes.",
  // },
  // {
  //   question: "What is the recommended runtime before refueling?",
  //   answer:
  //     "Refuel when the tank reaches 1/4 full. Running too low can cause condensation in the tank and reduce engine life. Always follow safe shutdown and refueling procedures.",
  // },
// ];
const applications = [
  {
    title: "RESIDENCIAL",
    img: "Applications/Residential.webp",
  },
  {
    title: "CONSTRUCCIÓN",
    img: "Applications/Construction.webp",
  },
  {
    title: "COMERCIAL",
    img: "Applications/Commercial.webp",
  },
  {
    title: "INDUSTRIAL",
    img: "Applications/Commercial.webp",
  },
  {
    title: "HOSPITALES Y SALUD",
    img: "Applications/Hospital.webp",
  },
  {
    title: "HOTELES Y RESTAURANTES",
    img: "Applications/Hotel.webp",
  },
  {
    title: "TIENDAS MINORISTAS",
    img: "Applications/Retail.webp",
  },
  {
    title: " ENERGÍA PARA EVENTOS",
    img: "Applications/Event.webp",
  },
  {
    title: "ALMACENES",
    img: "Applications/Warehouse.webp",
  },
];


const slides = [
  {
    image: "/banner/banner2.jpeg",
    label: "Diseñado para la Confiabilidad",
    title: (
      <>
        Energía Confiable.
        <br />
        Rendimiento Duradero.
      </>
    ),
    description:
      "Los generadores VoltForge ofrecen un rendimiento de alta resistencia con eficiencia de combustible de nivel industrial, funcionamiento silencioso y construcción resistente a la intemperie. Diseñados para mantenerte en marcha, sin importar las circunstancias.",
  },
  {
    image: "/banner/BON Power .webp",
    label: "Diseñado para la Confiabilidad",
    title: (
      <>
        Energía en la que
        <br />
        Puedes Confiar.
      </>
    ),
    description:
      "Soluciones de generación de energía confiables, diseñadas para ofrecer un rendimiento constante, eficiencia de combustible y una operación duradera en condiciones exigentes.",
  },
  {
    image: "/banner/Power-banner-4.webp",
    label: "Diseñado para la Confiabilidad",
    title: (
      <>
        Rendimiento que
        <br />
        Va Más Lejos.
      </>
    ),
    description:
      "Tecnología avanzada de generación de energía diseñada para proporcionar una operación eficiente, un alto rendimiento y energía confiable cuando más la necesitas.",
  },
  {
    image: "/banner/Power-banner2.webp",
    label: "Diseñado para la Confiabilidad",
    title: (
      <>
        Mantente con Energía.
        <br />
        Mantente Productivo.
      </>
    ),
    description:
      "Mantén tu hogar, negocio y equipos esenciales funcionando con generadores confiables diseñados para un suministro continuo y eficiente de energía.",
  },
  {
    image: "/banner/Power-banner5.webp",
    label: "Diseñado para la Confiabilidad",
    title: (
      <>
        Soluciones Potentes.
        <br />
        Confiabilidad Comprobada.
      </>
    ),
    description:
      "Desde energía de respaldo para el día a día hasta aplicaciones exigentes, nuestros generadores están diseñados para ofrecer un rendimiento confiable cuando más importa.",
  },
  {
    image: "/banner/Power-banner6.webp",
    label: "Diseñado para la Confiabilidad",
    title: (
      <>
        Preparados para los
        <br />
        Trabajos Más Difíciles.
      </>
    ),
    description:
      "Soluciones de generación de energía robustas, diseñadas para funcionar en entornos residenciales, comerciales, agrícolas e industriales.",
  },
  {
    image: "/banner/web banner power.webp",
    label: "Diseñado para el Rendimiento",
    title: (
      <>
        Energía Cuando
        <br />
        Más la Necesitas.
      </>
    ),
    description:
      "La tecnología avanzada de generación ofrece energía confiable, operación eficiente y gran durabilidad para hogares, empresas y aplicaciones industriales exigentes.",
  },
];

export default function Home() {
  const [activeApp, setActiveApp] = useState<number | null>(null);
  
        const [selectedProduct, setSelectedProduct] = useState(generators[0]);
        const [openFaq, setOpenFaq] = useState<number | null>(0);

        const getSpec = (highlights: string[], label: string) => {
  const item = highlights.find((text) =>
    text.toLowerCase().startsWith(label.toLowerCase())
  );

  if (!item) return "-";

  return item.split(":-")[1]?.trim() || "-";
};
 const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];



  return (
    <>
    <main className="pt-16">
    <section
      id="home"
      className="relative min-h-[520px] overflow-hidden sm:min-h-[560px] lg:min-h-[650px] xl:min-h-[680px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
       <Image
        key={currentSlide}
        src={slide.image}
        alt="Bonhoeffer Power Generator"
        fill
        priority
        className="object-cover object-center transition-opacity duration-700"
      />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />  </div>

      {/* Top Status
      <div className="absolute right-6 top-6 z-10 hidden text-[9px] font-mono uppercase tracking-[0.18em] text-white/60 sm:block md:right-10 md:top-8">
        <div>
          SYS.STAT: <span className="text-green-400">ONLINE</span>
        </div>

        <div>
          PWR.OUT: <span className="text-white">MAX</span>
        </div>

        <div>
          NOISE.LVL: <span className="text-yellow-400">LOW</span>
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex min-h-[520px] items-end sm:min-h-[560px] lg:min-h-[650px] xl:min-h-[680px]">
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">

            {/* Small Label */}
            <div
              key={`label-${currentSlide}`}
              className="mb-3 animate-[fadeIn_0.6s_ease-in-out] text-[10px] font-bold uppercase tracking-[0.16em] text-primary-light sm:text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {slide.label}
            </div>

            {/* Heading */}
            <h1
              key={`title-${currentSlide}`}
              className="font-display mb-6 animate-[fadeIn_0.7s_ease-in-out] text-3xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px]"
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              key={`description-${currentSlide}`}
              className="font-sans mb-8 max-w-[500px] animate-[fadeIn_0.8s_ease-in-out] text-sm leading-7 text-white/85 sm:text-base md:text-lg"
            >
              {slide.description}
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="font-mono inline-flex min-h-[40px] items-center justify-center border border-white/80 bg-black/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:min-h-[44px] sm:px-6 sm:text-xs"
              >
                Solicitar Cotización

                <span className="ml-2 text-sm">
                  →
                </span>
              </Link>

              <a
                href="#products"
                className="font-mono inline-flex min-h-[40px] items-center justify-center border border-white/50 bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#353535] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black sm:min-h-[44px] sm:px-6 sm:text-xs"
              >
                Explorar Generadores

                <span className="ml-2 text-sm">
                  →
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:right-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-6 left-6 z-20 font-mono text-[9px] tracking-[0.2em] text-white/60 sm:left-10">
        0{currentSlide + 1} / 0{slides.length}
      </div>
    </section>

      {/* Trust Strip */}
      <section className="w-full bg-white">
        <div className="mx-auto flex min-h-[100px] items-center justify-center px-4 py-7 sm:min-h-[110px] sm:py-8 md:min-h-[120px]">
          <p
            className="font-sans text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-black sm:text-xs md:text-sm"
          >
            Con la confianza de Contratistas, Propietarios y Operadores de Sitios en todo el Mundo
          </p>
        </div>
      </section>



 {/* GLOBAL PRESENCE */}
<section className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:gap-14 lg:px-10">

    {/* LEFT CONTENT */}
    <div className="relative z-10 w-full lg:w-[44%]">

      {/* Heading Area */}
      <div className="relative">

        {/* Small Label */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#9a9c3b]/30 bg-[#9a9c3b]/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#9a9c3b] shadow-[0_0_12px_#9a9c3b]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4b65a] sm:text-[11px]">
            Nuestro Alcance Global
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[520px] text-[48px] font-black uppercase leading-[0.88] tracking-[-0.045em] text-white sm:text-[60px] lg:text-[70px]">
          Presencia
          <br />

          <span className="text-transparent [-webkit-text-stroke:1px_#ffffff]">
            Global
          </span>
        </h2>

        {/* Accent */}
        <div className="mt-7 flex items-center gap-3">
          <span className="h-[4px] w-20 bg-[#9a9c3b]" />
          <span className="h-[4px] w-8 bg-white/20" />
          <span className="h-[4px] w-3 bg-white/10" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-[450px] text-[13px] leading-6 text-white/55 sm:text-[14px]">
          Ofrecemos soluciones de energía confiables a través de fronteras,
          industrias y mercados, respaldados por una red global en constante crecimiento.
        </p>

      </div>

            {/* STATS */}
      <div className="relative mt-9 space-y-3">

      {/* Vertical Accent */}
      <div className="absolute bottom-5 left-0 top-5 w-[2px] bg-gradient-to-b from-[#9a9c3b] via-[#9a9c3b]/50 to-transparent" />

      {/* CONTINENTS */}
      <div className="group relative ml-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#9a9c3b]/40 hover:bg-[#9a9c3b]/[0.06] sm:px-6 sm:py-5">

        {/* Hover Glow */}
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#9a9c3b]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-center gap-5">

          <div className="min-w-[105px]">
            <span className="text-[46px] font-black leading-none tracking-[-0.05em] text-[#9a9c3b] sm:text-[54px]">
              3<span className="text-[25px] align-top">+</span>
            </span>
          </div>

          <div className="h-10 w-px bg-white/10" />

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              Alcance en
            </p>

            <p className="mt-1 text-[15px] font-bold uppercase tracking-[0.12em] text-white sm:text-[17px]">
              Continentes
            </p>
          </div>

        </div>
      </div>


      {/* COUNTRIES */}
      <div className="group relative ml-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#9a9c3b]/40 hover:bg-[#9a9c3b]/[0.06] sm:px-6 sm:py-5">

        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#9a9c3b]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-center gap-5">

          <div className="min-w-[105px]">
            <span className="text-[46px] font-black leading-none tracking-[-0.05em] text-[#9a9c3b] sm:text-[54px]">
              23<span className="text-[25px] align-top">+</span>
            </span>
          </div>

          <div className="h-10 w-px bg-white/10" />

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              En todo el mundo
            </p>

            <p className="mt-1 text-[15px] font-bold uppercase tracking-[0.12em] text-white sm:text-[17px]">
              Países
            </p>
          </div>

        </div>
      </div>


      {/* PRODUCTS */}
      <div className="group relative ml-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#9a9c3b]/40 hover:bg-[#9a9c3b]/[0.06] sm:px-6 sm:py-5">

        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#9a9c3b]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-center gap-5">

          <div className="min-w-[105px]">
            <span className="text-[46px] font-black leading-none tracking-[-0.05em] text-[#9a9c3b] sm:text-[54px]">
              4500<span className="text-[25px] align-top">+</span>
            </span>
          </div>

          <div className="h-10 w-px bg-white/10" />

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              Gama Completa de
            </p>

            <p className="mt-1 text-[15px] font-bold uppercase tracking-[0.12em] text-white sm:text-[17px]">
              Productos
            </p>
          </div>

        </div>
      </div>

      </div>
      </div>
      {/* RIGHT GIF */}
      <div className="relative flex w-full items-center justify-center lg:w-[56%]">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9a9c3b]/10 blur-[90px] sm:h-[420px] sm:w-[420px]" />

        <img
          src="https://bonhoeffermachines.com/public/index_files/Global%20Presence.gif"
          alt="Bonhoeffer Machines Global Presence"
          className="relative z-10 h-auto w-full max-w-[650px] object-contain"
        />

      </div>

    </div>
  </section>




        {/* ── APPLICATION SECTION ── */}
      <section
        id="applications"
        className="overflow-hidden border-b border-white/20 bg-black py-0"
      >
        {/* Section Header */}
        <div className="border-b border-white/25">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

            <h2
              className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-white sm:text-base"
            >
              Aplicaciones Versátiles de Energía
            </h2>

            <span
              className="font-mono hidden font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary-light sm:block"
            >
              [ ZONAS DE DESPLIEGUE ]
            </span>

          </div>
        </div>
  
        {/* Applications Grid */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {applications.map((app) => (

            <Link
              href="/contact"
              key={app.title}
              className="group block overflow-hidden rounded-[3px] border border-white/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-light hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >

              {/* Card Title */}
              <div className="flex h-[36px] items-center justify-center bg-white px-3">
                <h3 className="font-mono font-bold text-[10px]  uppercase tracking-[0.12em] text-[#000000] sm:text-[16px]">
                  {app.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative aspect-[301/153] w-full overflow-hidden bg-gray-200">

                <Image
                  src={app.img}
                  alt={app.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover:bg-black/15" />

              </div>

            </Link>

          ))}

        </div>

      </div>
      </section>



        {/* ── OUR PRODUCT RANGE ── */}
      <section
        id="products"
        className="border-b border-gray-200 bg-white"
      >
        {/* Section Header */}
        <div className="bg-[#eeeeee] px-4 py-10 text-center sm:py-12 lg:py-14">

          <span
            className="font-sans inline-flex items-center rounded-full bg-[#555555] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white sm:text-[10px]"
          >
            Diseñado para el Trabajo
          </span>

          <h2
            className="font-sans mt-3 text-3xl font-black tracking-tight text-[#444444] sm:text-4xl md:text-5xl"
          >
            Diseñado para una Fiabilidad Real
          </h2>

        </div>


    {/* Product Showcase */}
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)] lg:items-stretch lg:gap-10">


        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="min-w-0">

          {/* Main Product Image */}
          <div className="relative h-[280px] overflow-hidden border border-[#888888] bg-[#f7f7f7] sm:h-[380px] md:h-[430px] lg:h-[430px] xl:h-[450px]">

            <Image
              key={selectedProduct.img}
              src={selectedProduct.img}
              alt={selectedProduct.name}
              fill
              priority
              className="object-contain p-3 transition-all duration-500 sm:p-5"
            />

          </div>


          {/* Thumbnail Gallery */}
          <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3">

            {generators.slice(0, 3).map((generator) => (

              <button
                key={generator.name}
                type="button"
                onClick={() => setSelectedProduct(generator)}
                className={`
                  relative h-[80px] overflow-hidden border
                  bg-[#f5f5f5]
                  transition-all duration-300
                  sm:h-[95px]
                  md:h-[105px]
                  ${
                    selectedProduct.name === generator.name
                      ? "border-[#333333] ring-1 ring-[#333333]"
                      : "border-[#999999] hover:border-[#444444]"
                  }
                `}
              >

                <Image
                  src={generator.img}
                  alt={generator.name}
                  fill
                  className="object-contain p-1.5 sm:p-2"
                />

              </button>

            ))}

          </div>

        </div>


        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div className="flex flex-col">


          {/* Product Name */}
          <div className="flex min-h-[56px] items-center justify-between bg-[#eeeeee] px-4 sm:px-5">

            <h3 className="font-display text-base  uppercase tracking-wide text-[#111111] sm:text-lg"
            >
              {selectedProduct.name}
            </h3>

            <span className="text-xl leading-none text-gray-500">
              ↓
            </span>

          </div>


          {/* Classification */}
          <div className="mt-6">

            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-xs"
            >
              Classification
            </p>

            <p className=" font-display mt-2 text-sm  uppercase text-[#222222] sm:text-base"
            >
          
              {selectedProduct.desc}
            </p>

          </div>


          {/* ================================================= */}
          {/* SPECIFICATIONS */}
          {/* ================================================= */}

          <div className="mt-6 grid grid-cols-2 border-y border-gray-300 py-4">


            {/* LEFT SPECIFICATIONS */}
            <div className="border-r border-gray-300 pr-5">

              {/* Rated */}
              <div className="flex items-center justify-between gap-3">

                <span className="font-mono text-[10px] font-semibold uppercase text-gray-500 sm:text-xs"
                >
                  Rated
                </span>

                <span className="font-mono text-[10px] font-bold text-gray-400 sm:text-xs"
                >
                
                  {getSpec(selectedProduct.highlights, "Rated")}
                </span>

              </div>


              {/* Volt */}
              <div className="mt-3 flex items-center justify-between gap-3">

                <span className="font-mono text-[10px] font-semibold uppercase text-gray-500 sm:text-xs"
                >
                  Volt
                </span>

                <span className="font-mono text-[10px] font-bold text-gray-400 sm:text-xs"
                >
                  {getSpec(selectedProduct.highlights, "Volt")}
                </span>

              </div>

            </div>


            {/* RIGHT SPECIFICATIONS */}
            <div className="pl-5">

              {/* Phase */}
              <div className="flex items-center justify-between gap-3">

                <span className="font-mono text-[10px] font-semibold uppercase text-gray-500 sm:text-xs"
                >
                  Phase
                </span>

                <span className="font-mono text-[10px] font-bold text-gray-400 sm:text-xs"
                >
                  {getSpec(selectedProduct.highlights, "Phase")}
                </span>

              </div>


              {/* Frequency */}
              <div className="mt-3 flex items-center justify-between gap-3">

                <span className="font-mono text-[10px] font-semibold uppercase text-gray-500 sm:text-xs"
                >
                  Freq
                </span>

                <span className="font-mono text-[10px] font-bold text-gray-400 sm:text-xs"
                >
                  {getSpec(selectedProduct.highlights, "Frequency")}
                </span>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* TECHNICAL INFORMATION */}
          {/* ================================================= */}

          <div className="mt-5 bg-[#101417] px-5 py-5 sm:px-6">

            <div className="grid grid-cols-[100px_1fr] gap-y-3 text-[10px] sm:grid-cols-[120px_1fr] sm:text-xs">


              {/* Engine */}
              <span className="font-mono font-semibold uppercase tracking-wide text-white/70"
              >
                Engine:
              </span>

              <span className="font-mono font-medium text-[#d8df00]"
              >
                {getSpec(selectedProduct.highlights, "Engine")}
              </span>


              {/* Controller */}
              <span className="font-mono font-semibold uppercase tracking-wide text-white/70"
              >
                Controller:
              </span>

              <span className="font-mono font-medium text-white/85"
              >
                {getSpec(selectedProduct.highlights, "Controller")}
              </span>


              {/* ATS */}
              <span className="font-mono font-semibold uppercase tracking-wide text-white/70"
              >
                ATS:
              </span>

              <span className="font-mono font-medium text-white/85"
              >
                {getSpec(selectedProduct.highlights, "ATS")}
              </span>

            </div>

          </div>


          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div className="mt-auto pt-7">

            <div className="grid grid-cols-1 gap-3">


              <Link
                href="/contact"
                className="font-mono flex min-h-[44px] items-center justify-center border border-gray-400 bg-white px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-600 transition-all duration-300 hover:border-black hover:bg-gray-50 hover:text-black sm:text-xs"
              >
                Request a Quote

                <span className="ml-2 text-sm">
                  →
                </span>

              </Link>


              <a
                href="/products"
                className="font-mono flex min-h-[44px] items-center justify-center bg-black px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-primary sm:text-xs"
            >
                Explore Generator

                <span className="ml-2 text-sm">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>


  <SystemAdvantages/>



  {/* ── GET STARTED / CTA SECTION ── */}
<section className="border-t border-gray-200 bg-white py-10 sm:py-11 md:py-12">
  <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

    {/* Heading */}
    <h2
      className="font-display text-3xl font-black uppercase tracking-tight text-[#444444] sm:text-4xl md:text-[42px]"
    >
      ¿Necesita Energía Confiable?
    </h2>

    {/* Description */}
    <p
      className="font-sans mx-auto mt-3 max-w-2xl text-sm font-normal leading-6 text-gray-500 sm:text-base"
    >
      Contacte a nuestro equipo de ingeniería para seleccionar el grupo
      electrógeno ideal según sus necesidades.
    </p>

    {/* Buttons */}
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3">

      {/* Request Quote */}
      <Link
        href="/contact"
        className="font-sans inline-flex min-h-[38px] items-center justify-center border border-[#999999] bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#555555] transition-all duration-300 hover:border-black hover:bg-gray-50 hover:text-black sm:min-h-[40px] sm:px-6 sm:text-[11px]"
      >
        Solicitar Cotización

        <span className="ml-2 text-sm">
          →
        </span>
      </Link>

      {/* Contact Team */}
      <Link
        href="/contact"
        className="font-sans inline-flex min-h-[38px] items-center justify-center bg-black px-6 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#333333] sm:min-h-[40px] sm:px-7 sm:text-[11px]"
      >
        Contactar al Equipo
      </Link>

    </div>

  </div>
</section>

    {/* ── FAQ SECTION ── */}
    <section
      id="faq"
      className="border-y border-[#d0d0d0] bg-[#eeeeee] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Badge */}
        <div className="text-center">
          <span
            className="font-sans inline-flex items-center rounded-full bg-[#555555] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:px-5 sm:text-[11px]"
          >
            Soporte y Preguntas Frecuentes
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="font-sans mt-4 text-center text-3xl font-black leading-tight tracking-tight text-[#444444] sm:text-4xl md:text-5xl lg:text-[48px]"
        >
          Elija la Energía Adecuada para Sus Necesidades
        </h2>

      {/* FAQ List */}
      <div className="mx-auto mt-10 max-w-4xl space-y-4 sm:mt-12">

        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-[#363636] shadow-sm transition-all duration-300"
            >

              {/* Question */}
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-5 md:px-7 md:py-6"
              >

                <span className="text-sm font-bold leading-6 text-white sm:text-base md:text-lg"
                style={{fontFamily:"'Outfit', sans-serif"}}>
                  {faq.question}
                </span>

                {/* Arrow */}
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-white/80 transition-transform duration-300 sm:h-6 sm:w-6 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 9 6 6 6-6"
                  />
                </svg>

              </button>


              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">

                  <p className="font-sans px-5 pb-6 text-sm leading-6 text-white/75 sm:px-6 sm:text-base sm:leading-7 md:px-7 md:text-[15px]"
                  >
                    {faq.answer}
                  </p>

                </div>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  </section>

      </main>
    </>
  );
}
