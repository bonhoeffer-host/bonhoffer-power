import Link from "next/link";

const footerColumns = [
    {
    title: "Productos",
    items: [
      { label: "Generadores portátiles", href: "/products" },
      { label: "Sistemas de respaldo", href: "/products" },
      { label: "Interruptores de transferencia", href: "/products" },
      { label: "Accesorios", href: "/products" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Guía de dimensionamiento", href: "#" },
      { label: "Lista de verificación de instalación", href: "#" },
      { label: "Manual de seguridad", href: "#" },
      { label: "Garantía", href: "#" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre Bonhoeffer", href: "/about" },
      { label: "Carreras", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Contacto", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white" style={{ borderTop: "3px solid #0c8ce9", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-6 md:flex-row md:gap-0 lg:py-7">

          {/* BRAND SECTION - 50% */}
          <div className="w-full md:w-1/2 md:pr-10 lg:pr-16">
            <Link href="/" className="inline-block">
              <div className="text-[32px] font-bold leading-none tracking-[1.8px]" style={{ color: "#989b38" }}>
                BONHOEFFER
              </div>
            </Link>

                    <p
              className="mt-4 max-w-[330px] text-[15px] leading-[19px]"
              style={{ color: "#c2c2c2" }}
            >
              Energía confiable para hogares, empresas y
              <br />
              lugares de trabajo. Diseñada para el campo y respaldada por
              <br />
              ingeniería industrial.
            </p>
          </div>

          {/* LINKS SECTION - 50% */}
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-3 md:w-1/2 md:gap-6 lg:gap-10">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[17px] font-bold leading-none" style={{ color: "#ffffff" }}>
                  {column.title}
                </h3>

                <ul className="space-y-[10px]">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="block whitespace-nowrap text-[13px] leading-[16px] transition-colors duration-200 hover:text-white" style={{ color: "#bdbdbd" }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="h-px w-full" style={{ backgroundColor: "#3a3a3a" }} />

        {/* COPYRIGHT */}
        <div className="flex min-h-[32px] items-start pt-[7px] pb-2">
          <p className="text-[12px] font-bold uppercase leading-[13px] tracking-[1.4px]" style={{ color: "#bdbdbd", fontFamily: '"Courier New", Courier, monospace' }}>
            © 2026 BONHOEFFER POWER - ENGINEERED PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
}