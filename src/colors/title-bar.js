// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#title-bar-colors
const titleBar = (palette /*: Palette */) => ({
  "titleBar.activeBackground": palette.black,
  "titleBar.activeForeground": palette.white,
  "titleBar.inactiveForeground": palette.white77
});

module.exports = titleBar;
