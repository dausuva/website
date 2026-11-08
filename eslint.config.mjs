import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['public/**', 'resources/**', 'node_modules/**'] },
  {
    files: ['scripts/**/*.mjs', 'eslint.config.mjs'],
    ...js.configs.recommended,
    languageOptions: { ecmaVersion: 2026, sourceType: 'module', globals: globals.node },
    rules: { ...js.configs.recommended.rules, 'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }] }
  },
  {
    files: ['assets/js/**/*.js'],
    ...js.configs.recommended,
    languageOptions: { ecmaVersion: 2026, sourceType: 'script', globals: globals.browser }
  }
];
