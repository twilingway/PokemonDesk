module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'no-shadow': ['off', { builtinGlobals: false, hoist: 'never', allow: [] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'error',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.tsx', '.ts', '.js'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    semi: [2, 'always'],
    quotes: ['error', 'single'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
