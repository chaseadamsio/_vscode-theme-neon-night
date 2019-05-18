// @flow

/* ::
import type {Palette} from '../types'
*/

const clojure = (palette /*: Palette */) => [
  {
    name: "Clojure - Constant Keyword",
    scope: "source.clojure constant.keyword",
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: "Clojure - Storage Control",
    scope: "source.clojure storage.control",
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "Clojure - Symbol",
    scope: "source.clojure meta.symbol",
    settings: {
      foreground: palette.cyan,
      fontStyle: "italic"
    }
  }
];

module.exports = clojure;
