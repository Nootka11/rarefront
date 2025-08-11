/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'multi-gradient': 'linear-gradient(to right, \
          var(--color-verde-pistacho) 0%, \
          var(--color-fondo-claro) 10%, \
          var(--color-rosa-fresa) 30%, \
          var(--color-fondo-claro) 50%, \
          var(--color-verde-noche) 70%, \
          var(--color-fondo-claro) 90%, \
          var(--color-verde-calma) 100%)'
      },
      colors: {
        // Tu paleta personalizada
        primary: {
          DEFAULT: '#1E40AF',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        secondary: '#FBBF24',
        accent: '#10B981',
        neutral: '#F3F4F6',
        

      }
    },
  },
  plugins: [
   
   ],
}
