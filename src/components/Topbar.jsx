import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="hidden md:flex bg-primario text-white/75 text-sm py-2 px-6 justify-between items-center transition-colors font-sans">
      <div>Lun–Vie 9:00–20:00 · Sáb 9:00–14:00</div>
      <div className="flex items-center gap-6">
        <a href="tel:+34977123456" className="flex items-center gap-2 hover:text-acento transition-colors"><Phone size={14}/> +34 977 123 456</a>
        <a href="https://wa.me/34977123456" className="hover:text-acento transition-colors">WhatsApp</a>
        <span className="flex items-center gap-2"><MapPin size={14}/> Rambla Nova 45, Tarragona</span>
      </div>
    </div>
  );
}
