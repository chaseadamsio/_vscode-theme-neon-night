const makefile = colors => [
  {
    name: "Makefile - Language Variable",
    scope: "source.makefile variable.language",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    scope: "source.makefile support.function.target.PHONY",
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Makefile - Target Name",
    scope: "source.makefile entity.name.function.target.makefile",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Makefile - Interpolated Language Variable",
    scope: "source.makefile string.interpolated variable.language",
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Makefile - Punctuation (ie, $() )",
    scope: "source.makefile punctuation.definition",
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Makefile - Function Call",
    scope: "source.makefile meta.scope.function-call",
    settings: {
      foreground: colors.cyan
    }
  }
];

module.exports = makefile;
