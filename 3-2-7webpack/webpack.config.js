const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const TerserJSPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'development',
  entry: "./src/index.js",
  // optimization: {
  //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.(scss|sass)$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      // },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader', // 当只有一个时可以简写
        options: {
          name: './images/[name].[ext]', // 可以保持图片名不变以及指定目录
          limit: 5120   // 小于5120B大小图片转成 base64 格式
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        }
      }
    ]
  },
  devServer: {
    hot: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns:[
    //     {
    //       from: path.join(__dirname, 'assets'),
    //       to: 'assets'
    //     }
    //   ]
    // }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ]
};

module.exports = config;
