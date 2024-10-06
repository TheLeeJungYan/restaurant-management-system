/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        inter: ["inter"],
        nunito:["Nunito"]
      },
      colors: {
        primaryColor: "#AE2B00",
      },
      width: {
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};