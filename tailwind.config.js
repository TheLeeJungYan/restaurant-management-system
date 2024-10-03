/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        inter: ["inter"],
      },
      colors: {
        primaryColor: "#AE2B00",
      },
    },
  },
  plugins: [],
};
