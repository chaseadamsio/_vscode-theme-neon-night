// @flow
/* ::
import type { Theme } from './types'
*/

const generateTheme = (
  { displayName, palette, fontStyleEnabled } /*: Theme */
) => ({
  name: displayName,
  type: `dark`,
  colors: {
    ...require(`./colors/sidebar`)(palette),
    ...require(`./colors/base`)(palette),
    ...require(`./colors/text`)(palette),
    ...require(`./colors/button`)(palette),
    ...require(`./colors/dropdown`)(palette),
    ...require(`./colors/input`)(palette),
    ...require(`./colors/scrollbar`)(palette),
    ...require(`./colors/badge`)(palette),
    ...require(`./colors/progress-bar`)(palette),
    ...require(`./colors/list`)(palette),
    ...require(`./colors/activity-bar`)(palette),
    ...require(`./colors/editor-groups-tabs`)(palette),
    ...require(`./colors/editor`)(palette),
    ...require(`./colors/diff-editor`)(palette),
    ...require(`./colors/editor-widget`)(palette),
    ...require(`./colors/peek-view`)(palette),
    ...require(`./colors/merge-conflicts`)(palette),
    ...require(`./colors/panel`)(palette),
    ...require(`./colors/status-bar`)(palette),
    ...require(`./colors/title-bar`)(palette),
    ...require(`./colors/menu-bar`)(palette),
    ...require(`./colors/notification`)(palette),
    ...require(`./colors/quick-picker`)(palette),
    ...require(`./colors/quick-input`)(palette),
    ...require(`./colors/integrated-terminal`)(palette),
    ...require(`./colors/debug`)(palette),
    ...require(`./colors/git`)(palette),
    ...require(`./colors/breadcrumbs`)(palette)
  },
  tokenColors: [
    ...require(`./token-colors/base`)(palette, fontStyleEnabled),
    ...require(`./token-colors/clojure`)(palette, fontStyleEnabled),
    ...require(`./token-colors/css`)(palette, fontStyleEnabled),
    ...require(`./token-colors/docker`)(palette, fontStyleEnabled),
    ...require(`./token-colors/go`)(palette),
    ...require(`./token-colors/html`)(palette, fontStyleEnabled),
    ...require(`./token-colors/javascript`)(palette, fontStyleEnabled),
    ...require(`./token-colors/json`)(palette, fontStyleEnabled),
    ...require(`./token-colors/makefile`)(palette),
    ...require(`./token-colors/markdown`)(palette, fontStyleEnabled),
    ...require(`./token-colors/yaml`)(palette)
  ]
});

module.exports = generateTheme;
