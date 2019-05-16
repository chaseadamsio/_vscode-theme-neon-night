const json = colors => [
  {
    name: "[VSCODE-CUSTOM] JSON Property Name",
    scope: [
      "support.type.property-name.json",
      "punctuation.support.type.property-name"
    ],
    settings: {
      foreground: colors.magenta,
      fontStyle: "italic"
    }
  },
  {
    name: "[VSCODE-CUSTOM] JSON constants",
    scope: "constant.language.json",
    settings: {
      foreground: colors.white,
      fontStyle: "italic"
    }
  },
  {
    name: "[VSCODE-CUSTOM] JSON Property Value",
    scope: [
      "string.quoted.double.json",
      "string.quoted.double.json punctuation"
    ],
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "[JSONNET] JSON String Double Quoted",
    scope: "string.quoted.double.jsonnet",
    settings: {
      foreground: colors.magenta
    }
  }
];

module.exports = json;
