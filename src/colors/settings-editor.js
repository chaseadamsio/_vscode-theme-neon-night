// https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
const settingsEditor = colors => ({
  "settings.headerForeground": colors.white,
  "settings.modifiedItemIndicator": colors.magenta,
  "settings.dropdownBackground": colors.black,
  "settings.dropdownForeground": colors.white,
  "settings.dropdownBorder": colors.magenta33,
  "settings.checkboxBackground": colors.black,
  "settings.checkboxForeground": colors.white,
  "settings.checkboxBorder": colors.magenta33,
  "settings.textInputBackground": colors.black,
  "settings.textInputForeground": colors.white,
  "settings.textInputBorder": colors.magenta33,
  "settings.numberInputBackground": colors.black,
  "settings.numberInputForeground": colors.white,
  "settings.numberInputBorder": colors.magenta33
});

module.exports = settingsEditor;
