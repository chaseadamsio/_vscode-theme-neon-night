// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#button-control
const buttonColors = (palette /*: Palette */) => ({
  "button.background": palette.blue,
  "button.hoverBackground": palette.cyan,
  "button.foreground": palette.black
});

module.exports = buttonColors;
