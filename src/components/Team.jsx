import React from 'react';

export default function Team() {
  const team = [
    { 
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80", 
      nombre: "María García", 
      rol: "Directora & Colorista", 
      desc: "Especialista en técnicas de mechas estructuradas y visagismo facial." 
    },
    { 
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80", 
      nombre: "Carlos López", 
      rol: "Especialista en Corte", 
      desc: "Apasionado por las formas y texturas. Creador de estilos únicos cortados a seco." 
    },
    { 
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80", 
      nombre: "Ana Martínez", 
      rol: "Técnica en Tratamientos", 
      desc: "Experta en salud capilar. Revive el cabello maltratado con alquimia orgánica." 
    }
  ];

  return (
    <section id="equipo" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Center */}
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
          <span className="text-[13px] font-bold tracking-[2.5px] text-texto-suave uppercase">Nuestro Equipo</span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-primario font-bold mt-4 leading-[1.1]">
            Las manos detrás de cada look
          </h2>
          <div className="section-divider mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
          {team.map((miembro, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group fade-up px-4" style={{transitionDelay: `${idx * 0.1}s`}}>
              <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-[3px] border-borde p-1 mb-6 transition-all duration-300 ease-custom-ease group-hover:border-acento group-hover:scale-[1.03] group-hover:shadow-[0_8px_30px_rgba(201,169,110,0.2)] bg-white object-cover">
                <div className="w-full h-full rounded-full overflow-hidden bg-cover bg-center" style={{backgroundImage: `url('${miembro.foto}')`}}></div>
              </div>
              <h3 className="font-serif text-[26px] font-bold text-primario mb-1">{miembro.nombre}</h3>
              <div className="text-acento font-bold text-[12px] uppercase tracking-[1.5px] mb-4">{miembro.rol}</div>
              <p className="text-texto-suave text-[15px] leading-relaxed max-w-[280px]">
                {miembro.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
