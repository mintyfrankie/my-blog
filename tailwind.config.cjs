const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      accent: {
        50: '#f3f8fa',
        100: '#e9f1f6',
        200: '#d8e4ed',
        300: '#bfd2e2',
        400: '#a5bad4',
        500: '#96aaca',
        600: '#7689b5',
        700: '#64749e',
        800: '#536080',
        900: '#475268',
        950: '#2a303c',
      },
    },
  },
  plugins: [],
}
