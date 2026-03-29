import React from 'react';
import { Scissors, Palette, Sparkles, Droplet, Crown, Wind } from 'lucide-react';

export default function Services() {
  const servicios = [
    { icon: <Scissors className="text-acento" size={32} strokeWidth={1.5} />, nombre: "Corte de pelo", desc: "Asesoramiento de visagismo y corte adaptado a tu estilo.", precio: "18€" },
    { icon: <Palette className="text-acento" size={32} strokeWidth={1.5} />, nombre: "Coloración", desc: "Color permanente o baño de brillo con productos orgánicos.", precio: "35€" },
    { icon: <Sparkles className="text-acento" size={32} strokeWidth={1.5} />, nombre: "Balayage & Mechas", desc: "Técnicas avanzadas para luz natural y multireflejos.", precio: "65€" },
    { icon: <Droplet className="text-acento" size={32} strokeWidth={1.5} />, nombre: "Tratamientos", desc: "Keratina, hidratación profunda y botox capilar.", precio: "45€" },
    { icon: <Crown className="text-acento" size={32} strokeWidth={1.5} />, nombre: "Peinados & Recogidos", desc: "Para novias, invitadas y eventos especiales.", precio: "30€" },
    { icon: <Wind className="text-acento" size={32} strokeWidth={1.5} />, nombre: "Alisado permanente", desc: "Alisado orgánico sin formol para un lacio perfecto.", precio: "80€" }
  ];

  return (
    <section id="servicios" className="py-24 bg-fondo overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Left */}
        <div className="max-w-2xl mb-12 md:mb-16 fade-up">
          <span className="text-sm font-bold tracking-[2px] text-texto-suave uppercase">Nuestros Servicios</span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-primario font-bold mt-4 leading-[1.1]">
            Todo lo que tu cabello necesita
          </h2>
          <div className="section-divider"></div>
          <p className="text-texto-suave text-[17px] md:text-lg font-sans">
            Combinamos las últimas técnicas con mimos exclusivos para cada tipo de cabello. Descubre lo que podemos hacer por ti.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicios.map((srv, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white border border-borde rounded-[8px] p-6 md:p-8 fade-up transition-all duration-300 ease-custom-ease hover:shadow-fuerte hover:-translate-y-1 overflow-hidden"
              style={{transitionDelay: `${idx * 0.1}s`}}
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-acento transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-custom-ease"></div>
              
              <div className="mb-6 w-14 h-14 bg-acento/10 rounded-[6px] flex items-center justify-center group-hover:bg-acento/20 transition-colors">
                 {srv.icon}
              </div>
              <h3 className="font-serif text-[22px] font-bold text-primario mb-3">{srv.nombre}</h3>
              <p className="text-texto-suave text-[15px] leading-relaxed mb-8 min-h-[60px]">{srv.desc}</p>
              
              <div className="flex items-center justify-between border-t border-borde pt-5">
                <div className="text-acento font-semibold font-sans tracking-wide">
                  <span className="text-texto-suave text-[11px] font-bold uppercase mr-1.5 tracking-wider">Desde</span>
                  <span className="text-lg">{srv.precio}</span>
                </div>
                <a href="#contacto" className="text-primario text-sm font-bold hover:text-acento transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-acento">
                  Reservar &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
