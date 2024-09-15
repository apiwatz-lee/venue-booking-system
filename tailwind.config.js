/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern:
        /bg-(red|blue|green|yellow|purple|pink|indigo|gray|orange|teal)-500/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
