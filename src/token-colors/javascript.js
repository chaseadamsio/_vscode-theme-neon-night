// @flow

/* ::
import type {Palette, FontStyles} from '../types'
*/

const javascript = (
  palette /*: Palette */,
  fontStyleEnabled /*: FontStyles */
) => [
  {
    name: `JS - Import/Require`,
    scope: `source.js keyword.control.module`,
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `JS - Accessor`,
    scope: `source.js keyword.operator.accessor`,
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `JS - Object Property Keys`,
    scope: `source.js string.unquoted`,
    settings: {
      foreground: palette.white,
      fontStyle: fontStyleEnabled.italic ? `italic` : `normal`
    }
  },
  {
    name: `JS - Object Property Strings`,
    scope: [
      `source.js constant.other.object.key.js string.quoted`,
      `source.js constant.other.object.key.js string.quoted punctuation`
    ],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `JS - Support`,
    scope: `source.js support.type`,
    settings: {
      foreground: palette.magenta,
      fontStyle: `normal`
    }
  },
  {
    name: `Flow - Type Name`,
    scope: `source.js support.type.class.flowtype`,
    settings: {
      foreground: palette.white,
      fontStyle: fontStyleEnabled.bold ? `bold` : `normal`
    }
  },
  {
    name: `JS - Sub-methods`,
    scope: [
      `source.js entity.name.module.js`,
      `source.js variable.import.parameter.js`,
      `source.js variable.other.class.js`
    ],
    settings: {
      foreground: palette.white,
      fontStyle: fontStyleEnabled.bold ? `bold` : `normal`
    }
  },
  {
    name: `JS - Variable Language (ie, this)`,
    scope: `source.js variable.language`,
    settings: {
      foreground: palette.white,
      fontStyle: fontStyleEnabled.bold ? `bold` : `normal`
    }
  },
  {
    name: `JSX - Tag`,
    scope: `source.js meta.tag.jsx`,
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `JSX - Punctuation`,
    scope: `source.js punctuation.definition.tag.jsx`,
    settings: {
      foreground: palette.white
    }
  },
  {
    name: `JSX - Attributes`,
    scope: `source.js entity.other.attribute-name.jsx`,
    settings: {
      foreground: palette.blue,
      fontStyle: fontStyleEnabled.italic ? `italic` : `normal`
    }
  }
];

module.exports = javascript;
