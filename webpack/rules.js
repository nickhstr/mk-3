function scripts(options = {}) {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules\//,
    use: {
      loader: 'babel-loader',
      options: {
        ...options,
      },
    },
  };
}

function styles(options = {}) {
  return {
    test: /\.css$/,
    use: [
      {
        loader: 'css-loader',
        options: {
          ...options,
          modules: true,
        },
      },
    ],
  };
}

function files(options = {}) {
  return {
    test: /\.(jpe?g|png|gif|svg|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          ...options,
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
