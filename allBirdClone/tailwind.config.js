module.exports = {
  darkMode: 'class',

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/banner1.jpg')",
        // You can add more custom background images here
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
}