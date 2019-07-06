// @flow

/* ::
import type {Palette, FontStyles} from '../types'
*/

const html = (palette /*: Palette */, fontStyleEnabled /*: FontStyles */) => [
  {
    name: `HTML - Tag`,
    scope: `text.html entity.name.tag`,
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `HTML - Attribute`,
    scope: `text.html entity.other.attribute-name`,
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: `HTML - Doctype`,
    scope: `text.html meta.tag.metadata.doctype`,
    settings: {
      fontStyle: fontStyleEnabled.bold ? `bold` : `normal`
    }
  }
];

module.exports = html;
