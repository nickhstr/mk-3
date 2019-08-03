'use-strict';

const path = require('path');
const rules = require('./rules');
const { node } = require('./plugins');
const { paths, isProd } = require('./config');

module.exports = {
  target: 'node',
  mode: isProd() ? 'production' : 'development',
  entry: {
    server: paths.nodeEntry,
  },
  output: {
    path: paths.nodeOutputDir,
    publicPath: paths.publicPath,
    filename: '[name].js',
    chunkFilename: '[id].[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [paths.nodeModules, 'node_modules'],
    alias: {
      'mz/fs': path.resolve(__dirname, 'aliases/mz/fs'),
    },
  },
  plugins: node,
  module: {
    rules: [
      rules.scripts(),
      rules.styles(),
      rules.files({
        emitFile: false,
      }),
    ],
  },
  devtool: isProd() ? 'source-map' : 'inline-source-map',
};
