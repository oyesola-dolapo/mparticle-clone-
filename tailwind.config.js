/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "750px",
      lg: "976px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "#2C2D2B",
        secondaryColor: "#D3FA85",
        grayBg: "#212529",
      },
    },
  },
  plugins: [],
};
