"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/about" },
    { label: "Productos", href: "/products" },
    { label: "Conviértase en distribuidor", href: "/become-a-dealer" },
    { label: "Contacto", href: "/contact" },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
           <Image 
            src="/bonhoefferpower-logo.webp"
            alt="Bonhoeffer Power"
            width={190}
            height={48}
            className="h-auto w-[145px] object-contain transition-opacity hover:opacity-90 sm:w-[165px] md:w-[180px] lg:w-[190px]"
            priority 
          />
          </Link>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`font-semibold text-sm transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all ${
                      isActive
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#353535] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            <span>Solicitar cotización</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label="menu"
          >
            <span
              className="block w-6 h-0.5 bg-slate-800 mb-1.5 transition-transform"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
            />
            <span
              className="block w-6 h-0.5 bg-slate-800 mb-1.5"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-slate-800 transition-transform"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
            />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-semibold py-1 px-2 ${
                    isActive ? "text-primary bg-primary/10 rounded" : "text-slate-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#353535] text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center mt-2"
            >
              Request a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
