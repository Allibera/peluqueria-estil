import React from 'react';
import { CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-primario flex items-center overflow-hidden">
      
      {/* Real Salon Interior Photo — blurred so it reads as ambient background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/salon-hero.png')",
          filter: 'blur(4px) brightness(0.4)',
          transform: 'scale(1.08)'
        }}
      ></div>

      {/* Semi-transparent overlay — darker for moody atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-primario/55 via-primario/45 to-primario/70"></div>
      {/* Extra horizontal gradient on desktop to keep left side readable */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primario/30 via-transparent to-primario/20"></div>

      {/* Decorative accent line (Desktop only) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-acento/15"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full fade-up pb-10 pt-20 lg:py-0">
        <div className="max-w-[800px]">
          <div className="badge-gold mb-8 shadow-suave">
            ✦ Peluquería en Tarragona desde 2012
          </div>
          
          <h1 className="font-serif text-white text-[clamp(42px,9vw,80px)] leading-[1.05] mb-6 tracking-tight drop-shadow-md">
            Tu look, tu <em className="italic text-acento font-serif pr-2">identidad.</em><br/>
            Tu peluquería en Tarragona
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-sans mb-10 max-w-[600px] font-light leading-relaxed drop-shadow-sm">
            Cortes, color y tratamientos con técnicas actualizadas y productos premium. Más de 900 clientes felices en el centro de Tarragona.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16 lg:mb-20">
            <a href="#contacto" className="btn-primary w-full sm:w-auto h-[54px] gap-2.5"><CalendarCheck size={20} strokeWidth={2} /> Reservar cita ahora</a>
            <a href="https://wa.me/34977123456" className="h-[54px] w-full sm:w-auto px-6 rounded-[4px] border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5 shadow-sm backdrop-blur-sm bg-primario/30"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Escribir por WhatsApp</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 pt-8 md:pt-10 border-t border-white/20 w-full max-w-[800px]">
            <div className="fade-up flex flex-col items-center text-center px-4" style={{transitionDelay: "0.1s"}}>
              <div className="font-serif text-acento text-[40px] md:text-[46px] font-bold mb-1 drop-shadow-sm leading-none">4.9★</div>
              <div className="text-white/70 text-[11px] md:text-sm uppercase tracking-[2px] font-bold leading-tight mt-3">127 reseñas en Google</div>
            </div>
            <div className="fade-up flex flex-col items-center text-center px-4 sm:border-x border-white/10" style={{transitionDelay: "0.2s"}}>
              <div className="font-serif text-acento text-[40px] md:text-[46px] font-bold mb-1 drop-shadow-sm leading-none">12+</div>
              <div className="text-white/70 text-[11px] md:text-sm uppercase tracking-[2px] font-bold leading-tight mt-3">Años de experiencia</div>
            </div>
            <div className="fade-up flex flex-col items-center text-center px-4" style={{transitionDelay: "0.3s"}}>
              <div className="font-serif text-acento text-[40px] md:text-[46px] font-bold mb-1 drop-shadow-sm leading-none">900+</div>
              <div className="text-white/70 text-[11px] md:text-sm uppercase tracking-[2px] font-bold leading-tight mt-3">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
