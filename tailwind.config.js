/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b1d33',     // Deep navy institutional
          primary: '#0f355c',  // Core union blue
          lightBlue: '#1d5a9b',
          accent: '#e69500',   // Warm vibrant sun/gold (etno-identity)
          gold: '#f59e0b',
          red: '#dc2626',      // Alert / Mobilization red
          green: '#15803d',    // Territory / Nature emerald
          sand: '#fcfaf6',     // Warm textured background
          surface: '#f4f6f8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
