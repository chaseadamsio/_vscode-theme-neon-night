const go = colors => [
  {
    name: "Go - Import Name",
    scope: "source.go entity.name.import",
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Go - Function",
    scope: "source.go support.function",
    settings: {
      foreground: colors.blue
    }
  }
];

module.exports = go;
