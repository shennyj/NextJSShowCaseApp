module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
