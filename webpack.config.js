const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devtool: argv.mode === 'development' ? 'inline-source-map' : '',
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      //hot: true,
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
      }),
      new CopyPlugin({
        patterns: [{ from: './src/img', to: 'img' }],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|svg|jpeg)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name].[ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
            name: '[name].[ext]',
          },
        },
      ],
    },
  };
};
