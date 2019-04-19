const { DefinePlugin } = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const { appPath, paths } = require('./config');

let nodeArgs = ['-r', 'dotenv/config'];

if (process.env.NODE_ENV === 'debug') {
  nodeArgs = ['--inspect', ...nodeArgs];
}

const web = [
  new CleanPlugin({
    verbose: false,
  }),
  new DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  }),
  new AssetsPlugin({
    path: appPath(),
    prettyPrint: true,
  }),
  new CopyPlugin([appPath('src/assets')]),
];
const node = [
  new CleanPlugin({
    verbose: false,
  }),
  new DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    WEBPACK_ASSETS: JSON.stringify(paths.webpackAssetsFile),
  }),
  new NodemonPlugin({
    args: [`dotenv_config_path=${appPath('.env')}`],
    nodeArgs,
    ignore: ['*.svg'],
    watch: appPath('dist/node'),
    script: appPath('dist/node/server.js'),
  }),
];

module.exports = {
  web,
  node,
};
