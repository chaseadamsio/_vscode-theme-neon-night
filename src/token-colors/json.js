// @flow

/* ::
import type {Palette} from '../types'
*/

const json = (palette /*: Palette */) => [
  {
    name: "JSON - Property Name",
    scope: [
      "source.json support.type.property-name",
      "source.json punctuation.support.type.property-name"
    ],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "JSON - Constant",
    scope: "source.json constant.language",
    settings: {
      foreground: palette.white,
      fontStyle: "bold"
    }
  },
  {
    name: "JSON - String",
    scope: [
      "source.json string.quoted.double",
      "source.json string.quoted.double punctuation"
    ],
    settings: {
      foreground: palette.green
    }
  }
];

module.exports = json;
