const { DefinePlugin } = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const { appPath } = require('./config');

module.exports = {
  web: [
    new DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new ProgressBarPlugin(),
    new AssetsPlugin({
      path: appPath(),
      prettyPrint: true,
    }),
  ],
};
