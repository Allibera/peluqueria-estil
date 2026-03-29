import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primario pt-20 pb-8 text-white/60 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand (Takes 2 fractions logically in grid cols if we use explicit grid template, but simplified here) */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-[32px] font-bold tracking-tight text-white block mb-6">
              Peluquería <span className="text-acento">Estil</span>
            </a>
            <p className="max-w-md mb-8 leading-relaxed">
              Atelier de belleza artesanal en el centro de Tarragona. Llevamos desde 2012 sacando la mejor versión de tu cabello con técnicas vanguardistas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-acento hover:text-acento transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-acento hover:text-acento transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-acento hover:text-acento transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4 className="font-serif text-[20px] font-bold text-white mb-6 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="hover:text-acento transition-colors">Corte de pelo</a></li>
              <li><a href="#servicios" className="hover:text-acento transition-colors">Coloración</a></li>
              <li><a href="#servicios" className="hover:text-acento transition-colors">Balayage & Mechas</a></li>
              <li><a href="#servicios" className="hover:text-acento transition-colors">Tratamientos capilares</a></li>
              <li><a href="#servicios" className="hover:text-acento transition-colors">Peinados & Recogidos</a></li>
              <li><a href="#servicios" className="hover:text-acento transition-colors">Alisado orgánico</a></li>
            </ul>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <h4 className="font-serif text-[20px] font-bold text-white mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li><a href="tel:+34977123456" className="hover:text-acento transition-colors">+34 977 123 456</a></li>
              <li><a href="https://wa.me/34977123456" className="hover:text-acento transition-colors">WhatsApp</a></li>
              <li><span className="block mb-1 text-white/40text-[13px]">Dirección:</span>Rambla Nova 45, Tarragona</li>
              <li><span className="block mb-1 text-white/40 text-[13px]">Horario:</span>L-V: 9:00 - 20:00<br/>Sáb: 9:00 - 14:00</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white-[0.08] flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] border-white/10">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Peluquería Estil.</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span> Sistema activo</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
