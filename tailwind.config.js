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
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     'top2xl': '0 0 50px -15px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fontSize: {
      'big': '2rem',
    },
    extend: {
      backgroundImage: theme => ({
        'top-hero': "url('../public/bg.png')",
        'hero1': "url('../public/bg1.svg')",
        'hero2': "url('../public/bg2.svg')",
        'hero3': "url('../public/bg3.svg')",
        'specialCard1': "url('../public/sc1.svg')",
        'specialCard2': "url('../public/sc2.svg')",
      }),
      backgroundOpacity: {
        '85': '0.85',
      },
      width: {
        '424p': '26.5rem',
      },
      height: {
        '82': '21.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
