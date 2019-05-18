// @flow

/* ::
import type {Palette} from '../types'
*/

const go = (palette /*: Palette */) => [
  {
    name: `Go - Import Name`,
    scope: `source.go entity.name.import`,
    settings: {
      foreground: palette.green
    }
  },
  {
    name: `Go - Function`,
    scope: `source.go support.function`,
    settings: {
      foreground: palette.blue
    }
  }
];

module.exports = go;
