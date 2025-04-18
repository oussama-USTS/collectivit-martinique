module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        postcssOptions: {
          plugins: [
            require('postcss-import'),
            require('tailwindcss/nesting'),
            require('tailwindcss'),
            require('postcss-preset-env')({
              features: {
                'nesting-rules': false // Disable nesting since we're using tailwindcss/nesting
              }
            }),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
} 