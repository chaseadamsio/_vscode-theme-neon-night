// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#debug
const debug = (palette /*: Palette */) => ({
  "debugToolBar.background": palette.blackout,
  "debugToolBar.border": palette.magenta
});

module.exports = debug;
