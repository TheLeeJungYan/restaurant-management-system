/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        inter: ["inter"],
        nunito: ["Nunito"],
      },
      colors: {
        primaryColor: "#AE2B00",
      },
      width: {
        22: "5.5rem",
        112: "28rem",
      },
      minWidth:{
        22: "5.5rem",
        112: "28rem",
      },
      zIndex: {
        100: 100,
        200: 200,
      },
    },
  },
  plugins: [],
};
