// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#base-colors
const baseColors = (palette /*: Palette */) => ({
  foreground: palette.white,
  focusBorder: palette.magenta77,
  "widget.shadow": palette.black,
  "selection.background": palette.magenta33,
  descriptionForeground: palette.white,
  errorForeground: palette.red
});

module.exports = baseColors;
