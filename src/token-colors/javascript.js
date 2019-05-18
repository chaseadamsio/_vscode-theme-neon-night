const javascript = colors => [
  {
    name: "JS - Import/Require",
    scope: "source.js keyword.control.module",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JS - Object Property Keys",
    scope: "source.js string.unquoted",
    settings: {
      foreground: colors.white,
      fontStyle: "italic"
    }
  },
  {
    name: "JS - Object Property Strings",
    scope: [
      "source.js constant.other.object.key.js string.quoted",
      "source.js constant.other.object.key.js string.quoted punctuation"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JS - Support",
    scope: "source.js support.type",
    settings: {
      foreground: colors.magenta,
      fontStyle: "normal"
    }
  },
  {
    name: "Flow - Type Name",
    scope: "source.js support.type.class.flowtype",
    settings: {
      foreground: colors.white,
      fontStyle: "bold"
    }
  },
  {
    name: "JS - Sub-methods",
    scope: [
      "source.js entity.name.module.js",
      "source.js variable.import.parameter.js",
      "source.js variable.other.class.js"
    ],
    settings: {
      foreground: colors.white,
      fontStyle: "bold"
    }
  },
  {
    name: "JS - Variable Language (ie, this)",
    scope: "source.js variable.language",
    settings: {
      foreground: colors.white,
      fontStyle: "bold"
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
  },
  {
    name: "JSX - Attributes",
    scope: "source.js entity.other.attribute-name.jsx",
    settings: {
      foreground: colors.blue,
      fontStyle: "italic"
    }
  }
];

module.exports = javascript;
