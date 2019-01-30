function scripts() {
  return {
    test: /\.(js|jsx)$/,
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
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  };
}

function files() {
  return {
    test: /\.(jpe?g|png|gif|svg|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
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
