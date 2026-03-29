export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: 'var(--color-primario)',
        acento: 'var(--color-acento)',
        'acento-claro': 'var(--color-acento-claro)',
        fondo: 'var(--color-fondo)',
        texto: 'var(--color-texto)',
        'texto-suave': 'var(--color-texto-suave)',
        borde: 'var(--color-borde)',
        cream: 'var(--color-cream)',
        blanco: 'var(--color-blanco)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'suave': '0 4px 24px rgba(0,0,0,0.08)',
        'fuerte': '0 8px 40px rgba(0,0,0,0.15)',
        'acento-hover': '0 8px 24px rgba(201,169,110,0.4)',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
