'use-strict';

const rules = require('./rules');
const { web } = require('./plugins');
const { paths, isProd } = require('./config');

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV || 'production',
  entry: {
    main: paths.webEntryJSFile,
  },
  output: {
    path: paths.webOutputDir,
    publicPath: paths.publicPath,
    filename: isProd() ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProd() ? '[id].[name].[chunkhash].js' : '[id].[name].js',
  },
  resolve: {
    extensions: ['.js', '.mjs'],
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
};
