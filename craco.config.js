const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}; 