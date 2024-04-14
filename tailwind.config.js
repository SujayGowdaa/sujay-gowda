/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['nexa', 'sans-serif'],
      vietnam: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      backdropBlur: { custom: '6px' },
      colors: {
        background: 'var(--background)',
        glass: 'var(--glass)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        shadow: 'var(--shadow)',
      },
      boxShadow: {
        custom: ' 0 -10px 20px 10px var(--shadow)',
        'custom-sm': ' 0px 0px 15px 0px var(--shadow)',
        btn: ' 0px 0px 8px 4px var(--shadow)',
        'btn-active': ' 0px 0px 4px 2px var(--shadow)',
      },
    },
  },
  plugins: [],
};
