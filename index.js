module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    window: true,
    document: true,
    fetch: true,
    alert: true,
    __DEV__: true,
  },
  rules: {
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'max-len': [
      2,
      {
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'global-require': 0,
    'function-paren-newline': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    semi: [2, 'never'],
  },
}
