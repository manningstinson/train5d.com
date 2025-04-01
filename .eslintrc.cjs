/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Possible Errors
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', 
      { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    // Best Practices
    'eqeqeq': ['error', 'smart'],
    'no-implicit-coercion': 'error',

    // Stylistic Issues
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    // TypeScript-specific rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'minimumDescriptionLength': 10
      }
    ],

    // Next.js specific
    '@next/next/no-img-element': 'warn',
    '@next/next/no-html-link-for-pages': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  }
};