/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(100%)"},
          to:{transform:"translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
}

