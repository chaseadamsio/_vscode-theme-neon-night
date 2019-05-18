// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
const editorGroupsTabs = (palette /*: Palette */) => ({
  "tab.activeBackground": palette.black,
  "tab.activeForeground": palette.white,
  "tab.border": palette.magenta33,
  "tab.activeBorder": palette.magenta,
  "tab.inactiveBackground": palette.black,
  "tab.inactiveForeground": palette.white77,
  "editorGroup.emptyBackground": palette.black,
  "editorGroupHeader.tabsBackground": palette.black
});

module.exports = editorGroupsTabs;
