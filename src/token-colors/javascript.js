const javascript = colors => [
  {
    name: "JS - Import/Require",
    scope: ["keyword.control.module.js"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JS  - Object Property Keys",
    scope: "string.unquoted.js",
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "JS - Object Property Strings",
    scope: [
      "constant.other.object.key.js string.quoted.double.js",
      "constant.other.object.key.js string.quoted punctuation"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Entity Types",
    scope: ["support.type"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Sub-methods",
    scope: [
      "entity.name.module.js",
      "variable.import.parameter.js",
      "variable.other.class.js"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Variable Language",
    scope: "source.js variable.language",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "entity.name.method.js",
    scope: ["entity.name.method.js"],
    settings: {
      fontStyle: "italic",
      foreground: colors.magenta
    }
  },
  {
    name: "meta.method.js",
    scope: ["source.js entity.name.function", "variable.function.constructor"],
    settings: {
      foreground: colors.white,
      fontStyle: "bold"
    }
  },
  {
    name: "Decorators",
    scope: [
      "tag.decorator.js entity.name.tag.js",
      "tag.decorator.js punctuation.definition.tag.js"
    ],
    settings: {
      fontStyle: "italic",
      foreground: "#82AAFF"
    }
  },
  {
    name: "ES7 Bind Operator",
    scope: ["source.js constant.other.object.key.js string.unquoted.label.js"],
    settings: {
      fontStyle: "italic",
      foreground: "#FF5370"
    }
  },
  {
    name: "JS - Import/Require",
    scope: ["keyword.control.module.js"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JS  - Object Property Keys",
    scope: "string.unquoted.js",
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "JS - Object Property Strings",
    scope: [
      "constant.other.object.key.js string.quoted.double.js",
      "constant.other.object.key.js string.quoted punctuation"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JSX - Tag",
    scope: "source.js meta.tag.jsx",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JSX - Punctuation",
    scope: "source.js punctuation.definition.tag.jsx",
    settings: {
      foreground: colors.white
    }
  }
];

module.exports = javascript;
