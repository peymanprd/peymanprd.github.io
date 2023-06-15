/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.md',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0AE395',
        high: '#0AE3E3',
        neutral: {
          850: '#1C1C1C',
        },
        band: '#282828',
      },
      fontSize: {
        title: '56px',
        subtitle: '36px',
        body: '18px',
        '2sm': '15px',
        '3sm': '13px',
        '2xs': '10px',
      },
      blur: {
        max: '282px',
        '2max': '380px',
      },
    },
  },
  plugins: [],
}
