/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        headerwidth: '84.65%',
        mainscreen: '68.7%',
        bannerscreen: '75.1%',
        mobilescreen: '88.4%',
        mainbanner: '57.1%',
      },
      color: {
        blacktext: '#18181B',
      }
    },
  },
  plugins: [],
}

