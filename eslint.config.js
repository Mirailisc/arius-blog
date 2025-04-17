import eslintPluginAstro from 'eslint-plugin-astro'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**', '*.config.js'],
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  {
    plugins: {
      prettier: eslintConfigPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
]
