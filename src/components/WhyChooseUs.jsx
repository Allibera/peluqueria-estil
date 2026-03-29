import React from 'react';
import { Target, Shield, Clock, RefreshCw } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: <Target className="w-6 h-6 text-acento" strokeWidth={1.5} />, title: "Consulta personalizada", desc: "Cada visita empieza con un análisis de tu cabello y de lo que buscas." },
    { icon: <Shield className="w-6 h-6 text-acento" strokeWidth={1.5} />, title: "Productos premium", desc: "Trabajamos con Wella, Schwarzkopf y marcas libres de amoniaco." },
    { icon: <Clock className="w-6 h-6 text-acento" strokeWidth={1.5} />, title: "Puntualidad garantizada", desc: "Tu tiempo es sagrado. Nunca esperas más de 5 minutos." },
    { icon: <RefreshCw className="w-6 h-6 text-acento" strokeWidth={1.5} />, title: "Seguimiento", desc: "Te enviamos consejos de mantenimiento adaptados al tratamiento." }
  ];

  return (
    <section className="py-24 bg-fondo overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Visual - Mobile First adjustments applied */}
          <div className="relative fade-up order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="bg-primario rounded-[8px] pb-[100%] md:pb-[80%] lg:pb-[125%] relative overflow-hidden shadow-suave">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-[1.03]" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80')" }}
               ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-primario/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-acento text-primario p-5 md:p-6 md:pr-8 rounded-[6px] shadow-fuerte flex items-end gap-3 z-10 fade-up hover:-translate-y-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
              <span className="font-serif text-[54px] md:text-[64px] leading-none font-bold">12+</span>
              <span className="font-sans font-bold tracking-[1.5px] uppercase text-[12px] md:text-sm pb-1.5 md:pb-2 leading-tight">Años de<br/>experiencia</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="fade-up order-1 lg:order-2">
            <span className="text-sm font-bold tracking-[2px] text-acento uppercase">Por qué Elegirnos</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-primario font-bold mt-4 leading-[1.15]">
              Más que una peluquería, un espacio para ti
            </h2>
            <div className="section-divider"></div>
            
            <div className="grid grid-cols-1 gap-8 mt-10 md:mt-12">
              {features.map((ft, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 fade-up group" style={{transitionDelay: `${idx * 0.1}s`}}>
                  <div className="w-14 h-14 rounded-full border border-borde bg-white flex items-center justify-center flex-shrink-0 group-hover:border-acento group-hover:shadow-[0_4px_16px_rgba(201,169,110,0.15)] transition-all duration-300">
                    {ft.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-primario text-lg mb-1.5 group-hover:text-acento transition-colors">{ft.title}</h3>
                    <p className="text-texto-suave text-[15px] leading-relaxed max-w-md">{ft.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
