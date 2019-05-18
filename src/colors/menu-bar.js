// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#menu-bar-colors
const menu = (palette /*: Palette */) => ({
  "menubar.selectionForeground": palette.magenta,
  "menubar.selectionBackground": palette.black,
  "menu.foreground": palette.white,
  "menu.background": palette.black,
  "menu.selectionBorder": palette.magenta
});

module.exports = menu;
