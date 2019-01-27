module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  globals: {
    'window': true,
    'customElements': true,
  },
};
