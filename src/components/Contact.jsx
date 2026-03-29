import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, CalendarCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: '', telefono: '', servicio: 'Corte de pelo', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const txt = `Hola! Quiero reservar cita.%0A- Nombre: ${formData.nombre}%0A- Teléfono: ${formData.telefono}%0A- Servicio: ${formData.servicio}%0A- Mensaje: ${formData.mensaje}`;
    window.open(`https://wa.me/34977123456?text=${txt}`, '_blank');
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 bg-fondo">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Left */}
        <div className="max-w-2xl mb-16 fade-up">
          <span className="text-sm font-bold tracking-[2px] text-texto-suave uppercase">Reserva tu Cita</span>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] text-primario font-bold mt-4 leading-tight mb-4 tracking-tight">
            Hablemos, sin compromiso
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Data & Map */}
          <div className="fade-up space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="w-12 h-12 rounded bg-acento/10 flex items-center justify-center text-acento mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-sans font-bold text-primario mb-1">Teléfono</h3>
                <a href="tel:+34977123456" className="text-texto-suave hover:text-acento transition-colors">+34 977 123 456</a>
              </div>
              <div>
                <div className="w-12 h-12 rounded bg-acento/10 flex items-center justify-center text-acento mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="font-sans font-bold text-primario mb-1">WhatsApp</h3>
                <a href="https://wa.me/34977123456" className="text-texto-suave hover:text-acento transition-colors">Escríbenos ahora</a>
              </div>
              <div>
                <div className="w-12 h-12 rounded bg-acento/10 flex items-center justify-center text-acento mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-sans font-bold text-primario mb-1">Dirección</h3>
                <p className="text-texto-suave">Rambla Nova 45<br/>43004 Tarragona</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded bg-acento/10 flex items-center justify-center text-acento mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-sans font-bold text-primario mb-1">Horario</h3>
                <p className="text-texto-suave">L-V: 9:00 - 20:00<br/>Sábados: 9:00 - 14:00</p>
              </div>
            </div>

            <div className="w-full h-[280px] bg-borde rounded-[8px] overflow-hidden">
               {/* Embed de Google Maps real iframe se debe colocar aquí, sustituyendo el bg-color */}
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11986.72144349479!2d1.248231!3d41.1188827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3fdac995e87a5%3A0xe62e1281df8d95e0!2sRambla%20Nova%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1711204899581!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
               </iframe>
            </div>
          </div>

          {/* Form */}
          <div className="fade-up" style={{transitionDelay: '0.2s'}}>
            <div className="bg-white p-8 md:p-10 rounded-[8px] border border-borde shadow-suave">
              <h3 className="font-serif text-[32px] font-bold text-primario mb-8">Reservar cita</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primario uppercase tracking-wide mb-2">Nombre completo</label>
                  <input required type="text" className="w-full bg-fondo border border-borde roundedpx-4 py-3 focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-colors px-4" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} placeholder="Tu nombre" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-primario uppercase tracking-wide mb-2">Teléfono</label>
                  <input required type="tel" className="w-full bg-fondo border border-borde roundedpx-4 py-3 focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-colors px-4" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} placeholder="+34" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-primario uppercase tracking-wide mb-2">Servicio de interés</label>
                  <select className="w-full bg-fondo border border-borde roundedpx-4 py-3 focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-colors px-4 appearance-none" value={formData.servicio} onChange={e => setFormData({...formData, servicio: e.target.value})}>
                    <option>Corte de pelo</option>
                    <option>Coloración</option>
                    <option>Balayage & Mechas</option>
                    <option>Tratamientos</option>
                    <option>Peinados</option>
                    <option>Alisado permanente</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-primario uppercase tracking-wide mb-2">Mensaje (Opcional)</label>
                  <textarea rows="3" className="w-full bg-fondo border border-borde roundedpx-4 py-3 focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-colors resize-none px-4" value={formData.mensaje} onChange={e => setFormData({...formData, mensaje: e.target.value})} placeholder="¿Algún detalle que debamos saber?"></textarea>
                </div>
                
                <div className="pt-2">
                  <p className="text-[12px] text-texto-suave mb-4">Al enviar este formulario, te redirigiremos a WhatsApp para confirmar los detalles finales de tu cita.</p>
                  <button type="submit" className="w-full btn-primary text-base py-4 flex items-center justify-center gap-2.5">
                    <CalendarCheck size={20} strokeWidth={2.5} /> Quiero reservar mi cita
                  </button>
                  {enviado && <p className="text-[#25D366] font-semibold text-center mt-4">Redirigiendo a WhatsApp...</p>}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
