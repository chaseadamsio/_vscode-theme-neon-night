// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#scrollbar-control
const scrollbar = (palette /*: Palette */) => ({
  "scrollbar.shadow": palette.black,
  "scrollbarSlider.activeBackground": palette.magenta,
  "scrollbarSlider.background": palette.magenta33,
  "scrollbarSlider.hoverBackground": palette.magenta77
});

module.exports = scrollbar;
