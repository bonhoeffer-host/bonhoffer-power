"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// socialLinks has been refactored into the global Footer component

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

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-800">
      <main className="pt-16">

        {/* ── COMPACT HERO BANNER ── */}
        {/* <section className="relative h-[150px] md:h-[180px] flex items-center overflow-hidden bg-dark-green">
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
            <span className="font-mono inline-block bg-primary/25 border border-primary/40 text-primary-light text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-1">
              Sobre Nosotros
            </span>
            <h1 className="font-archivo text-xl md:text-2xl font-bold text-white tracking-tight">
              Bonhoeffer Machines
            </h1>
          </div>
        </section> */}
        <section className="relative h-[400px] sm:h-[430px] lg:h-[450px] overflow-hidden bg-black">

  {/* Background Image */}
  <Image
    src="/banner/product-banner.jpeg"
    alt="Bonhoeffer Machines"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Hero Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-5">

    <div className="max-w-4xl">

      <h1 className="font-display text-white text-3xl sm:text-4xl md:text-[34px] lg:text-[38px] font-extrabold tracking-wide uppercase leading-tight drop-shadow-lg">
        Sobre Nosotros
      </h1>

      <div className="flex justify-center mt-3 mb-5">
        <div className="h-[4px] w-20 bg-lime-400 rounded-full shadow-[0_0_8px_rgba(163,230,53,0.6)]" />
      </div>

      <p className="font-sans mx-auto max-w-[760px] text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] leading-[1.7] text-white/90 font-normal">
        Bonhoeffer Machines se compromete a ofrecer soluciones de maquinaria
        confiables, eficientes e innovadoras, diseñadas para satisfacer las
        necesidades cambiantes de las industrias modernas.
        <br className="hidden sm:block" />
        Con un enfoque en la calidad, el rendimiento y la satisfacción del
        cliente, nos esforzamos por fabricar máquinas que ofrezcan resultados
        confiables.
      </p>

    </div>

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
                <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Bienvenido
                </span>
                <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  BIENVENIDO A BONHOEFFER MACHINES - ¡SU SOCIO EN EL PROGRESO!
                </h2>
                <div className="font-sans space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
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
                <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Descripción
                </span>
                <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  DESCRIPCIÓN DE LA EMPRESA
                </h2>
                <div className="font-sans space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
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
                <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Mensaje del fundador
                </span>
                <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Desde el escritorio del fundador ( Mensaje del fundador )
                </h2>
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <span className="absolute top-2 left-4 text-6xl text-primary/10 font-serif">&ldquo;</span>
                  <div className="font-sans space-y-4 text-gray-600 text-sm md:text-base leading-relaxed relative z-10">
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
                <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Presencia
                </span>
                <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  NUESTRA PRESENCIA
                </h2>
                <div className="font-sans space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
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
                  <div className="font-sans text-2xl md:text-3xl font-black text-white">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-sans text-white/85 text-xs font-bold uppercase tracking-wider mt-1">
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
                <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Manufactura
                </span>
                <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  ¿CÓMO PRODUCIMOS?
                </h2>
                <div className="font-sans space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
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
              <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Nuestra Filosofía
              </span>
              <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                Nuestra filosofía
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-dark-green rounded-2xl p-8 text-white relative overflow-hidden">
                <span className="absolute top-2 right-4 text-6xl text-white/5 font-serif select-none">“</span>
                <h3 className="text-xl font-bold text-primary-light mb-3">Visión</h3>
                <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed">
                  Tocar e influir positivamente en todas las vidas del planeta a través de nuestros excelentes productos y servicios.
                </p>
              </div>
              <div className="bg-primary-pale rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Misión</h3>
                <ul className="font-sans space-y-3 text-sm text-gray-700 leading-relaxed">
                  <li><strong>1.</strong> Elaborar nuevas ideas y resoluciones para hacer más eficaz nuestra gama de productos. Ofrecer productos de alta calidad a precios razonables.</li>
                  <li><strong>2.</strong> Centrarnos en las ideas fundamentales respetuosas con la naturaleza en el proceso de fabricación.</li>
                  <li><strong>3.</strong> Ayudar a nuestros clientes potenciales a través de nuestros sólidos y amables servicios de atención al cliente.</li>
                  <li><strong>4.</strong> Introduciendo en el mercado gamas de productos exclusivas y vanguardistas.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
        Liderazgo
      </span>

      <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
        HOD's of Company
      </h2>

      <p className="font-sans text-gray-500 text-xs md:text-sm mt-2 max-w-2xl mx-auto">
        En Bonhoeffer Machines, nuestro dinámico equipo está formado por profesionales cualificados en ventas, desarrollo de productos, mercadeo, cadena de suministro y recursos humanos.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {hods.map((hod) => (
        <div
          key={hod.name}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center"
        >
      {/* Image */}
        <div className="relative w-full h-64 sm:h-72">
          <Image
            src={hod.img}
            alt={hod.name}
            fill
            className="object-fill"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="px-3 pt-1 pb-4">
          <h3 className="font-sans font-extrabold text-gray-900 text-base">
            {hod.name}
          </h3>

          <p className="font-sans text-gray-500 text-xs font-semibold mt-1">
            {hod.role}
          </p>
        </div>
        </div>
      ))}
    </div>

  </div>
</section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="font-mono inline-block bg-primary-pale text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Preguntas
              </span>
              <h2 className="font-archivo text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
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
              <span className="font-mono inline-block bg-primary/25 border border-primary/40 text-primary-light text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                Ubicaciones
              </span>
              <h2 className="font-archivo text-xl md:text-2xl font-extrabold tracking-tight">
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
            <p className="font-sans text-white/80 text-sm md:text-base mt-3 max-w-xl mx-auto">
              Bonhoeffer Machines es más que una marca: es una promesa. Una promesa de calidad, sostenibilidad y un mañana más brillante.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="font-mono bg-dark-green hover:bg-dark-green/90 text-white font-bold px-6 py-3 rounded-lg text-sm transition-all"
              >
                Contáctenos Hoy
              </Link>
              <Link
                href="/"
                className=" font-mono border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg text-sm transition-all"
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
