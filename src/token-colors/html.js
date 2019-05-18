// @flow

/* ::
import type {Palette} from '../types'
*/

const html = (palette /*: Palette */) => [
  {
    name: "HTML - Tag",
    scope: "text.html entity.name.tag",
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "HTML - Attribute",
    scope: "text.html entity.other.attribute-name",
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: "HTML - Doctype",
    scope: "text.html meta.tag.metadata.doctype",
    settings: {
      fontStyle: "bold"
    }
  }
];

module.exports = html;
