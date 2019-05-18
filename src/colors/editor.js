// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#editor-colors
const editor = (palette /*: Palette */) => ({
  "editor.background": palette.black,
  "editor.foreground": palette.white,
  "editorLink.activeForeground": palette.magenta,
  "editorLineNumber.foreground": palette.white77,
  "editorLineNumber.activeForeground": palette.white,
  "editor.rangeHighlightBackground": palette.magenta33,
  "editor.selectionBackground": palette.magenta22,
  "editor.selectionHighlightBackground": palette.magenta33,
  "editor.selectionHighlightBorder": palette.magenta77,
  "editor.wordHighlightBackground": palette.magenta33,
  "editor.wordHighlightStrongBackground": palette.magenta33,
  "editor.wordHighlightBorder": palette.magenta77,
  "editor.findMatchHighlightBackground": palette.magenta33,
  "editor.findRangeHighlightBackground": palette.magenta33,
  "editor.findMatchBackground": palette.magenta33,
  "editor.hoverHighlightBackground": palette.blackout,
  "editorIndentGuide.background": palette.white33,
  "editorIndentGuide.activeBackground": palette.magenta77,
  "editorRuler.foreground": palette.magenta33,
  "editorCodeLens.foreground": palette.magenta,
  "editorBracketMatch.background": palette.black,
  "editorBracketMatch.border": palette.magenta77,
  // editor overview ruler
  "editorOverviewRuler.border": palette.magenta33,
  "editorOverviewRuler.findMatchForeground": palette.magenta77,
  "editorOverviewRuler.addedForeground": palette.green,
  "editorOverviewRuler.modifiedForeground": palette.magenta,
  "editorOverviewRuler.bracketMatchForeground": palette.magenta,
  "editorOverviewRuler.warningForeground": palette.yellow,
  "editorOverviewRuler.infoForeground": palette.blue77,
  "editorOverviewRuler.deletedForeground": palette.red,
  "editorOverviewRuler.errorForeground": palette.red,
  // editor errors and warnings
  "editorError.foreground": palette.red,
  "editorWarning.foreground": palette.yellow,
  "editorInfo.foreground": palette.blue,
  "editorHint.foreground": palette.magenta,
  "editorUnnecessaryCode.border": palette.red,
  // editor gutter
  "editorGutter.background": palette.black,
  "editorGutter.addedBackground": palette.green,
  "editorGutter.modifiedBackground": palette.magenta,
  "editorGutter.deletedBackground": palette.red
});

module.exports = editor;
