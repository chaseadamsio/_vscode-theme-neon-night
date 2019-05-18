// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#peek-view-colors
const peekView = (palette /*: Palette */) => ({
  "peekView.border": palette.magenta33,
  "peekViewEditor.matchHighlightBackground": palette.magenta33,
  "peekViewEditor.matchHighlightBorder": palette.black,
  "peekViewEditorGutter.background": palette.black,
  "peekViewTitle.background": palette.black,
  "peekViewTitleDescription.foreground": palette.white,
  "peekViewTitleLabel.foreground": palette.magenta,
  "peekViewResult.background": palette.black,
  "peekViewResult.matchHighlightBackground": palette.magenta33,
  "peekViewResult.fileForeground": palette.white,
  "peekViewResult.lineForeground": palette.white77,
  "peekViewResult.selectionBackground": palette.magenta33,
  "peekViewResult.selectionForeground": palette.white,
  "peekViewResult.background": palette.black,
  "peekViewEditor.background": palette.black
});

module.exports = peekView;
