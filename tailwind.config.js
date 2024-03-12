/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chronicaPro: ["Chronica Pro"],
        chronicaProBook: ["Chronica Pro Book"],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
};
