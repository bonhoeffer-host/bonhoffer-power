"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919667515523",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

// Counting Animation Component
function Counter({ target, duration = 1500, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 3, label: "Continents", suffix: "" },
  { value: 23, label: "Countries", suffix: "" },
  { value: 4500, label: "Products", suffix: "+" },
  { value: 2018, label: "Founded", suffix: "" },
];

const hods = [
  {
    img: "/a7.webp",
    name: "Sachin Sharma",
    role: "Finance Controller",
  },
  {
    img: "/a8.webp",
    name: "Sudhanshu Pandey",
    role: "CEO – India",
  },
  {
    img: "/a9.webp",
    name: "Rajat Sahni",
    role: "CEO – LATAM",
  },
];

const missionPoints = [
  "Elaborar nuevas ideas y resoluciones para hacer más eficaz nuestra gama de productos.",
  "Ofrecer productos de alta calidad a precios razonables.",
  "Centrarnos en las ideas fundamentales respetuosas con la naturaleza en el proceso de fabricación.",
  "Ayudar a nuestros clientes potenciales a través de nuestros sólidos y amables servicios de atención al cliente.",
  "Introduciendo en el mercado gamas de productos exclusivas y vanguardistas.",
];

const faqs = [
  {
    q: "1. ¿Cuándo fue fundada Bonhoeffer Machines?",
    a: "Bonhoeffer Machines se estableció en 2018, operando inicialmente bajo Heine Corporation Private Limited. Posteriormente, la marca se registró como Bonhoeffer Machines Private Limited en 2023. A partir de 2023, la empresa conmemora seis años desde su inicio.",
  },
  {
    q: "2. ¿Quién fue el fundador de Bonhoeffer Machines?",
    a: "El fundador de Bonhoeffer Machines es Varun Gupta, quien inició este viaje con la visión de crear asociaciones duraderas y contribuir al progreso de las industrias en todo el mundo.",
  },
  {
    q: "3. ¿En cuántos países está operando actualmente Bonhoeffer Machines?",
    a: "Actualmente, Bonhoeffer Machines opera en más de 23 países, llevando soluciones innovadoras a América Latina, América Central y Asia.",
  },
  {
    q: "4. ¿Dónde se encuentra ubicada la oficina de Bonhoeffer Machines en India?",
    a: "Nuestra oficina registrada y corporativa en India se encuentra ubicada en Plot No 756, 2nd Floor, Udyog Vihar, Phase V, Gurugram, Haryana Pin Code: 122001.",
  },
  {
    q: "5. ¿Cuántas sedes registradas tiene Bonhoeffer Machines?",
    a: "Bonhoeffer Machines cuenta con sedes registradas en China (Ningbo), Hong Kong y su sede corporativa y registrada principal en Gurugram, India.",
  },
];

const offices = [
  {
    icon: "🇨🇳",
    country: "China Office",
    name: "NINGBO BONHOEFFER MACHINES IMPORT & EXPORT CO. LTD",
    address:
      "Room A163, Building 003(4-1) (4-2), No.1083 Zhongshan East Road, Yinzhou District, Ningbo, Zhejiang, China.",
  },
  {
    icon: "🇭🇰",
    country: "Hong Kong Office",
    name: "HEINE CORPORATION HK PRIVATE LIMITED",
    address: "RM 1607 TREND CTR 29-31 CHEUNG LEE ST CHAI WAN HONG KONG",
  },
  {
    icon: "🇮🇳",
    country: "Registered and Corporate Office",
    name: "BONHOEFFER MACHINES PRIVATE LIMITED",
    address:
      "Plot No 756, 2nd Floor, Udyog Vihar, Phase V, Gurugram, Haryana Pin Code: 122001",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-800">
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Image
                src="/bonhoeffer_logo.webp"
                alt="Bonhoeffer Machines"
                width={150}
                height={32}
                className="object-contain"
                priority
              />
            </Link>
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary font-semibold text-sm transition-colors relative"
                >
                  Home
                </Link>
              </li>
              {["About", "Products", "Applications", "Advantages", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    href={l === "About" ? "/about" : l === "Contact" ? "/contact" : `/#${l.toLowerCase()}`}
                    className={`text-sm font-semibold transition-colors ${
                      l === "About" ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold px-5 py-2 rounded-lg transition-all hover:shadow-md"
            >
              Request a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-600"
              aria-label="menu"
            >
              <span
                className="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform"
                style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
              />
              <span
                className="block w-6 h-0.5 bg-gray-700 mb-1.5"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-0.5 bg-gray-700 transition-transform"
                style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
              />
            </button>
          </div>
          {menuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-primary font-semibold py-1 px-2"
              >
                Home
              </Link>
              {["About", "Products", "Applications", "Advantages", "FAQ", "Contact"].map((l) => (
                <Link
                  key={l}
                  href={l === "About" ? "/about" : l === "Contact" ? "/contact" : `/#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`font-semibold py-1 px-2 ${l === "About" ? "text-primary bg-primary-pale rounded" : "text-gray-600"}`}
                >
                  {l}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg text-center mt-2"
              >
                Request a Quote
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Container */}
      <main className="pt-16">

        {/* ── COMPACT HERO BANNER ── */}
        <section className="relative h-[150px] md:h-[180px] flex items-center overflow-hidden bg-dark-green">
          <div className="absolute inset-0">
            <Image
              src="/banner.webp"
              alt="Bonhoeffer Machines Banner"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-dark-green/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-block bg-primary/25 border border-primary/40 text-primary-light text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-1">
              Sobre Nosotros
            </span>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Bonhoeffer Machines
            </h1>
          </div>
        </section>

        {/* ── NEW SECTION: BIENVENIDO A BONHOEFFER MACHINES (Exactly 1 Image: a5.webp) ── */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Image first (on the left on large screens) */}
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] relative">
                  <Image
                    src="/a5.webp"
                    alt="Bonhoeffer Machines Exhibition Stand"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px)100vw, 550px"
                  />
                </div>
              </div>
              {/* Text second (on the right on large screens) */}
              <div className="order-1 lg:order-2">
                <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Bienvenido
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  BIENVENIDO A BONHOEFFER MACHINES - ¡SU SOCIO EN EL PROGRESO!
                </h2>
                <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    Nuestra historia comenzó en 2018 con Heine Corporation Private Limited. En los seis años iniciales, dimos pasos significativos en la industria y, en 2023, establecimos con orgullo Bonhoeffer Machines Private Limited como nuestra marca distintiva.
                  </p>
                  <p>
                    En este corto periodo de tiempo, nos hemos aventurado en más de 23 países, llevando nuestros innovadores productos a varios rincones del mundo. Comenzando nuestras operaciones en México, hemos expandido nuestra huella, llegando tan lejos como Panamá con nuestra diversa gama de productos de alta calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: DESCRIPCIÓN DE LA EMPRESA (Exactly 1 Image: a1.webp) ── */}
        <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Descripción
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  DESCRIPCIÓN DE LA EMPRESA
                </h2>
                <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    Bonhoeffer es una marca de maquinaria, repuestos y herramientas de primera calidad para la agricultura, silvicultura, construcción, industria y jardinería, que trabaja en las tres principales regiones del mundo: América Central, América Latina y Asia. Nos esforzamos por ofrecer maquinaria de alta calidad para un uso duradero y eficiente. Tomando la simple creencia de cambiar vidas con un servicio fácil y compatible--Bonhoeffer entrega las mejores y más profesionales máquinas eléctricas. Nuestros productos satisfacen las necesidades del futuro con sus equipos avanzados y sostenibles que reducen la distancia entre la naturaleza y las personas.
                  </p>
                  <p>
                    En Bonhoeffer Machines, somos un destacado proveedor de maquinaria y equipos agrícolas e industriales de alta calidad en más de 16 países. Con un fuerte compromiso con la innovación y la satisfacción del cliente, nos esforzamos por ofrecer soluciones innovadoras para diversas industrias.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] relative">
                  <Image
                    src="/a1.webp"
                    alt="Bonhoeffer Exhibition Team"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px)100vw, 550px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: DESDE EL ESCRITORIO DEL FUNDADOR (Exactly 1 Image: a2.webp) ── */}
        <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-2" />
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                    <Image
                      src="/a2.webp"
                      alt="Varun Gupta - Founder"
                      fill
                      className="object-cover object-top"
                      sizes="350px"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Mensaje del fundador
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Desde el escritorio del fundador ( Mensaje del fundador )
                </h2>
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <span className="absolute top-2 left-4 text-6xl text-primary/10 font-serif">&ldquo;</span>
                  <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed relative z-10">
                    <p>
                      En Bonhoeffer Machines, nuestro viaje no se limita a las máquinas; se trata de crear asociaciones duraderas y contribuir al progreso de las industrias de todo el mundo. Acompáñenos en este increíble viaje mientras continuamos creciendo y generando un impacto positivo con nuestras soluciones de vanguardia.
                    </p>
                    <p>
                      Actualmente, operamos con orgullo en América Latina, América Central y Asia, llevando las soluciones innovadoras de Bonhoeffer Machines a diversas regiones. Nuestra extensa línea de productos abarca más de 4500 artículos, atendiendo a las necesidades específicas de la agricultura, jardinería, silvicultura y construcción en diversos segmentos.
                    </p>
                    <p>
                      En Bonhoeffer Machines, nuestro dinámico equipo está formado por profesionales cualificados en ventas, desarrollo de productos, mercadeo, cadena de suministro y recursos humanos. Juntos, nos esforzamos por ofrecer excelencia, garantizando que nuestras máquinas no sólo satisfagan sino que superen las expectativas de nuestros valiosos clientes en todo el mundo. Únase a nosotros para seguir creciendo y tener un impacto positivo en las industrias de todo el mundo.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h4 className="font-extrabold text-gray-900 text-lg">Varun Gupta</h4>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">FOUNDER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: NUESTRA PRESENCIA (Exactly 1 Image: a3.webp) ── */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Presencia
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  NUESTRA PRESENCIA
                </h2>
                <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    En Bonhoeffer Machines, empezamos con la visión de redefinir la industria de la maquinaria. Nuestra trayectoria es testimonio de nuestro compromiso con la innovación y la calidad. En cada máquina que creamos, infundimos la esencia de la ingeniería de precisión y la durabilidad. Nuestros clientes no se merecen menos. Nuestro éxito está profundamente arraigado en la confianza de nuestros clientes. Nos esforzamos continuamente por superar sus expectativas. La sostenibilidad no es sólo una tendencia; es nuestra responsabilidad.
                  </p>
                  <p>
                    Nuestras máquinas se diseñan teniendo en cuenta el medio ambiente. Creemos en el poder de las asociaciones. Juntos construimos un futuro en el que la eficiencia y la sostenibilidad van de la mano. Bonhoeffer Machines es más que una marca: es una promesa. Una promesa de calidad, sostenibilidad y un mañana más brillante.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] relative">
                  <Image
                    src="/a3.webp"
                    alt="Bonhoeffer Global Map"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px)100vw, 550px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP WITH LIVE COUNTING ANIMATION ── */}
        <section className="bg-primary py-6 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/85 text-xs font-bold uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: ¿CÓMO PRODUCIMOS? (Exactly 1 Image: a4.webp) ── */}
        <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] relative">
                  <Image
                    src="/a4.webp"
                    alt="Bonhoeffer Production Philosophy"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px)100vw, 450px"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Manufactura
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  ¿CÓMO PRODUCIMOS?
                </h2>
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  <p>
                    La filosofía de producción de Bonhoeffer se centra principalmente en mejorar la calidad del producto sin afectar negativamente al medio ambiente. Cada cierto tiempo introducimos los cambios necesarios en nuestro proceso de ingeniería para mejorar la calidad de nuestras máquinas, equipos y piezas. La fusión de la tecnología alemana y las normas europeas en el proceso de fabricación renueva nuestra gama de equipos de forma espectacular. Nos ayuda a mantener el decoro de nuestra marca entre los principales proveedores y exportadores.
                  </p>
                  <p>
                    Aplicamos continuamente enfoques de producción de vanguardia para que nuestra gama de productos sea competitiva en el mercado. El equipo de producción de Bonhoeffer se esfuerza constantemente por ofrecer resultados excelentes en términos de funcionalidad, funcionamiento y rendimiento de nuestros productos. Nuestra capacidad para fabricar productos de alta calidad nos define como proveedor e importador líder de máquinas y piezas de repuesto. Las capacidades de producción de Bonhoeffer son punteras porque creemos en la innovación y la portabilidad. Los enfoques centrados en el usuario nos ayudan a reforzar y adaptar nuestras capacidades de producción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY: VISION & MISSION ── */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Nuestra Filosofía
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                Nuestra filosofía
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-dark-green rounded-2xl p-8 text-white relative overflow-hidden">
                <span className="absolute top-2 right-4 text-6xl text-white/5 font-serif select-none">“</span>
                <h3 className="text-xl font-bold text-primary-light mb-3">Visión</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Tocar e influir positivamente en todas las vidas del planeta a través de nuestros excelentes productos y servicios.
                </p>
              </div>
              <div className="bg-primary-pale rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Misión</h3>
                <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  <li><strong>1.</strong> Elaborar nuevas ideas y resoluciones para hacer más eficaz nuestra gama de productos. Ofrecer productos de alta calidad a precios razonables.</li>
                  <li><strong>2.</strong> Centrarnos en las ideas fundamentales respetuosas con la naturaleza en el proceso de fabricación.</li>
                  <li><strong>3.</strong> Ayudar a nuestros clientes potenciales a través de nuestros sólidos y amables servicios de atención al cliente.</li>
                  <li><strong>4.</strong> Introduciendo en el mercado gamas de productos exclusivas y vanguardistas.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── HODs of Company (a7.webp, a8.webp, a9.webp) ── */}
        <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Liderazgo
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                HOD's of Company
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-2xl mx-auto">
                En Bonhoeffer Machines, nuestro dinámico equipo está formado por profesionales cualificados en ventas, desarrollo de productos, mercadeo, cadena de suministro y recursos humanos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {hods.map((hod) => (
                <div key={hod.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                  <div className="relative w-48 h-56 mx-auto mb-4 rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={hod.img}
                      alt={hod.name}
                      fill
                      className="object-cover object-top"
                      sizes="192px"
                    />
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base">{hod.name}</h3>
                  <p className="text-gray-500 text-xs font-semibold mt-1">{hod.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Preguntas
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                PREGUNTAS FRECUENTES
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "border-primary shadow-sm" : "border-gray-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-900 hover:text-primary transition-colors bg-white text-sm md:text-base"
                  >
                    <span>{f.q}</span>
                    <span className="text-primary font-bold text-lg">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 pt-1 text-gray-600 text-xs md:text-sm leading-relaxed bg-white border-t border-gray-50">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sedes Registradas ── */}
        <section className="py-12 bg-dark-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/25 border border-primary/40 text-primary-light text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                Ubicaciones
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                Sedes Registradas
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl mb-3">{office.icon}</div>
                  <span className="text-primary-light text-xs font-bold uppercase tracking-wider block mb-1">
                    {office.country}
                  </span>
                  <h4 className="font-extrabold text-sm mb-3 text-white leading-snug">
                    {office.name}
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 bg-primary text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-black text-white">
              Únase a Nosotros en el Camino del Progreso
            </h2>
            <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl mx-auto">
              Bonhoeffer Machines es más que una marca: es una promesa. Una promesa de calidad, sostenibilidad y un mañana más brillante.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-dark-green hover:bg-dark-green/90 text-white font-bold px-6 py-3 rounded-lg text-sm transition-all"
              >
                Contáctenos Hoy
              </Link>
              <Link
                href="/"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg text-sm transition-all"
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-dark-green text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/bonhoeffer_logo.webp"
                alt="Bonhoeffer Machines"
                width={140}
                height={30}
                className="object-contain brightness-0 invert mb-4"
              />
              <p className="text-white/50 text-xs leading-relaxed mb-5">
                Bonhoeffer Machines – Su socio en el progreso. Maquinaria de clase mundial para agricultura, silvicultura, construcción e industria.
              </p>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 transition-all"
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Quick Links",
                items: [
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Products", href: "/#products" },
                  { label: "Applications", href: "/#applications" },
                  { label: "FAQ", href: "/about#faq" },
                  { label: "Contact Us", href: "/contact" },
                ],
              },
              {
                title: "Products & Services",
                items: [
                  { label: "Agriculture", href: "#" },
                  { label: "Forestry", href: "#" },
                  { label: "Construction", href: "#" },
                  { label: "Industry", href: "#" },
                  { label: "Gardening", href: "#" },
                  { label: "Spare Parts", href: "#" },
                ],
              },
              {
                title: "Our Offices",
                items: [
                  { label: "India – Gurugram HQ", href: "#" },
                  { label: "China – Ningbo", href: "#" },
                  { label: "Hong Kong", href: "#" },
                  { label: "Latin America", href: "#" },
                  { label: "Central America", href: "#" },
                ],
              },
            ].map((col) => (
              <div key={col.title} className="md:col-span-1">
                <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-1 border-b border-white/10 inline-block">
                  {col.title}
                </h5>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/50 hover:text-white text-xs transition-colors flex items-center gap-1"
                      >
                        <span className="text-primary">›</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-white/30 text-xs gap-2">
            <p>© 2025 Bonhoeffer Machines Private Limited. All rights reserved.</p>
            <p>Your Partner in Progress – Since 2018.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
