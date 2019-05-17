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
      fontStyle: "italic",
      foreground: colors.magenta
    }
  },
  {
    name: "String",
    scope: ["string punctuation", "string.quoted"],
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Accessor",
    scope: "keyword.operator.accessor",
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Operator, Misc",
    scope: [
      "constant.other.color",
      "meta.tag",
      "punctuation.definition.tag",
      "punctuation.separator.inheritance.php",
      "punctuation.definition.tag.html",
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
      "punctuation.section.embedded",
      "keyword.other.template",
      "keyword.other.substitution"
    ],
    settings: {
      foreground: colors.white
    }
  },
  {
    name:
      "Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords",
    scope: [
      "support.constant",
      "keyword.other.special-method",
      "keyword.other.new",
      "keyword.other.debugger",
      "keyword.control"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Regular Expressions",
    scope: ["string.regexp"],
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Escape Characters",
    scope: ["constant.character.escape"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "URL",
    scope: ["*url*", "*link*", "*uri*"],
    settings: {
      fontStyle: "underline"
    }
  },
  {
    name: "Language methods",
    scope: ["variable.language"],
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  },
  {
    name: "Attributes",
    scope: ["entity.other.attribute-name"],
    settings: {
      fontStyle: "italic",
      foreground: colors.blue
    }
  },
  {
    name: "Inserted",
    scope: ["markup.inserted"],
    settings: {
      foreground: "#C3E88D"
    }
  },
  {
    name: "Deleted",
    scope: ["markup.deleted"],
    settings: {
      foreground: "#FF5370"
    }
  },
  {
    name: "Changed",
    scope: ["markup.changed"],
    settings: {
      foreground: "#C792EA"
    }
  }
];

module.exports = base;
