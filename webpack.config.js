const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx'
      // app: path.resolve(__dirname, 'app')
    },
    modules: [
      './app',
      './app/styles',
      './app/components',
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
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [ require('autoprefixer')];
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
