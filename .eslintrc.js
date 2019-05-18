module.exports = {
  extends: ["plugin:flowtype/recommended", "prettier"],

  plugins: ["flowtype"],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "backtick"],
    semi: ["error", "always"]
  }
};
