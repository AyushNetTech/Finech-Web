/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        primary: "#2563EB",
        primarySoft: "#1E3A8A",
        darkBg: "#020617",
        darkBgSoft: "#020617cc",
        textLight: "#E5E7EB",
        textMuted: "#94A3B8",
        cardBg: "#020617",
        borderDark: "#1E293B",
        },
    },
  },
  plugins: [],
};