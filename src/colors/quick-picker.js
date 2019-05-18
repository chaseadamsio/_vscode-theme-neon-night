// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#quick-picker
const quickPicker = (palette /*: Palette */) => ({
  "pickerGroup.foreground": palette.white
});

module.exports = quickPicker;
