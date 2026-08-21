import {
  Fuel,
  VolumeX,
  Zap,
  HardHat,
  Wrench,
  CircleDollarSign,
  Snowflake,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react";

export default function SystemAdvantages() {
  return (
    <>
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
</>
  );
}