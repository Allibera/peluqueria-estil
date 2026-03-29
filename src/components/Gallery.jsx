import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function Gallery() {
  const photos = [
    { title: "Corte Bob Texturizado + Balayage", url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80" },
    { title: "Tratamiento Keratina", url: "/tratamiento-keratina.png" },
    { title: "Coloración", url: "/coloracion.png" },
    { title: "Recogido Boda", url: "/recogido-boda.png" }
  ];

  return (
    <section id="trabajos" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Left */}
        <div className="max-w-2xl mb-12 md:mb-16 fade-up">
          <span className="text-sm font-bold tracking-[2px] text-texto-suave uppercase">Nuestros Trabajos</span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-primario font-bold mt-4 leading-[1.1]">
            El resultado habla por sí solo
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-16">
          
          {/* Main Feature - Split Before/After High Quality */}
          <div className="col-span-2 relative bg-primario rounded-[8px] overflow-hidden group fade-up flex flex-col md:flex-row h-[500px] lg:h-auto min-h-[400px]">
            {/* Before (Left side) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-zinc-800">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-95 saturate-75 contrast-125" style={{backgroundImage: "url('/blonde-before.png')"}}></div>
               <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white/90 text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-[4px] border border-white/10 z-10">
                 Antes
               </div>
            </div>
            {/* Divider Line */}
            <div className="absolute top-1/2 md:top-0 left-0 md:left-1/2 w-full md:w-[2px] h-[2px] md:h-full bg-acento z-20 flex items-center justify-center -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2">
                <div className="bg-acento text-primario rounded-full p-1.5 md:p-2 shadow-fuerte shadow-black/40">
                    <ArrowLeftRight size={16} strokeWidth={3} className="rotate-90 md:rotate-0" />
                </div>
            </div>
            {/* After (Right side) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-zinc-900">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('/blonde-after.png')"}}></div>
               <div className="absolute top-4 right-4 bg-acento text-primario text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-[4px] shadow-suave z-10">
                 Después
               </div>
               
              {/* Hover Title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primario/90 via-primario/40 to-transparent p-5 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-custom-ease z-10 flex flex-col justify-end">
                <span className="text-acento font-bold tracking-[2px] uppercase text-[10px] md:text-[12px] mb-1.5 md:mb-2">Tratamiento Completo</span>
                <span className="text-white font-serif text-[20px] md:text-[28px] font-bold leading-tight">Alisado Keratina</span>
                <span className="hidden md:block text-white/60 text-[14px] mt-2 font-sans">Cabello dañado recuperado con keratina, aportando máximo brillo y suavidad</span>
              </div>
            </div>
          </div>

          {/* Other grid photos */}
          {photos.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative bg-zinc-200 rounded-[8px] overflow-hidden group fade-up aspect-[3/4] md:aspect-[4/5]`}
              style={{transitionDelay: `${(idx + 1) * 0.1}s`}}
            >
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style={{backgroundImage: `url('${item.url}')`}}></div>
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primario/90 via-primario/40 to-transparent pt-12 pb-4 px-3 md:pt-16 md:pb-6 md:px-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-custom-ease flex items-end">
                <span className="text-white text-[11px] md:text-[13px] font-semibold tracking-wide md:tracking-wider uppercase border-l-2 border-acento pl-2 md:pl-3 leading-snug drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="text-center fade-up mt-8">
          <a href="#" className="inline-flex items-center text-primario font-bold tracking-[2px] uppercase text-sm hover:text-acento transition-colors pb-1.5 border-b-2 border-acento">
            Ver más en Instagram &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
