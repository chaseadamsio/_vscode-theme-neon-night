// @flow

/* ::
  import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#activity-bar
const activityBar = (palette /*: Palette */) => ({
  "activityBar.background": palette.black,
  "activityBarBadge.background": palette.white,
  "activityBarBadge.foreground": palette.black,
  "activityBar.foreground": palette.magenta,
  "activityBar.inactiveForeground": palette.white77
});

module.exports = activityBar;
