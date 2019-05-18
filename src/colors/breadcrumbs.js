// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#breadcrumbs
const breadcrumbs = (palette /*: Palette */) => ({
  "breadcrumb.foreground": palette.white,
  "breadcrumb.background": palette.black,
  "breadcrumbPicker.background": palette.black,
  "breadcrumb.focusForeground": palette.magenta,
  "breadcrumb.activeSelectionForeground": palette.magenta
});

module.exports = breadcrumbs;
