const colors = require('./src/lib/tailwind/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false,
  theme: {
    colors: colors,
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    boxShadow: {
      DEFAULT:
        '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 13px 28px 0 rgba(0, 0, 0, 0.04)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
