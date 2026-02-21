/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        background: '#050505',
        surface: '#111111',
        primary: '#E5E5E5',
        muted: '#888888',
      }
    },
  },
  plugins: [],
}
