const generateTheme = (themeName, colors) => ({
  name: "Neon Night",
  type: "dark",
  colors: {
    ...require("./colors/sidebar")(colors),
    ...require("./colors/base")(colors),
    ...require("./colors/text")(colors),
    ...require("./colors/button")(colors),
    ...require("./colors/dropdown")(colors),
    ...require("./colors/input")(colors),
    ...require("./colors/scrollbar")(colors),
    ...require("./colors/badge")(colors),
    ...require("./colors/progress-bar")(colors),
    ...require("./colors/list")(colors),
    ...require("./colors/activity-bar")(colors),
    ...require("./colors/editor-groups-tabs")(colors),
    ...require("./colors/editor")(colors),
    ...require("./colors/diff-editor")(colors),
    ...require("./colors/editor-widget")(colors),
    ...require("./colors/peek-view")(colors),
    ...require("./colors/merge-conflicts")(colors),
    ...require("./colors/panel")(colors),
    ...require("./colors/status-bar")(colors),
    ...require("./colors/title-bar")(colors),
    ...require("./colors/menu-bar")(colors),
    ...require("./colors/notification")(colors),
    ...require("./colors/quick-picker")(colors),
    ...require("./colors/integrated-terminal")(colors),
    ...require("./colors/debug")(colors),
    ...require("./colors/git")(colors),
    ...require("./colors/breadcrumbs")(colors)
  },
  tokenColors: [
    ...require("./token-colors/base")(colors),
    ...require("./token-colors/clojure")(colors),
    ...require("./token-colors/css")(colors),
    ...require("./token-colors/docker")(colors),
    ...require("./token-colors/go")(colors),
    ...require("./token-colors/html")(colors),
    ...require("./token-colors/javascript")(colors),
    ...require("./token-colors/json")(colors),
    ...require("./token-colors/makefile")(colors),
    ...require("./token-colors/markdown")(colors)
  ]
});

module.exports = generateTheme;
