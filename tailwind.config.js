/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
        'inter-display': ['"Inter Display"', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#1a3d2e',
          'green-dark': '#153225',
        },
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        'shiny-text': {
          '0%, 90%, 100%': {
            backgroundPosition: 'calc(-100% - var(--shiny-width)) 0',
          },
          '30%, 60%': {
            backgroundPosition: 'calc(100% + var(--shiny-width)) 0',
          },
        },
      },
      animation: {
        'shiny-text': 'shiny-text 8s infinite',
      },
    },
  },
  plugins: [],
}
