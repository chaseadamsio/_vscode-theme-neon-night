// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#progress-bar
const progressBar = (palette /*: Palette */) => ({
  "progressBar.background": palette.magenta
});

module.exports = progressBar;
