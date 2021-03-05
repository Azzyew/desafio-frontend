module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['Acme', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'top-hero': "url('../public/bg.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
