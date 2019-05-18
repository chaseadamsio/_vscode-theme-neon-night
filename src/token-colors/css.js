// @flow

/* ::
import type {Palette} from '../types'
*/

const css = (palette /*: Palette */) => [
  {
    name: "CSS - ID",
    scope: [
      "source.css keyword.control",
      "source.sass keyword.control",
      "source.scss keyword.control",
      "source.less keyword.control",
      "source.stylus keyword.control",
      "source.postcss keyword.control"
    ],
    settings: {
      foreground: palette.magenta,
      fontStyle: "italic"
    }
  },
  {
    name: "CSS - Tag",
    scope: [
      "source.css entity.name.tag",
      "source.sass entity.name.tag",
      "source.less entity.name.tag",
      "source.stylus entity.name.tag",
      "source.postcss entity.name.tag"
    ],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "CSS - Constant Property Value",
    scope: [
      "source.css support.constant.property-value",
      "source.sass support.constant.property-value",
      "source.less support.constant.property-value",
      "source.stylus support.constant.property-value",
      "source.postcss support.constant.property-value"
    ],
    settings: {
      foreground: palette.green
    }
  },
  {
    name: "CSS - Class and Support",
    scope: [
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name"
    ],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "CSS - Classes",
    scope: [
      "source.css entity.other.attribute-name.class",
      "source.sass entity.other.attribute-name.class",
      "source.scss entity.other.attribute-name.class",
      "source.less entity.other.attribute-name.class",
      "source.stylus entity.other.attribute-name.class",
      "source.postcss entity.other.attribute-name.class"
    ],
    settings: {
      foreground: palette.cyan,
      fontStyle: "normal"
    }
  },
  {
    name: "CSS - Function",
    scope: [
      "source.css support.function",
      "source.sass support.function",
      "source.scss support.function",
      "source.less support.function",
      "source.stylus support.function",
      "source.postcss support.function"
    ],
    settings: {
      foreground: palette.blue,
      fontStyle: "normal"
    }
  }
];

module.exports = css;
