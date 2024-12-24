/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/src/image/bg-header-mobile.png')",
        'bg-image2': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

