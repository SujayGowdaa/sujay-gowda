/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['nexa', 'sans-serif'],
      vietnam: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        background: 'var(--background)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
      },
    },
  },
  plugins: [],
};
