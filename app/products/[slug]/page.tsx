import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/products";


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


  return (
    <>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            <Link href="/" className="flex items-center">
              <Image
                src="/bonhoeffer_logo.webp"
                alt="Bonhoeffer Power"
                width={160}
                height={36}
                priority
                className="object-contain"
              />
            </Link>


            <ul className="hidden md:flex items-center gap-6">

              {[
                { label:"Home", href:"/" },
                { label:"About", href:"/about" },
                { label:"Products", href:"/products" },
                { label:"Contact", href:"/contact" },
              ].map((item)=>(

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className={`text-sm font-semibold transition-colors
                    ${
                      item.label === "Products"
                      ? "text-primary"
                      : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>


            <Link
              href="/contact"
              className="hidden md:inline-flex bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm"
            >
              Request a Quote
            </Link>


          </div>

        </div>

      </nav>




      <main className="pt-16">


        {/* HERO */}

        <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

          <div className="absolute inset-0">

            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />

          </div>



          <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">


            <span className="inline-block bg-primary/20 border border-primary/40 text-lime-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">

              ⚡ Our Complete Range

            </span>


            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">

              Silent Diesel{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">

                Generator Range

              </span>

            </h1>


            <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mb-5"/>


            <p className="text-slate-300 max-w-2xl mx-auto">

              Explore our full catalog of {allProducts.length} high-performance,
              fuel-efficient silent diesel generators.

            </p>


          </div>

        </section>



{/* PRODUCT DETAILS */}

<section className="max-w-7xl mx-auto px-5 py-12">


  {/* IMAGE + DETAILS */}

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">


    {/* LEFT SIDE IMAGE */}

    <div>

      {/* PRODUCT NAME */}

      <div className="text-center mb-8">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {product.name}
        </h1>


        <p className="text-primary font-semibold text-lg">
          {product.desc}
        </p>

      </div>



      {/* IMAGE */}

     <div className="relative w-full 
                h-[280px] 
                sm:h-[350px] 
                md:h-[450px]
                rounded-3xl 
                overflow-hidden 
                shadow-2xl 
                bg-slate-100">

  <Image
    src={product.img}
    alt={product.name}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-contain p-4"
  />

</div>


    </div>





    {/* RIGHT SIDE DETAILS */}

   <div className="bg-gradient-to-br from-[#141c2b] via-black to-[#141c2b] rounded-3xl p-5 sm:p-8 shadow-2xl">

      <h3 className="text-2xl font-bold text-white mb-6">
        Key Features
      </h3>



<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


        {product.highlights.map((item,index)=>(

          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-start gap-2"
          >

            <span className="text-blue-200 font-bold">
              ✓
            </span>


            <p className="text-white text-xs sm:text-sm leading-relaxed">
              {item}
            </p>


          </div>

        ))}


      </div>



      <Link
        href="/contact"
        className="inline-flex w-full sm:w-auto justify-center mt-8 bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition">

        Request a Quote

      </Link>


    </div>


  </div>


</section>
</main>


{/* ── CTA SECTION ── */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden border-t border-slate-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-lime-400 font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-6">
              ⚡ GET IN TOUCH
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
              Need Help Choosing the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">
                Right Generator?
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Our experts will help you find the perfect model for your power requirements and application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold px-9 py-4 rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 text-base"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      

    </>
  );
}