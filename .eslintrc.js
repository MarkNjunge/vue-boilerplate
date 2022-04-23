module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-empty-interface": "off",
    indent: ["error", 2],
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "@marknjunge/eslint-config-ts"
      ],
      rules: {
        "no-console": "off"
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    }
  ]
};
