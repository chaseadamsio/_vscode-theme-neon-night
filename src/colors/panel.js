// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#panel-colors
const panel = (palette /*: Palette */) => ({
  "panel.background": palette.black,
  "panel.border": palette.magenta33,
  "panelTitle.activeForeground": palette.white,
  "panelTitle.activeBorder": palette.magenta77,
  "panelTitle.inactiveForeground": palette.white77
});

module.exports = panel;
