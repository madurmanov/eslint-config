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
    document: true,
    window: true
  },
  rules: {
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

    'import/extensions': 0,
    'import/no-unresolved': 1,
    'import/no-extraneous-dependencies': [
      1,
      {
        'devDependencies': [
          '**/*.test.js',
          '**/*.spec.js'
        ]
      }
    ],
    'import/prefer-default-export': 0,

    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,

    'angular/controller-name': 0,
    'angular/definedundefined': 0,
    'angular/document-service': 0,
    'angular/interval-service': 0,
    'angular/json-functions': 0,
    'angular/log': 0,
    'angular/timeout-service': 0,
    'angular/typecheck-array': 0,
    'angular/typecheck-function': 0,
    'angular/typecheck-object': 0,
    'angular/typecheck-string': 0,
    'angular/window-service': 0
  }
};
