import React from 'react';
import { CalendarCheck, Phone } from 'lucide-react';

export default function HowToBook() {
  const steps = [
    { num: "1", titulo: "Elige tu servicio", desc: "Revisa nuestra lista de servicios y elige el que necesitas." },
    { num: "2", titulo: "Escríbenos", desc: "Contáctanos por formulario, WhatsApp o una simple llamada." },
    { num: "3", titulo: "¡Listo!", desc: "Confirmaremos tu cita al momento. Así de simple." }
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-acento/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="badge-gold mb-6 mt-2">RESERVA EN 2 MINUTOS</div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-primario font-bold leading-tight">
            Así de fácil es conseguir tu cita
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-20">
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-px bg-acento/30"></div>
          
          {steps.map((paso, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center fade-up" style={{transitionDelay: `${idx * 0.15}s`}}>
              <div className="w-[64px] h-[64px] rounded-full bg-primario text-acento flex items-center justify-center font-serif text-[28px] font-bold mb-6 z-10 shadow-[0_8px_30px_rgba(28,28,30,0.15)] ring-4 ring-cream">
                {paso.num}
              </div>
              <h3 className="font-serif text-[22px] font-bold text-primario mb-3">{paso.titulo}</h3>
              <p className="text-texto-suave text-[15px] leading-relaxed max-w-[280px]">
                {paso.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 fade-up pt-8">
          <a href="#contacto" className="btn-primary min-w-[240px] flex items-center justify-center gap-2.5">
            <CalendarCheck size={20} strokeWidth={2} /> Reservar por formulario
          </a>
          <a href="https://wa.me/34977123456" className="btn-whatsapp min-w-[240px] flex items-center justify-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Reservar por WhatsApp
          </a>
          <a href="tel:+34977123456" className="btn-outline min-w-[240px] flex items-center justify-center gap-2.5">
            <Phone size={20} strokeWidth={2} /> Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
