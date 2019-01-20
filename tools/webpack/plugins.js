// const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { appPath } = require('./config');

module.exports = {
  web: [
    new CleanWebpackPlugin(appPath('dist/web'), {
      root: appPath(),
      watch: true,
    }),
    new AssetsWebpackPlugin({
      path: appPath(),
      prettyPrint: true,
    }),
  ],
};
