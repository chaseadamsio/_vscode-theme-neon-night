// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#side-bar
const sidebarColors = (palette /*: Palette */) => ({
  "sideBarTitle.foreground": palette.magenta,
  "sideBarSectionHeader.border": palette.magenta33,
  "sideBarSectionHeader.background": palette.black,
  "sideBarSectionHeader.foreground": palette.magenta,
  "sideBar.border": palette.magenta33,
  "sideBar.background": palette.black,
  "sideBarTitle.foreground": palette.white
});

module.exports = sidebarColors;
