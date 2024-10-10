const postcssJitProps = require("postcss-jit-props");
const openProps = require("open-props");
const autoPrefixer = require("autoprefixer");

module.exports = {
  plugins: [
    postcssJitProps(openProps),
    autoPrefixer
  ],
};
