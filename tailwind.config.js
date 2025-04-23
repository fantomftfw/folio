/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        primary: {
          DEFAULT: '#474747',
          light: '#B2B2B2',
        },
        secondary: '#4B4F50',
        accent: {
          teal: '#8BDEDA',
          blue: '#43ADD0',
          purple: '#998EE0',
          pink: '#E17DC2',
          red: '#EF9393',
          orange: '#FD7836',
        },
        element: {
          bg: '#F6F6F6',
          border: '#CDCFD0',
        }
      },
      fontFamily: {
        'special-gothic': ['Special Gothic Expanded One', 'sans-serif'],
        'red-hat': ['Red Hat Display', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'nav-active': '0px 3px 0px 0px rgba(253, 120, 54, 1), inset 0px 2px 0px 0px rgba(255, 255, 255, 0.25)',
        'nav-default': '0px 2px 0px 0px rgba(0, 0, 0, 0.25), inset 0px 2px 0px 0px rgba(255, 255, 255, 0.25)',
        'button': '0px 3px 0px 0px rgba(0, 0, 0, 0.25), inset 0px 2px 0px 0px rgba(255, 255, 255, 0.25)',
      },
      fontSize: {
        'heading-xl': '64px',
        'heading-lg': '32px',
        'nav': '16px',
      },
      lineHeight: {
        'heading': '1.3',
      },
      backgroundImage: {
        'gradient-aesthetic': 'linear-gradient(90deg, #8BDEDA 0%, #43ADD0 25%, #998EE0 50%, #E17DC2 75%, #EF9393 100%)',
      },
    },
  },
  plugins: [],
} 