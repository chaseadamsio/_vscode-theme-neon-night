// @flow

/* ::
import type {Palette} from '../types'
*/

const base = (palette /*: Palette */, fontStyleEnabled /*: boolean */) => [
  {
    name: "Base - Comment",
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      fontStyle: fontStyleEnabled ? "italic" : "normal",
      foreground: palette.magenta77
    }
  },
  {
    name: "Base - String",
    scope: ["string.quoted punctuation", "string.quoted"],
    settings: {
      foreground: palette.green
    }
  },
  {
    name: "Function",
    scope: ["entity.name.function"],
    settings: {
      foreground: palette.white,
      fontStyle: fontStyleEnabled ? "italic" : "normal"
    }
  },
  {
    name: "Base - Variable",
    scope: ["variable", "string constant.other.placeholder"],
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: "Base - Boolean",
    scope: "constant.language.boolean",
    settings: {
      fontStyle: fontStyleEnabled ? "bold" : "normal",
      foreground: palette.white
    }
  },
  {
    name: "Base - Invalid",
    scope: ["invalid", "invalid.illegal"],
    settings: {
      foreground: palette.red
    }
  },
  {
    name: "Base - Keyword",
    scope: ["keyword"],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "Base - Storage",
    scope: ["storage.type", "storage.modifier"],
    settings: {
      fontStyle: fontStyleEnabled ? "italic" : "normal",
      foreground: palette.magenta
    }
  },
  {
    name: "Base - Accessor",
    scope: "keyword.operator.accessor",
    settings: {
      foreground: palette.white
    }
  },
  {
    name: "Base - Keywords (Control/Debugger/Constant)",
    scope: [
      "support.constant",
      "keyword.other.special-method",
      "keyword.other.new",
      "keyword.other.debugger",
      "keyword.control"
    ],
    settings: {
      fontStyle: fontStyleEnabled ? "italic" : "normal",
      foreground: palette.magenta
    }
  },
  {
    name: "Base - Regular Expressions",
    scope: ["string.regexp"],
    settings: {
      foreground: palette.green
    }
  },
  {
    name: "Base - Escape Character",
    scope: ["constant.character.escape"],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "Base - URL",
    scope: ["*url*", "*link*", "*uri*"],
    settings: {
      fontStyle: "underline"
    }
  },
  {
    name: "Base - Language Variable",
    scope: ["variable.language"],
    settings: {
      fontStyle: fontStyleEnabled ? "bold" : "normal",
      foreground: palette.white
    }
  },
  {
    name: "Base - Attributes",
    scope: ["entity.other.attribute-name"],
    settings: {
      fontStyle: fontStyleEnabled ? "italic" : "normal",
      foreground: palette.magenta
    }
  },
  // markup.{inserted,deleted,changed} is a diff block.
  {
    name: "Base - Inserted",
    scope: ["markup.inserted"],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "Base - Deleted",
    scope: ["markup.deleted"],
    settings: {
      foreground: palette.red
    }
  },
  {
    name: "Base - Changed",
    scope: ["markup.changed"],
    settings: {
      foreground: palette.blue
    }
  }
];

module.exports = base;
