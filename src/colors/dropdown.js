// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#dropdown-control
const dropdown = (palette /*: Palette */) => ({
  "dropdown.background": palette.blackout,
  "dropdown.listBackground": palette.blackout,
  "dropdown.border": palette.magenta33,
  "dropdown.foreground": palette.white
});

module.exports = dropdown;
