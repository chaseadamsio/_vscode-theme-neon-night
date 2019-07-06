// @flow

/* ::
import type {Palette, FontStyles} from '../types'
*/

const docker = (palette /*: Palette */, fontStyleEnabled /*: FontStyles */) => [
  {
    name: `Dockerfile - Instruction`,
    scope: `source.dockerfile keyword.other.special-method`,
    settings: {
      foreground: palette.magenta,
      fontStyle: fontStyleEnabled.bold ? `bold` : `normal`
    }
  }
];

module.exports = docker;
