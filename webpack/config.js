const path = require('path');

/**
 * Gets absolute file path relative to the project root.
 * @param  {string[]} args subdirectories/file
 * @return {string}
 */
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
    webpackAssetsDir: appPath('dist/web'),
    webpackAssetsFile: appPath('dist/web/webpack-assets.json'),
    publicPath: '/assets/',
  },
};
