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
      'isomorphic-style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          ...options,
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
          name: '[name].[ext]',
          ...options,
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
