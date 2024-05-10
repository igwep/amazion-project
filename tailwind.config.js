/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "tablet": "2900px",
        "smalls": "709px",
        "another": "900px"
      },
      colors:{
        'amazon-blue': '#131921'
      }
    },
  },
  plugins: [],
}

