function scripts() {
  return {
    test: /\.m?js$/,
    exclude: /node_modules\//,
    use: {
      loader: 'babel-loader',
    },
  };
}

function styles() {
  return {
    test: /\.css$/,
    use: [
      'css-loader',
    ],
  };
}

module.exports = {
  scripts,
  styles,
};
