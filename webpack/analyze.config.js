const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webConfig = Object.assign({}, require('./web.config'));

webConfig.plugins.push(new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerHost: '127.0.0.1',
  analyzerPort: 8888,
  reportFilename: 'report.html',
  openAnalyzer: true,
  generateStatsFile: false,
  logLevel: 'info',
}));

module.exports = webConfig;
