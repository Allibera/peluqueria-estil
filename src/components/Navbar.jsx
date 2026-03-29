import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-[100] bg-fondo/95 backdrop-blur-md transition-all duration-300 border-b border-borde ${scrolled ? 'shadow-suave' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <a href="#" className="font-serif text-[26px] font-bold tracking-tight text-primario">
          Peluquería <span className="text-acento">Estil</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-texto">
          <a href="#servicios" className="hover:text-acento transition-colors">Servicios</a>
          <a href="#trabajos" className="hover:text-acento transition-colors">Trabajos</a>
          <a href="#equipo" className="hover:text-acento transition-colors">Equipo</a>
          <a href="#resenas" className="hover:text-acento transition-colors">Reseñas</a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+34977123456" className="px-5 py-2.5 rounded-[4px] border border-primario text-primario font-semibold hover:bg-primario hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
            <Phone size={18} strokeWidth={2} /> Llamar
          </a>
          <a href="#contacto" className="btn-primary">Reservar cita</a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-primario p-2 -mr-2" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {menuOpen && createPortal(
        <div className="md:hidden fixed inset-0 z-[9999] bg-fondo flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-300">
          
          {/* Overlay Header */}
          <div className="px-6 h-20 flex items-center justify-between border-b border-borde/50">
            <span className="font-serif text-[26px] font-bold tracking-tight text-primario">
              Peluquería <span className="text-acento">Estil</span>
            </span>
            <button className="text-primario p-2 -mr-2 bg-zinc-200/50 rounded-full hover:bg-zinc-200 transition-colors" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Overlay Content Centered */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8 pb-16">
            <div className="flex flex-col items-center gap-6 w-full">
              <a href="#servicios" className="font-serif text-[32px] text-primario hover:text-acento transition-colors" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#trabajos" className="font-serif text-[32px] text-primario hover:text-acento transition-colors" onClick={() => setMenuOpen(false)}>Trabajos</a>
              <a href="#equipo" className="font-serif text-[32px] text-primario hover:text-acento transition-colors" onClick={() => setMenuOpen(false)}>Equipo</a>
              <a href="#resenas" className="font-serif text-[32px] text-primario hover:text-acento transition-colors" onClick={() => setMenuOpen(false)}>Reseñas</a>
            </div>
            
            <div className="flex flex-col w-full gap-4 mt-6 max-w-[280px]">
              <a href="tel:+34977123456" className="px-6 py-3.5 rounded-[4px] border border-primario text-primario font-bold hover:bg-primario hover:text-white transition-all w-full flex items-center justify-center gap-2.5">
                <Phone size={20} strokeWidth={2.5} /> Llamar ahora
              </a>
              <a href="#contacto" className="btn-primary w-full flex justify-center py-3.5 text-[15px]" onClick={() => setMenuOpen(false)}>
                Reservar cita
              </a>
            </div>
          </div>
          
        </div>,
        document.body
      )}
    </nav>
  );
}
