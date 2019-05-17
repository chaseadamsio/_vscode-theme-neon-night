// https://code.visualstudio.com/api/references/theme-color#editor-colors
const editor = colors => ({
  "editor.background": colors.black,
  "editor.foreground": colors.white,
  "editorLink.activeForeground": colors.magenta,
  "editorLineNumber.foreground": colors.white77,
  "editorLineNumber.activeForeground": colors.white,
  "editor.rangeHighlightBackground": colors.magenta33,
  "editor.selectionBackground": colors.magenta22,
  "editor.selectionHighlightBackground": colors.magenta33,
  "editor.selectionHighlightBorder": colors.magenta77,
  "editor.wordHighlightBackground": colors.magenta33,
  "editor.wordHighlightStrongBackground": colors.magenta33,
  "editor.wordHighlightBorder": colors.magenta77,
  "editor.findMatchHighlightBackground": colors.magenta33,
  "editor.findRangeHighlightBackground": colors.magenta33,
  "editor.findMatchBackground": colors.magenta33,
  "editor.hoverHighlightBackground": colors.blackout,
  "editorIndentGuide.background": colors.white33,
  "editorIndentGuide.activeBackground": colors.magenta77,
  "editorRuler.foreground": colors.magenta33,
  "editorCodeLens.foreground": colors.magenta,
  "editorBracketMatch.background": colors.black,
  "editorBracketMatch.border": colors.magenta77,
  // editor overview ruler
  "editorOverviewRuler.border": colors.magenta33,
  "editorOverviewRuler.findMatchForeground": colors.magenta77,
  "editorOverviewRuler.addedForeground": colors.green,
  "editorOverviewRuler.modifiedForeground": colors.magenta,
  "editorOverviewRuler.bracketMatchForeground": colors.magenta,
  "editorOverviewRuler.warningForeground": colors.yellow,
  "editorOverviewRuler.infoForeground": colors.blue77,
  "editorOverviewRuler.deletedForeground": colors.red,
  "editorOverviewRuler.errorForeground": colors.red,
  // editor errors and warnings
  "editorError.foreground": colors.red,
  "editorWarning.foreground": colors.yellow,
  "editorInfo.foreground": colors.blue,
  "editorHint.foreground": colors.magenta,
  "editorUnnecessaryCode.border": colors.red,
  // editor gutter
  "editorGutter.background": colors.black,
  "editorGutter.addedBackground": colors.green,
  "editorGutter.modifiedBackground": colors.magenta,
  "editorGutter.deletedBackground": colors.red
});

module.exports = editor;
