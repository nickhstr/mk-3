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

function files() {
  return {
    test: /\.(jpe?g|png|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
        },
      },
    ],
  };
}

module.exports = {
  scripts,
  styles,
  files,
};
