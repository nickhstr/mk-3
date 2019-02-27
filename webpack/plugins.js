const { DefinePlugin } = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { appPath, paths } = require('./config');

let nodeArgs = ['-r', 'dotenv/config'];

if (process.env.NODE_ENV === 'debug') {
  nodeArgs = ['--inspect', ...nodeArgs];
}

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
    new CopyPlugin([appPath('src/assets')]),
  ],
  node: [
    new DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      WEBPACK_ASSETS: JSON.stringify(paths.webpackAssetsFile),
    }),
    new ProgressBarPlugin(),
    new NodemonPlugin({
      args: [`dotenv_config_path=${appPath('.env')}`],
      nodeArgs,
      ignore: ['*.svg'],
      watch: appPath('dist/node'),
      script: appPath('dist/node/server.js'),
    }),
  ],
};
