/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        mainBlackColor: "#1f1f1f",
        grayTextColor: "#d1d1d1",
        grayHeader:"#545454"
      },
    },
  },
  plugins: [
  ],
};
