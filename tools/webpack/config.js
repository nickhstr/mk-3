const path = require('path');

const appPath = (...args) => path.resolve(__dirname, '../../', ...args);
const isProd = () => process.env.NODE_ENV === 'production';

module.exports = {
  appPath,
  isProd,
  paths: {
    rootDir: appPath(),
    webEntryJSFile: appPath('client/index.js'),
    outputDir: appPath('dist'),
    webOutputDir: appPath('dist/web'),
    nodeModules: appPath('node_modules'),
    webpackAssetsFile: appPath('webpack-assets.json'),
    publicPath: '/assets/',
  },
};
