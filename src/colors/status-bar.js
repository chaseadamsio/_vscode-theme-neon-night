// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#status-bar-colors

const statusBar = (palette /*: Palette */) => ({
  "statusBar.background": palette.black,
  "statusBar.foreground": palette.white77,
  "statusBar.noFolderBackground": palette.black,
  "statusBar.noFolderForeground": palette.white,
  "statusBar.debuggingBackground": palette.magenta,
  "statusBar.debuggingBorder": palette.blackout,
  "statusBar.debuggingForeground": palette.black
});

module.exports = statusBar;
