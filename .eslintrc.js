module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  rules: {
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
