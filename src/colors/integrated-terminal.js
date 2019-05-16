// https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
const integratedTerminal = colors => ({
  "terminal.background": colors.black,
  "terminal.foreground": colors.white,
  "terminal.ansiBlack": colors.black,
  "terminal.ansiBlue": colors.blue,
  "terminal.ansiRed": colors.red,
  "terminal.ansiGreen": colors.green,
  "terminal.ansiYellow": colors.yellow,
  "terminal.ansiMagenta": colors.magenta,
  "terminal.ansiCyan": colors.cyan,
  "terminal.ansiWhite": colors.white
});

module.exports = integratedTerminal;
