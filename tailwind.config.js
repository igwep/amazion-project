/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "tablet": "2900px",
        "smalls": "909px",
        "another": "900px",
        "and":"800",
        "again":"1700px"
      },
      colors:{
        'amazon-blue': '#131921'
      }
    },
  },
  plugins: [],
}

