const postcssPresetEnv = require('postcss-preset-env')
const isDevMode = process.env.NODE_ENV === 'development'

const plugins = [require('tailwindcss')]

if (!isDevMode) {
  plugins.push(
    postcssPresetEnv({
      stage: 0,
    })
  )
}

module.exports = { plugins }
