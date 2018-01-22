module.exports = {
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  globals: {
    __BROWSER__: true,
    __DEV__: true,
    __LOC__: true,
    __API__: true,
    document: true,
    window: true
  },
  rules: {
    'max-len': 0,
    'global-require': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],
    'no-console': 0,
    semi: [
      2,
      'never'
    ],
    'no-underscore-dangle': 0,

    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0
  }
};
