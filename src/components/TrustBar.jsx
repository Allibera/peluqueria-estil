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
    <div className="bg-acento py-3.5 relative overflow-hidden flex items-center border-y border-primario/5">
      {/* Decorative gradient masks for a smooth fade on the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-acento to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-acento to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render items twice for a seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 px-8 md:px-12 text-primario font-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider">
            <span className="text-primario flex-shrink-0 opacity-90">{item.icon}</span>
            <span className="whitespace-nowrap">{item.text}</span>
            <span className="ml-8 md:ml-12 text-primario/30 font-serif italic text-lg opacity-40 select-none">✦</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
