'use-strict';

const rules = require('./rules');
const { web } = require('./plugins');
const { paths, isProd } = require('./config');

module.exports = {
  target: 'web',
  mode: isProd() ? 'production' : 'development',
  entry: {
    main: paths.webEntry,
  },
  output: {
    path: paths.webOutputDir,
    publicPath: paths.publicPath,
    filename: isProd() ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProd() ? '[id].[name].[chunkhash].js' : '[id].[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [paths.nodeModules, 'node_modules'],
  },
  plugins: web,
  module: {
    rules: [
      rules.scripts(),
      rules.styles(),
      rules.files(),
    ],
  },
  devtool: isProd() ? 'source-map' : 'inline-source-map',
};
