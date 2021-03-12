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
     'top2xl': '0 0 50px -15px rgba(0, 0, 0, 0.25)',
      none: 'none',
    },
    fontSize: theme => ({
      'xs': '.75rem',
      'sm': '.875rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      'big': '2rem',
      '4xl': '2.25rem',
    }),
    extend: {
      backgroundImage: theme => ({
        'top-hero': "url('../public/bg.png')",
        'hero1': "url('../public/bg1.svg')",
        'hero2': "url('../public/bg2.svg')",
        'hero3': "url('../public/bg3.svg')",
        'hero4': "url('../public/bg4.svg')",
        'hero5': "url('../public/bg5.svg')",
        'hero6': "url('../public/bg6.svg')",
        'hero7': "url('../public/bg7.svg')",
        'hero8': "url('../public/bg8.svg')",
        'hero9': "url('../public/bg9.svg')",
        'hero10': "url('../public/bg10.svg')",
        'hero11': "url('../public/bg11.svg')",
        'hero12': "url('../public/bg12.svg')",
        'specialCard1': "url('../public/sc1.svg')",
        'specialCard2': "url('../public/sc2.svg')",
      }),
      backgroundOpacity: {
        '85': '0.85',
      },
      width: {
        '424p': '26.5rem',
        '82': '21rem',
        '62': '15.5rem',
        '440': '27.5rem',
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
