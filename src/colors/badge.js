// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#badge
const badge = (palette /*: Palette */) => ({
  "badge.foreground": palette.magenta,
  "badge.background": palette.black
});

module.exports = badge;
