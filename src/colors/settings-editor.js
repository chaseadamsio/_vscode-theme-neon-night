// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
const settingsEditor = (palette /*: Palette */) => ({
  "settings.headerForeground": palette.white,
  "settings.modifiedItemIndicator": palette.magenta,
  "settings.dropdownBackground": palette.black,
  "settings.dropdownForeground": palette.white,
  "settings.dropdownBorder": palette.magenta33,
  "settings.checkboxBackground": palette.black,
  "settings.checkboxForeground": palette.white,
  "settings.checkboxBorder": palette.magenta33,
  "settings.textInputBackground": palette.black,
  "settings.textInputForeground": palette.white,
  "settings.textInputBorder": palette.magenta33,
  "settings.numberInputBackground": palette.black,
  "settings.numberInputForeground": palette.white,
  "settings.numberInputBorder": palette.magenta33
});

module.exports = settingsEditor;
