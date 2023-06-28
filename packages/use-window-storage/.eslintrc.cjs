// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint/eslint-plugin'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'prefer-const': 'error'
  },
  parserOptions: {
    project: ['tsconfig.json'],
    createDefaultProgram: true,
    // eslint-disable-next-line no-undef
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ['dist/', 'node_modules/', '**/*.config.ts']
}
