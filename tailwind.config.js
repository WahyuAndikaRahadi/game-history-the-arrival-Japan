/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Contoh font kustom untuk judul jika ada (misal: dari Google Fonts)
        // 'historical': ['"Playfair Display"', 'serif'],
        // 'script': ['"Dancing Script"', 'cursive'],
      },
      colors: {
        // Palet warna historis yang terinspirasi
        'antique-gold': '#B8860B',
        'parchment': '#F5DEB3',
        'deep-blue': '#1A237E',
        'forest-green': '#228B22',
        'rust-red': '#B0413E',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'bounce-slow': 'bounceSlow 3s infinite',
        'pulse-glow': 'pulseGlow 2s infinite alternate', // Untuk mahkota
        'slide-up-fade': 'slideUpFade 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 5px rgba(255,215,0,0.5))' },
          '50%': { transform: 'scale(1.05)', filter: 'drop-shadow(0 0 15px rgba(255,215,0,0.8))' },
        },
        slideUpFade: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
          'spin-slow': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }

      }
    },
  },
  plugins: [],
}