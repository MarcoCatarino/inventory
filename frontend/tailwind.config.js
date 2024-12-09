/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inactive: "#AF7B39", // Color para elementos inactivos
        active: "#000000", // Color para botones activos o texto oscuro
        secondaryText: "#757575", // Color de texto secundario
      },
    },
  },
  plugins: [],
};
