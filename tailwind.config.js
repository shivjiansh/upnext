/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8F1720',
          black: '#0A0A0A',
          offWhite: '#F7F6F3',
          gray: '#E8E8E8',
          slate: '#71717A'
        }
      },
      boxShadow: {
        premium: '0 24px 80px -24px rgba(143, 23, 32, 0.35)'
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }]
      }
    }
  },
  plugins: []
};
