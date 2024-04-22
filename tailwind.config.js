/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nexa", "sans-serif"],
      vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      backdropBlur: { custom: "6px" },
      colors: {
        background: "var(--background)",
        glass: "var(--glass)",
        accent: "var(--accent)",
        "accent-secondary": "var(--accent-secondary)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        "gold-light": "var(--gold-light)",
        "gold-dark": "var(--gold-dark)",
        "gold-secondary": "var(--gold-secondary)",
        shadow: "var(--shadow)",
      },
      boxShadow: {
        custom: " 0 -10px 20px 10px var(--shadow)",
        "custom-sm": " 0px 0px 15px 0px var(--shadow)",
        btn: " 0px 0px 8px 4px var(--shadow)",
        "btn-main": " 0px 0px 8px 4px var(--shadow)",
        "btn-active": " 0px 0px 4px 2px var(--shadow)",
        card: " 0px 0px 6px 3px var(--shadow)",
        xp: " 0px 8px 4px -4px var(--shadow)",
      },
      padding: {
        26: "104px",
        28: "112px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
