/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "newline-per-chained-call": "off",
    "arrow-parens": ["warn", "as-needed"],
    "indent": ["warn", 2],
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/semi": ["warn", "always"],
  },
};
