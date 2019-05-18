// @flow

/* ::
import type {Palette} from '../types'
*/

const yaml = (palette /*: Palette */) => [
  {
    name: "YAML - Property Name",
    scope: "source.yaml entity.name.tag",
    settings: {
      foreground: palette.magenta
    }
  }
];

module.exports = yaml;
