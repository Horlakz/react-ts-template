/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#ffa500",
        info: "#3498db",
        danger: "#e74c3c",
        success: "#2ecc71",
        warning: "#f39c12",
      },
    },
  },
  plugins: [],
};
