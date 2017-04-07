const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log('path', __dirname + './app/app.jsx');
console.log('path', path.resolve(__dirname, './app/actions'));
console.log('path', path.resolve(__dirname, 'app/actions'));

console.log('path.resolve(__dirname, app)', path.resolve(__dirname, 'app'));

module.exports = {
  entry: './app/app.jsx',
  // entry: path.resolve(__dirname, './app/app.jsx'),
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
    },
    // when doing 'require' and 'import', webpack will check this directories for files
    // e.g. import ... from 'filename', no need to specify path or file extensions
    modules: [
      'app/actions',
      'app/components',
      'app/containers',
      'app/reducers',
      'styles',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // allows to use @import statements
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [ require('autoprefixer')];
              }
            }
          },
          // converts SASS/SCSS to CSS
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
