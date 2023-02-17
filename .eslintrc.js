module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-indent': [2, 4],
    indent: [2, 4],
    'react/jsx-indent-props': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': [0],
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-unused-vars': [1],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [1],
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-redeclare': 'off',
    'i18next/no-literal-string': [2, { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
