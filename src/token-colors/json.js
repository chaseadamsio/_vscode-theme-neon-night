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
    name: "JSON - constants",
    scope: "source.json constant.language",
    settings: {
      foreground: colors.white,
      fontStyle: "italic"
    }
  },
  {
    name: "JSON - Property Value",
    scope: [
      "source.json string.quoted.double",
      "source.json string.quoted.double punctuation"
    ],
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "JSONNET - String",
    scope: "source.jsonnet string.quoted",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "JSONNET - Function",
    scope: "source.jsonnet entity.name.function",
    settings: {
      foreground: colors.blue
    }
  }
];

module.exports = json;
