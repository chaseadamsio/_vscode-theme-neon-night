// https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
const editorWidget = colors => ({
  "editorWidget.background": colors.black,
  "editorWidget.border": colors.magenta33,
  "editorSuggestWidget.background": colors.black,
  "editorSuggestWidget.foreground": colors.white,
  "editorSuggestWidget.highlightForeground": colors.magenta,
  "editorSuggestWidget.selectedBackground": colors.black,
  // editor marker navigation
  "editorMarkerNavigation.background": colors.black,
  "editorMarkerNavigationError.background": colors.red,
  "editorMarkerNavigationWarning.background": colors.yellow,
  "editorMarkerNavigationInfo.background": colors.blue
});

module.exports = editorWidget;
