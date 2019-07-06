// @flow

/* ::
import type {Palette, FontStyles} from '../types'
*/

const clojure = (
  palette /*: Palette */,
  fontStyleEnabled /*: FontStyles */
) => [
  {
    name: `Clojure - Constant Keyword`,
    scope: `source.clojure constant.keyword`,
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: `Clojure - Storage Control`,
    scope: `source.clojure storage.control`,
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `Clojure - Symbol`,
    scope: `source.clojure meta.symbol`,
    settings: {
      foreground: palette.cyan,
      fontStyle: fontStyleEnabled.italic ? `italic` : `normal`
    }
  }
];

module.exports = clojure;
