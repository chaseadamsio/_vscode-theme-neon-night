const clojure = colors => [
  {
    name: "Clojure - Constant Keyword",
    scope: "source.clojure constant.keyword",
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Clojure - Storage Control",
    scope: "source.clojure storage.control",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Clojure - Symbol",
    scope: "source.clojure meta.symbol",
    settings: {
      foreground: colors.cyan,
      fontStyle: "italic"
    }
  }
];

module.exports = clojure;
