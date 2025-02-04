/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Theme-Pink" : "#E4736D"
      },
      borderWidth: {
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
      },
      boxShadow: {
        dark: "0 35px 60px -15px rgba(0, 0, 0, 0.5)",
        "dark-2": "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
        "dark-3": "1.5px 1.5px 3px 1px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xsm: "300px",
        // => @media (min-width: 300px) { ... }
      },
      letterSpacing: {
        'xwide':'0.15em',
        '2xwidest':'0.18em',
        '3xwidest':'0.25em',
      },
      content:{
        'shadow':"url('./src/assets/images/shadow.png')" 
      },
    },
  },
  plugins: [],
};
