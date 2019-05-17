const makefile = colors => [
  {
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
  }
];

module.exports = makefile;
