import React from 'react';

export default function Reviews() {
  const reviews = [
    { inicial: "M", nombre: "Marta Gómez", estrellas: "★★★★★", fecha: "hace 2 semanas", texto: "El mejor balayage que me han hecho nunca. Entendieron perfectamente lo que quería y el trato fue exquisito." },
    { inicial: "L", nombre: "Laura Sánchez", estrellas: "★★★★★", fecha: "hace 1 mes", texto: "Llevo viniendo a Estil desde que abrieron. Son verdaderos profesionales. Productos de 10 y un ambiente muy relajante." },
    { inicial: "C", nombre: "Carmen Ruiz", estrellas: "★★★★★", fecha: "hace 2 meses", texto: "Tratamiento de hidratación espectacular. El masaje capilar que te dan durante el lavado es otro nivel. ¡Recomendadísimo!" }
  ];

  return (
    <section id="resenas" className="py-24 bg-fondo">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16 border-b border-borde pb-10 fade-up">
          <div>
            <h2 className="font-serif text-[clamp(40px,5vw,64px)] text-primario font-bold leading-[1.1]">
              Lo que dicen<br/>nuestros clientes
            </h2>
          </div>
          <div className="flex items-center gap-6 lg:justify-end">
            <div className="font-serif text-[64px] text-acento font-bold leading-none">4.9</div>
            <div>
              <div className="text-acento text-[24px] tracking-widest mb-1">★★★★★</div>
              <div className="text-texto-suave text-sm font-semibold uppercase tracking-wider">Basado en 127 reseñas de Google</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white border border-borde rounded-[6px] p-8 fade-up transition-shadow duration-300 hover:shadow-suave" style={{transitionDelay: `${idx * 0.1}s`}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center font-serif text-xl font-bold text-primario">
                  {rev.inicial}
                </div>
                <div>
                  <div className="font-sans font-bold text-primario">{rev.nombre}</div>
                  <div className="text-xs text-texto-suave mt-0.5">{rev.fecha}</div>
                </div>
              </div>
              <div className="text-acento tracking-widest mb-4">{rev.estrellas}</div>
              <p className="text-texto italic text-[15px] leading-relaxed">
                "{rev.texto}"
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center fade-up mt-8">
          <a href="#" className="inline-flex items-center text-acento font-bold tracking-wide hover:text-primario transition-colors pb-1 border-b-[1.5px] border-acento hover:border-primario">
            Ver todas las reseñas en Google Maps &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
