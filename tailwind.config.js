module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ["./src/**/*.{js,ts,jsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#ffd700'
    },
    fontFamily: {
        helveticaneue: ['Helvetica Neue'],
        coolvetica: ['Coolvetica'],
        labelleaurore: ['La Belle Aurore']
    }
  }
},
  plugins: [],
}
