const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true
  },
  purge: [
    './docs/App.svelte',
    './docs/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      md: '768px'
    },
    container: {
      center: true
    }
  },
  variants: {},
  plugins: []
}
