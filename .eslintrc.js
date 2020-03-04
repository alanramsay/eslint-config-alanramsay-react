module.exports = {
  extends: [
    "eslint-config-alanramsay-node",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["jest", "jsx-a11y", "react-hooks"],
  rules: {
    "no-console": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    react: {
      version: "16.5.0"
    }
  }
};
