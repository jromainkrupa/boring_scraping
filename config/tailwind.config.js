const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './app/components/**/*',
    './app/assets/stylesheets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', ...defaultTheme.fontFamily.sans],
        display: ['Big Shoulders Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'purple': {
          50: '#f7f4fe',
          100: '#f0eafc',
          200: '#d9caf9',
          300: '#c2aaf5',
          400: '#946aed',
          500: '#662ae5',
          600: '#5c26ce',
          700: '#4d20ac',
          800: '#3d1989',
          900: '#321570',
          950: '#2c1262',
        },
        'yellow': {
          50: '#fffdf9',
          100: '#fffbf4',
          200: '#fff5e3',
          300: '#ffefd1',
          400: '#ffe4af',
          500: '#ffd88d',
          600: '#e6c27f',
          700: '#bfa26a',
          800: '#998255',
          900: '#7d6a45'
        },
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
