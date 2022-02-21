module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      merri: ['Merriweather', 'serif']
    },
    variants: {
      extend: {}
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('@tailwindcss/typography'),
  ]
}
