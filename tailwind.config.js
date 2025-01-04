/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      coxs: "375px",
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      maxsm: { max: "575.5px" },
      mx: { min: "576px", max: "991.5px" },
      "max-md": { max: "767.5px" },
      "max-lg": { max: "991.5px" },
    },
    extend: {
      spacing: {
        "77px": "77px",
      },
      colors: {
        primary: "#272821",
        pinky: "#F62C73",
      },
      fontFamily: {
        family: "Poppins",
      },
      secondary: {},
    },
  },
  plugins: [],
};
