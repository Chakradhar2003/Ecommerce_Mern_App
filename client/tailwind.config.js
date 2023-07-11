/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {

    extend: {
      screens: {
        'phone': '375px',
        // => @media (min-width: 640px) { ... }

        'tablet': '570px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

