const path = require('path');

const appPath = (...args) => path.resolve(__dirname, '../', ...args);
const isProd = () => process.env.NODE_ENV === 'production';

module.exports = {
  appPath,
  isProd,
  paths: {
    rootDir: appPath(),
    webEntry: appPath('src/web.js'),
    nodeEntry: appPath('src/node.js'),
    outputDir: appPath('dist'),
    webOutputDir: appPath('dist/web'),
    nodeOutputDir: appPath('dist/node'),
    nodeModules: appPath('node_modules'),
    webpackAssetsFile: appPath('webpack-assets.json'),
    publicPath: '/assets/',
  },
};
