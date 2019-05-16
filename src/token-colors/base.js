const base = colors => [
  {
    name: "Comment",
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      fontStyle: "italic",
      foreground: colors.magenta77
    }
  },
  {
    name: "Boolean",
    scope: "constant.language.boolean",
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Variables",
    scope: ["variable", "string constant.other.placeholder"],
    settings: {
      foreground: colors.cyan
    }
  },
  {
    name: "Colors",
    scope: ["constant.other.color"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Invalid",
    scope: ["invalid", "invalid.illegal"],
    settings: {
      foreground: colors.red
    }
  },
  {
    name: "Keyword, Storage",
    scope: ["keyword", "storage.type", "storage.modifier"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Punctuation",
    scope: "string.quoted punctuation",
    settings: {
      foreground: colors.green
    }
  }
];

module.exports = base;
