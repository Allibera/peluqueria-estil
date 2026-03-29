import React from 'react';
import { Star, Scissors, Palette, MapPin, Zap } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <Star size={18} fill="currentColor" />, text: "4.9 en Google · 127 reseñas" },
    { icon: <Scissors size={18} strokeWidth={2.5} />, text: "+12 años de experiencia" },
    { icon: <Palette size={18} strokeWidth={2.5} />, text: "Especialistas en color y mechas" },
    { icon: <MapPin size={18} strokeWidth={2.5} />, text: "Centro de Tarragona" },
    { icon: <Zap size={18} fill="currentColor" />, text: "Cita disponible esta semana" }
  ];

  return (
    <div className="bg-acento py-4 md:py-5 px-6 fade-up">
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 md:gap-x-12 w-full max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="text-primario font-sans font-semibold text-[13px] md:text-[15px] flex items-center gap-2 whitespace-nowrap">
            <span className="text-primario opacity-80">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
