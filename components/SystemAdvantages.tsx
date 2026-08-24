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
                <h2 className="font-mono text-xl font-bold uppercase tracking-[0.14em] text-white sm:text-base"> 
                  VENTAJAS DEL SISTEMA
                </h2>   
 
              </div> 
 
              <span className="hidden pt-2 text-[12px] font-mono uppercase tracking-[0.18em] text-primary-light md:block"> 
                [ MÉTRICAS ]
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Eficiencia de Combustible
              </h3> 
 
              <p className="text-xs font-sans leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                Los motores optimizados ofrecen máxima potencia con un menor consumo de combustible y reducen los costos operativos.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Funcionamiento Silencioso
              </h3> 
 
              <p className=" font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                El diseño avanzado de la cubierta reduce el ruido para ofrecer un funcionamiento cómodo y silencioso.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Energía Confiable
              </h3> 
 
              <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                Suministro de energía estable e ininterrumpido para hogares, industrias y empresas.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Diseño de Alta Resistencia
              </h3> 
 
              <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                Fabricado con componentes duraderos para funcionar en condiciones exigentes.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Mantenimiento Sencillo
              </h3> 
 
              <p className="text-xs font-sans leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                El diseño fácil de usar simplifica el mantenimiento y reduce el tiempo de inactividad.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Bajo Costo Operativo
              </h3> 
 
              <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                Rendimiento eficiente con menores gastos de mantenimiento y operación.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Refrigeración Avanzada
              </h3> 
 
              <p className=" font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                El sistema de refrigeración eficiente garantiza un funcionamiento confiable en todas las condiciones.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Salida de Energía Estable
              </h3> 
 
              <p className="font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                El voltaje y la frecuencia constantes protegen sus equipos eléctricos.
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
 
              <h3 className="font-display mb-3 text-base font-black uppercase tracking-wide text-white sm:text-lg"> 
                Funcionamiento Continuo
              </h3> 
 
              <p className=" font-sans text-xs leading-6 text-white/65 sm:text-sm sm:leading-6"> 
                Diseñado para largas horas de rendimiento industrial confiable.
              </p> 
            </div> 
 
          </div> 
        </div> 
      </section> 
    </> 
  ); 
}