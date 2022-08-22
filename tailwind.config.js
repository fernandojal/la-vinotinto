module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: {
        DEFAULT: '#FFF',
      },
      blue: {
        DEFAULT: '#00A8E8',
        light: '#007EA7',
        dark: '#003459',
        darker: '#00171F',
      },
      test: {
        DEFAULT: 'antiquewhite',
      },
    },
    fontFamily: {
      lato: ['Lato'],
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
      },
    },
  },
  variants: {
    extend: {
      backgroundPosition: ['hover'],
    },
  },
  plugins: [],
};
