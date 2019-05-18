// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
const editorWidget = (palette /*: Palette */) => ({
  "editorWidget.background": palette.black,
  "editorWidget.border": palette.magenta33,
  "editorSuggestWidget.background": palette.black,
  "editorSuggestWidget.foreground": palette.white,
  "editorSuggestWidget.highlightForeground": palette.magenta,
  "editorSuggestWidget.selectedBackground": palette.black,
  // editor marker navigation
  "editorMarkerNavigation.background": palette.black,
  "editorMarkerNavigationError.background": palette.red,
  "editorMarkerNavigationWarning.background": palette.yellow,
  "editorMarkerNavigationInfo.background": palette.blue
});

module.exports = editorWidget;
