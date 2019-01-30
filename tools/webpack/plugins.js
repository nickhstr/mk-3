const { DefinePlugin } = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const { appPath } = require('./config');

module.exports = {
  web: [
    new DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new AssetsWebpackPlugin({
      path: appPath(),
      prettyPrint: true,
    }),
  ],
};
