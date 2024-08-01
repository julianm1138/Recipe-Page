/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "young-serif": ["Young Serif", "serif"],
      },
      colors: {
        f3e5d8: "#f3e5d8",
        "834b64": "#834b64",
        fff7fc: "#fff7fc",
        "804a36": "#804a36",
      },
    },
  },

  plugins: [],
};
