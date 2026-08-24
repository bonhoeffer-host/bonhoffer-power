"use client";

import Image from "next/image";
import SystemAdvantages from "@/components/SystemAdvantages";
import { FormEvent } from "react";

import {
  ArrowRight,
  Building2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function BecomeDealerPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your API submission here
    alert("Thank you! Your dealer inquiry has been submitted.");
  };

  return (
    <main className="bg-white text-gray-900">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
     <section className="relative h-[280px] overflow-hidden bg-black sm:h-[340px] md:h-[400px] lg:h-[450px]">
  <Image
    src="/banner/contact-banner.webp"
    alt="Conviértase en Distribuidor"
    fill
    priority
    sizes="100vw"
    className="object-cover object-[15%_center] sm:object-center"
  />

  {/* White Text */}
  <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
    <div className="max-w-2xl pt-4">
      <h1 className="font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Conviértase en Distribuidor
      </h1>

      <p className="mt-2 text-sm font-medium leading-relaxed text-white/90 sm:mt-3 sm:text-base md:text-lg">
        Asóciese con Bonhoeffer Machines y haga crecer su negocio con
        soluciones de energía confiables, eficientes y de alto rendimiento.
        <br className="hidden sm:block" />
        Únase a nuestra red de distribuidores y ofrezca soluciones de
        maquinaria confiables a clientes de todo su mercado.
      </p>
    </div>
  </div>
</section>
      

      {/* =========================================================
          INTRODUCTION SECTION
      ========================================================= */}
     <section className="bg-white py-12 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="mx-auto max-w-4xl text-center">

      {/* Small Label */}
      <span className="inline-block rounded-full bg-lime-50 px-4 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-lime-700 sm:text-xs">
        Asóciese con Bonhoeffer
      </span>

      {/* Heading */}
      <h2 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight tracking-wide text-gray-900 sm:text-3xl lg:text-4xl">
        Haga Crecer Su Negocio con Bonhoeffer
      </h2>

      {/* Green Line */}
      <div className="mt-4 flex justify-center">
        <div className="h-[4px] w-16 rounded-full bg-lime-400" />
      </div>

      {/* Intro */}
      <p className="mx-auto mt-6 max-w-3xl font-sans text-sm leading-7 text-gray-600 sm:text-base">
        En Bonhoeffer Machines, creemos en construir alianzas sólidas y
        duraderas con empresas que comparten nuestro compromiso con la calidad,
        la confiabilidad y la satisfacción del cliente. Nuestra red de
        distribuidores es una parte fundamental para ofrecer soluciones de
        energía confiables a clientes en diferentes mercados.
      </p>

      <p className="mx-auto mt-4 max-w-3xl font-sans text-sm leading-7 text-gray-600 sm:text-base">
        Ya sea que sea un distribuidor de maquinaria establecido, un
        distribuidor de generadores, un proveedor de equipos agrícolas o que
        busque ampliar su cartera de productos, convertirse en distribuidor
        de Bonhoeffer le brinda la oportunidad de crecer junto a una marca
        confiable y en expansión de equipos de energía.
      </p>

    </div>


    {/* Quick Highlights */}
    <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-12">

      {/* Highlight 01 */}
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-sm">
        <h3 className="font-display text-lg font-bold uppercase text-gray-900">
          Productos Confiables
        </h3>

        <p className="mt-2 font-sans text-sm leading-6 text-gray-600">
          Equipos de generación de energía confiables, diseñados para
          aplicaciones exigentes.
        </p>
      </div>

      {/* Highlight 02 */}
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-sm">
        <h3 className="font-display text-lg font-bold uppercase text-gray-900">
          Soporte para Distribuidores
        </h3>

        <p className="mt-2 font-sans text-sm leading-6 text-gray-600">
          Soporte técnico, de productos y comercial para ayudarle a alcanzar
          el éxito.
        </p>
      </div>

      {/* Highlight 03 */}
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-sm">
        <h3 className="font-display text-lg font-bold uppercase text-gray-900">
          Crecimiento a Largo Plazo
        </h3>

        <p className="mt-2 font-sans text-sm leading-6 text-gray-600">
          Construya una alianza duradera con una marca de soluciones de
          energía en crecimiento.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* =========================================================
          SYSTEM ADVANTAGES
      ========================================================= */}
      <SystemAdvantages />


      {/* =========================================================
          DEALER FORM SECTION
      ========================================================= */}
  <section
  id="dealer-form"
  className="bg-white py-14 sm:py-18 lg:py-24"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* =====================================================
        SECTION HEADING
    ===================================================== */}
    <div className="mb-8 border-b border-gray-200 pb-6 sm:mb-10 lg:mb-12">

      <div className="flex items-end justify-between gap-5">

        <div className="min-w-0">

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Consulta de Distribuidor
          </span>

          <h2 className="mt-3 font-display text-xl font-black uppercase leading-tight tracking-wide text-gray-900 sm:text-2xl lg:text-3xl">
            Conviértete en Distribuidor de Bonhoeffer
          </h2>
        </div>

        <span className="hidden shrink-0 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400 md:block">
          [ ASOCIACIÓN ]
        </span>

      </div>
    </div>


    {/* =====================================================
        MAIN GRID
    ===================================================== */}
    <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">


      {/* ===================================================
          LEFT CONTENT
      =================================================== */}
      <div className="flex h-full flex-col border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">

        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          [ POR QUÉ ASOCIARSE CON NOSOTROS ]
        </span>

        <h3 className="mt-4 font-display text-xl font-black uppercase leading-tight tracking-wide text-gray-900 sm:text-2xl">
          Construyamos una Asociación Más Sólida
        </h3>

        <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-gray-600 sm:text-base">
          ¿Está interesado en convertirse en distribuidor de Bonhoeffer?
          Cuéntenos sobre su empresa y su negocio. Nuestro equipo revisará
          su información y se pondrá en contacto con usted.
        </p>


        {/* ================= BENEFITS ================= */}
        <div className="mt-8 space-y-4">

          {/* 01 */}
          <div className="border border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-gray-50 sm:p-5">
            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 text-primary">
                <Building2 size={19} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h4 className="font-display text-sm font-black uppercase tracking-wide text-gray-900">
                  Asociación Comercial
                </h4>

                <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                  Haga crecer su negocio con las soluciones de energía de Bonhoeffer.
                </p>
              </div>

            </div>
          </div>


          {/* 02 */}
          <div className="border border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-gray-50 sm:p-5">
            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 text-primary">
                <Wrench size={19} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h4 className="font-display text-sm font-black uppercase tracking-wide text-gray-900">
                  Soporte de Producto y Técnico
                </h4>

                <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                  Acceda a soporte para atender mejor a sus clientes.
                </p>
              </div>

            </div>
          </div>


          {/* 03 */}
          <div className="border border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-gray-50 sm:p-5">
            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 text-primary">
                <ShieldCheck size={19} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h4 className="font-display text-sm font-black uppercase tracking-wide text-gray-900">
                  Marca Confiable
                </h4>

                <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                  Represente una marca enfocada en la calidad y el rendimiento confiable.
                </p>
              </div>

            </div>
          </div>


          {/* 04 */}
          <div className="border border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-gray-50 sm:p-5">
            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 text-primary">
                <Globe2 size={19} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h4 className="font-display text-sm font-black uppercase tracking-wide text-gray-900">
                  Oportunidades de Mercado
                </h4>

                <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                  Explore oportunidades para ampliar su presencia en el mercado
                  de equipos de energía.
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-auto pt-8">

          <div className="border border-primary/20 bg-primary/5 p-5">

            <h4 className="font-display text-sm font-black uppercase tracking-wide text-gray-900">
              ¿Listo para asociarse con nosotros?
            </h4>

            <p className="mt-2 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
              Complete el formulario de consulta para distribuidores y nuestro
              equipo se pondrá en contacto con usted para informarle sobre los
              próximos pasos.
            </p>

          </div>

        </div>

      </div>


      {/* ===================================================
          RIGHT FORM
      =================================================== */}
      <div className="flex h-full flex-col border border-gray-200 bg-gray-50 p-5 sm:p-8 lg:p-10">

        {/* ================= FORM HEADER ================= */}
        <div className="mb-7 border-b border-gray-200 pb-5">

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            [ REGISTRO DE DISTRIBUIDOR ]
          </span>

          <h3 className="mt-2 font-display text-xl font-black uppercase leading-tight tracking-wide text-gray-900 sm:text-2xl">
            Formulario de Consulta para Distribuidores
          </h3>

          <p className="mt-2 font-sans text-xs leading-5 text-gray-500 sm:text-sm">
            Proporcione los datos de su empresa a continuación.
          </p>

        </div>


        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col"
        >

          <div className="space-y-5">


            {/* ================= COMPANY NAME ================= */}
            <div>

              <label
                htmlFor="companyName"
                className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
              >
                Nombre de la Empresa
                <span className="text-primary"> *</span>
              </label>

              <div className="relative">

                <Building2
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="Ingrese el nombre de la empresa"
                  className="w-full rounded-none border border-gray-300 bg-white py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />

              </div>
            </div>


            {/* ================= EMAIL + PHONE ================= */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
                >
                  Correo Electrónico
                  <span className="text-primary"> *</span>
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Ingrese su correo electrónico"
                    className="w-full rounded-none border border-gray-300 bg-white py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />

                </div>
              </div>


              {/* PHONE */}
              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
                >
                  Número de Teléfono
                  <span className="text-primary"> *</span>
                </label>

                <div className="relative">

                  <Phone
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Ingrese su número de teléfono"
                    className="w-full rounded-none border border-gray-300 bg-white py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />

                </div>
              </div>

            </div>


            {/* ================= ADDRESS ================= */}
            <div>

              <label
                htmlFor="address"
                className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
              >
                Dirección
                <span className="text-primary"> *</span>
              </label>

              <div className="relative">

                <MapPin
                  size={17}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  placeholder="Ingrese la dirección de su empresa"
                  className="w-full resize-none rounded-none border border-gray-300 bg-white py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />

              </div>
            </div>


            {/* ================= POSTAL + CITY ================= */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* POSTAL */}
              <div>

                <label
                  htmlFor="postalCode"
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
                >
                  Código Postal
                  <span className="text-primary"> *</span>
                </label>

                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  required
                  placeholder="Ingrese el código postal"
                  className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />

              </div>


              {/* CITY */}
              <div>

                <label
                  htmlFor="city"
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
                >
                  Ciudad
                  <span className="text-primary"> *</span>
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder="Ingrese la ciudad"
                  className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />

              </div>

            </div>


            {/* ================= COUNTRY ================= */}
            <div>

              <label
                htmlFor="country"
                className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
              >
                País
                <span className="text-primary"> *</span>
              </label>

              <div className="relative">

                <Globe2
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  placeholder="Ingrese el país"
                  className="w-full rounded-none border border-gray-300 bg-white py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />

              </div>
            </div>


            {/* ================= CURRENT BRANDS ================= */}
            <div>

              <label
                htmlFor="currentBrands"
                className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
              >
                Marcas Actuales
              </label>

              <textarea
                id="currentBrands"
                name="currentBrands"
                rows={3}
                placeholder="Indíquenos qué marcas representa actualmente"
                className="w-full resize-none rounded-none border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
              />

            </div>


            {/* ================= PRIVACY ================= */}
            <div className="border border-gray-200 bg-white p-4">

              <div className="flex items-start gap-3">

                {/* REQUIRED CHECKBOX */}
                <input
                  id="privacyConsent"
                  name="privacyConsent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-primary"
                />

                {/* PRIVACY ICON */}
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-primary"
                />

                {/* PRIVACY TEXT */}
                <label
                  htmlFor="privacyConsent"
                  className="cursor-pointer font-sans text-[11px] leading-5 text-gray-500 sm:text-xs"
                >
                  Usted entiende que al hacer clic en enviar,{" "}
                  <span className="font-semibold text-gray-700">
                    Bonhoeffer Machines Private Limited
                  </span>{" "}
                  y sus entidades afiliadas pueden utilizar sus datos personales
                  para responder a su consulta o solicitud. Nos comprometemos a
                  proteger su privacidad y siempre trataremos sus datos personales
                  de acuerdo con nuestra Política de Privacidad. Puede retirar su
                  consentimiento para recibir comunicaciones de marketing en
                  cualquier momento.
                </label>

              </div>
            </div>

          </div>


          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 sm:text-sm"
          >
            Enviar Consulta de Distribuidor
            <ArrowRight size={18} />
          </button>

        </form>

      </div>

    </div>
  </div>
</section>


{/* =========================================================
    BOTTOM CTA
========================================================= */}
<section className="bg-[#111827] py-12 sm:py-14 lg:py-16">

  <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

    <h2 className="font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
      Impulse Su Negocio con Bonhoeffer
    </h2>

    <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-7 text-gray-300 sm:text-base">
      Únase a nuestra red de distribuidores y ayude a sus clientes a encontrar
      soluciones de energía confiables para sus hogares, negocios, agricultura
      y aplicaciones industriales.
    </p>

    <a
      href="#dealer-form"
      className="mt-7 inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-primary-dark sm:text-sm"
    >
      Solicitar ser Distribuidor
      <ArrowRight size={18} />
    </a>

  </div>
</section>
    </main>
  );
}