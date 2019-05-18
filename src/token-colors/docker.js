// @flow

/* ::
import type {Palette} from '../types'
*/

const docker = (palette /*: Palette */) => [
  {
    name: "Dockerfile - Instruction",
    scope: "source.dockerfile keyword.other.special-method",
    settings: {
      foreground: palette.magenta,
      fontStyle: "bold"
    }
  }
];

module.exports = docker;
