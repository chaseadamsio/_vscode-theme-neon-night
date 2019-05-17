const base = colors => [
  {
    name: "Base - Comment",
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      fontStyle: "italic",
      foreground: colors.magenta77
    }
  },
  {
    name: "Base - String",
    scope: ["string.quoted punctuation", "string.quoted"],
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Function",
    scope: ["entity.name.function"],
    settings: {
      foreground: colors.white,
      fontStyle: "italic"
    }
  },
  {
    name: "Base - Variable",
    scope: ["variable", "string constant.other.placeholder"],
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Base - Boolean",
    scope: "constant.language.boolean",
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  },
  {
    name: "Base - Invalid",
    scope: ["invalid", "invalid.illegal"],
    settings: {
      foreground: colors.red
    }
  },
  {
    name: "Base - Keyword",
    scope: ["keyword"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Base - Storage",
    scope: ["storage.type", "storage.modifier"],
    settings: {
      fontStyle: "italic",
      foreground: colors.magenta
    }
  },
  {
    name: "Base - Accessor",
    scope: "keyword.operator.accessor",
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Base - Keywords (Control/Debugger/Constant)",
    scope: [
      "support.constant",
      "keyword.other.special-method",
      "keyword.other.new",
      "keyword.other.debugger",
      "keyword.control"
    ],
    settings: {
      fontStyle: "italic",
      foreground: colors.magenta
    }
  },
  {
    name: "Base - Regular Expressions",
    scope: ["string.regexp"],
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Base - Escape Character",
    scope: ["constant.character.escape"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Base - URL",
    scope: ["*url*", "*link*", "*uri*"],
    settings: {
      fontStyle: "underline"
    }
  },
  {
    name: "Base - Language Variable",
    scope: ["variable.language"],
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  },
  {
    name: "Base - Attributes",
    scope: ["entity.other.attribute-name"],
    settings: {
      fontStyle: "italic",
      foreground: colors.magenta
    }
  },
  // markup.{inserted,deleted,changed} is a diff block.
  {
    name: "Base - Inserted",
    scope: ["markup.inserted"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Base - Deleted",
    scope: ["markup.deleted"],
    settings: {
      foreground: colors.red
    }
  },
  {
    name: "Base - Changed",
    scope: ["markup.changed"],
    settings: {
      foreground: colors.blue
    }
  }
];

module.exports = base;
