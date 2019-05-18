// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#lists-and-trees
const list = (palette /*: Palette */) => ({
  "list.hoverBackground": palette.blackout,
  "list.border": palette.blackest,
  "list.hoverForeground": palette.magenta,
  "list.focusBackground": palette.blackest,
  "list.focusForeground": palette.white,
  "list.highlightForeground": palette.magenta,
  "list.inactiveSelectionBackground": palette.magenta33,
  "list.inactiveSelectionForeground": palette.white,
  "list.activeSelectionBackground": palette.blackest,
  "list.activeSelectionForeground": palette.magenta
});

module.exports = list;
