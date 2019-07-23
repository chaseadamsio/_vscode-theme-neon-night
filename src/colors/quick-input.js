// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#quick-picker
const quickInput = (palette /*: Palette */) => ({
  "quickInput.background": palette.blackest,
  "quickInput.foreground": palette.white
});

module.exports = quickInput;
