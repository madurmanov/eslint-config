module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    __BROWSER__: true,
    __DEV__: true,
  },
  rules: {
    semi: [2, 'never'],
  },
}
