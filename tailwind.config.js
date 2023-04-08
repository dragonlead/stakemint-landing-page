/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#191e29",
        secondary: "#01c38d",
        myToggle: "#4ED938",
      },
      backgroundImage: {
        graphLG: "url('/src/assets/bg1.png')",
        graphSM: "url('/src/assets/bg1sm.png')",
        mood: "url('/src/assets/earnpage_cyborgmood.png')",
      },
      fontFamily: {
        commonsRegular: ["Commons-Regular", "sans-serif"],
        commonsDemiBold: ["Commons-DemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
