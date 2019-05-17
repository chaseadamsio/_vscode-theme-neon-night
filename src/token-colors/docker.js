const docker = colors => [
  {
    name: "Dockerfile - Instruction",
    scope: "source.dockerfile keyword.other.special-method",
    settings: {
      foreground: colors.magenta,
      fontStyle: "bold"
    }
  }
];

module.exports = docker;
