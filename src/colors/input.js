// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#input-control
// TODO: add inputValidation styles
const input = (palette /*: Palette */) => ({
  "input.background": palette.blackout,
  "input.foreground": palette.white,
  "input.placeholderForeground": palette.white77,
  "inputOption.activeBorder": palette.magenta
});

module.exports = input;
