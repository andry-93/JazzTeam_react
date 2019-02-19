const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              context: 'src',
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    isProduction
      ? new ImageminPlugin({
        test: /\.(png|gif|jpe?g|svg)$/i,
      })
      : false,
  ].filter(Boolean),
};
