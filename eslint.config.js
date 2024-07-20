import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from 'eslint-plugin-vue';

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: [
      "dist/**/*",
      "**/.*",
    ],
  },
  {
    files: [ "**/*.js", "**/*.vue"],
    rules: {
      // override/add rules settings here, such as:
      'vue/multi-word-component-names': 'off',
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,

        // allow for Nuxt globals
        computed: 'readonly',
        queryContent: 'readonly',
        useHead: 'readonly',
        ref: 'readonly',
      }
    }
  },
]
