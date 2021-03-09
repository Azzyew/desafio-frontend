module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['Acme', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#197ACF',
      'secondary': '#1A8DE9',
      'pale': '#96DCFA',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'pale': '#96DCFA',
      'bright': '#197ACF',
    }),
    borderWidth: {
      DEFAULT: '1px',
      '0.5': '0.5px',
    },
    extend: {
      backgroundImage: theme => ({
        'top-hero': "url('../public/bg.png')",
        'hero1': "url('../public/bg1.svg')",
        'hero2': "url('../public/bg2.svg')",
        'hero3': "url('../public/bg3.svg')",
        'specialCard1': "url('../public/sc1.svg')",
      }),
      backgroundOpacity: {
        '85': '0.85',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
