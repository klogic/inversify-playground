module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    indent: ["error", 2],
    "no-return-await": "error",
    "no-return-await": "error",
    "require-await": "error",
    "jsx-quotes": "error",
    "no-trailing-spaces": "error",
    quotes: "error",
    semi: ["error", "always"],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
