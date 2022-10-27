/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "darkForest": "#002828",
        "clover": "#004F4F",
        "pine": "#007377",
        "jungle": "#009B97",
        "seafom": "#00C1C1",
        "pistachio": "#B8E1DC",
        "ice": "#E0F6F3",
        "amarant": "#EF3F4C",
        "salmon": "#FFCCCC",
        "grey": {
          300: '#282828',
          200: '#6D6D6D',
          100: '#8F8F8F'
        },
        "goldGrey": "#B1B1B1",
        "Grey": {
          100: '#D3D3D3',
          200: '#E8E8E8',
          300: '#F5F5F5'
        },
        "coconut": '#FAFAFA'
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
    //require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}