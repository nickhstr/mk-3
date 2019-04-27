const path = require('path');

/**
 * Gets absolute file path relative to the project root.
 * @param  {string[]} args subdirectories/file
 * @return {string}
 */
const appPath = (...args) => path.resolve(__dirname, '../', ...args);
const isProd = () => process.env.NODE_ENV === 'production';
const getWebpackAssetsFile = (hostEnv) => {
  if (hostEnv === 'heroku') {
    // Must match directory structure in heroku dyno
    return '/app/webpack-assets.json';
  }

  return appPath('webpack-assets.json');
};

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
    webpackAssetsFile: getWebpackAssetsFile(process.env.REGION),
    publicPath: '/assets/',
  },
};
