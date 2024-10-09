/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gri: "#434343",
      },

      fontFamily: {
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};
