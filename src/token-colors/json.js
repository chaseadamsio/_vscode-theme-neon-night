const json = colors => [
  {
    name: "JSON - Property Name",
    scope: [
      "source.json support.type.property-name",
      "source.json punctuation.support.type.property-name"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JSON - Constant",
    scope: "source.json constant.language",
    settings: {
      foreground: colors.white,
      fontStyle: "bold"
    }
  },
  {
    name: "JSON - String",
    scope: [
      "source.json string.quoted.double",
      "source.json string.quoted.double punctuation"
    ],
    settings: {
      foreground: colors.green
    }
  }
];

module.exports = json;
