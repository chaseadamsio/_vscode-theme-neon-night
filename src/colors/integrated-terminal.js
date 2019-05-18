// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
const integratedTerminal = (palette /*: Palette */) => ({
  "terminal.background": palette.black,
  "terminal.foreground": palette.white,
  "terminal.ansiBlack": palette.black,
  "terminal.ansiBlue": palette.blue,
  "terminal.ansiRed": palette.red,
  "terminal.ansiGreen": palette.green,
  "terminal.ansiYellow": palette.yellow,
  "terminal.ansiMagenta": palette.magenta,
  "terminal.ansiCyan": palette.cyan,
  "terminal.ansiWhite": palette.white
});

module.exports = integratedTerminal;
