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
          alt="Product"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[15%_center] sm:object-center"
        />
      
       
      
        {/* White Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-2xl pt-4">
            <h1 className="font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Become a Dealer
            </h1>
      
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/90 sm:mt-3 sm:text-base md:text-lg">
              Partner with Bonhoeffer Machines and grow your business with
              reliable, efficient, and high-performance power solutions.
              <br className="hidden sm:block" />
              Join our dealer network and bring dependable machinery solutions
              to customers across your market.
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
              Partner With Bonhoeffer
            </span>

            {/* Heading */}
            <h2 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight tracking-wide text-gray-900 sm:text-3xl lg:text-4xl">
              Grow Your Business With Bonhoeffer
            </h2>

            {/* Green Line */}
            <div className="mt-4 flex justify-center">
              <div className="h-[4px] w-16 rounded-full bg-lime-400" />
            </div>

            {/* Intro */}
            <p className="mx-auto mt-6 max-w-3xl font-sans text-sm leading-7 text-gray-600 sm:text-base">
              At Bonhoeffer Machines, we believe in building strong and
              lasting partnerships with businesses that share our commitment
              to quality, reliability, and customer satisfaction. Our dealer
              network is an important part of bringing dependable power
              solutions to customers across different markets.
            </p>

            <p className="mx-auto mt-4 max-w-3xl font-sans text-sm leading-7 text-gray-600 sm:text-base">
              Whether you are an established machinery distributor, generator
              dealer, agricultural equipment supplier, or looking to expand
              your product portfolio, becoming a Bonhoeffer dealer gives you
              the opportunity to grow with a trusted and expanding power
              equipment brand.
            </p>

          </div>


          {/* Quick Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-12">

            {/* Highlight 01 */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-sm">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900">
                Reliable Products
              </h3>

              <p className="mt-2 font-sans text-sm leading-6 text-gray-600">
                Dependable power equipment built for demanding applications.
              </p>
            </div>

            {/* Highlight 02 */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-sm">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900">
                Dealer Support
              </h3>

              <p className="mt-2 font-sans text-sm leading-6 text-gray-600">
                Product, technical, and business support to help you succeed.
              </p>
            </div>

            {/* Highlight 03 */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-sm">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900">
                Long-Term Growth
              </h3>

              <p className="mt-2 font-sans text-sm leading-6 text-gray-600">
                Build a lasting partnership with a growing power solutions
                brand.
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
                  Dealer Inquiry
                </span>

                <h2 className="mt-3 font-display text-xl font-black uppercase leading-tight tracking-wide text-gray-900 sm:text-2xl lg:text-3xl">
                Become a Bonhoeffer Dealer
                </h2>
              </div>

              <span className="hidden shrink-0 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400 md:block">
                [ PARTNERSHIP ]
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
                [ WHY PARTNER WITH US ]
              </span>

             <h3 className="mt-4 font-display text-xl font-black uppercase leading-tight tracking-wide text-gray-900 sm:text-2xl">
                Let's Build a Stronger Partnership
                </h3>

              <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-gray-600 sm:text-base">
                Interested in becoming a Bonhoeffer dealer? Tell us about your
                company and business. Our team will review your information
                and get in touch with you.
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
                        Business Partnership
                      </h4>

                      <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                        Grow your business with Bonhoeffer power solutions.
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
                        Product & Technical Support
                      </h4>

                      <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                        Access support to help you serve your customers better.
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
                        Reliable Brand
                      </h4>

                      <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                        Represent a brand focused on quality and dependable
                        performance.
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
                        Market Opportunities
                      </h4>

                      <p className="mt-1.5 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                        Explore opportunities to expand your presence in the
                        power equipment market.
                      </p>
                    </div>

                  </div>
                </div>

              </div>


              {/* ================= BOTTOM CTA ================= */}
              <div className="mt-auto pt-8">

                <div className="border border-primary/20 bg-primary/5 p-5">

                  <h4 className="font-display text-sm font-black uppercase tracking-wide text-gray-900">
                    Ready to partner with us?
                  </h4>

                  <p className="mt-2 font-sans text-xs leading-5 text-gray-600 sm:text-sm">
                    Complete the dealer inquiry form and our team will contact
                    you regarding the next steps.
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
                  [ DEALER REGISTRATION ]
                </span>

               <h3 className="mt-2 font-display text-xl font-black uppercase leading-tight tracking-wide text-gray-900 sm:text-2xl">
                Dealer Inquiry Form
                </h3>
                <p className="mt-2 font-sans text-xs leading-5 text-gray-500 sm:text-sm">
                  Please provide your business details below.
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
                      Company Name
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
                        placeholder="Enter company name"
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
                        Email
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
                          placeholder="Enter email"
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
                        Phone Number
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
                          placeholder="Enter phone number"
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
                      Address
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
                        placeholder="Enter business address"
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
                        Postal Code
                        <span className="text-primary"> *</span>
                      </label>

                      <input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        required
                        placeholder="Enter postal code"
                        className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />

                    </div>


                    {/* CITY */}
                    <div>

                      <label
                        htmlFor="city"
                        className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700 sm:text-[11px]"
                      >
                        City
                        <span className="text-primary"> *</span>
                      </label>

                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="Enter city"
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
                      Country
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
                        placeholder="Enter country"
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
                      Current Brands
                    </label>

                    <textarea
                      id="currentBrands"
                      name="currentBrands"
                      rows={3}
                      placeholder="Tell us which brands you currently represent"
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
                        You understand that when you click on submit,{" "}
                        <span className="font-semibold text-gray-700">
                          Bonhoeffer Machines Private Limited
                        </span>{" "}
                        and its affiliated entities may use your personal data
                        to respond to your inquiry or request. We are committed
                        to protecting your privacy and will always handle your
                        personal data in accordance with our Privacy Policy.
                        You may withdraw your consent to receive marketing
                        communications from us at any time.
                      </label>

                    </div>
                  </div>

                </div>


                {/* ================= SUBMIT ================= */}
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 sm:text-sm"
                >
                  Submit Dealer Inquiry
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
            Power Your Business With Bonhoeffer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-7 text-gray-300 sm:text-base">
            Join our dealer network and help customers find dependable power
            solutions for their homes, businesses, agriculture, and industrial
            applications.
          </p>

          <a
            href="#dealer-form"
            className="mt-7 inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-primary-dark sm:text-sm"
          >
            Apply to Become a Dealer
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}