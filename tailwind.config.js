module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true',
    content: [
      "./apps/**/*.{html,ts,scss}",
      "./libs/**/*.{html,ts,scss}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
