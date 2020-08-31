const {colors, maxWidth} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: false,
    content: [
      './_layouts/**/*.html',
      './**/*.md'
    ],
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1620px',
      // => @media (min-width: 1620px) { ... }
    },
    fontFamily: {
      sans: ['Inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont',
        'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica', 'Neue', 'sans-serif']
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
    },
    extend: {
      spacing: {
	'0': '0',
        '0.5': '0.125rem',
 	'1': '0.25rem',
	'2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
	'11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
	'16': '4rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '34': '8.5rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '30rem',
	'64': '16rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '110': '28rem',
        '118': '30rem',
        '126': '32rem',
        '132': '34rem',
        '140': '36rem',
      },
      maxWidth: {
        ...maxWidth,
        '7xl': '80rem',
        '8xl': '88rem'
      },
      lineHeight: {
        'hairline': '1.1'
      },
      colors: {
        blue: {
          ...colors.blue,
          '150': '#A7D8F6',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderRadius: ['active'],
    outline: ['focus', 'responsive', 'hover', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    sticky: ['responsive'],
    zIndex: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'active',
      'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
