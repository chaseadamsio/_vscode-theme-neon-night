// @flow

/* ::
import type {Palette} from '../types'
*/

const markdown = (palette /*: Palette */) => [
  {
    name: `Markdown - Plain`,
    scope: [`text.html.markdown`, `punctuation.definition.list_item.markdown`],
    settings: {
      foreground: palette.white
    }
  },
  {
    name: `Markdown - Markup Raw Inline`,
    scope: [
      `text.html.markdown markup.inline.raw`,
      `text.html.markdown markup.inline.raw punctuation.definition.raw.markdown`
    ],
    settings: {
      foreground: palette.blue,
      fontStyle: `bold`
    }
  },
  {
    name: `Markdown - Heading`,
    scope: `text.html.markdown markup.heading`,
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `Markdown - Italic`,
    scope: [`text.html.markdown markup.italic`],
    settings: {
      fontStyle: `italic`,
      foreground: palette.cyan
    }
  },
  {
    name: `Markdown - Bold`,
    scope: [
      `text.html.markdown markup.bold`,
      `text.html.markdown markup.bold string`
    ],
    settings: {
      fontStyle: `bold`,
      foreground: palette.cyan
    }
  },
  {
    name: `Markup - Underline`,
    scope: [`text.html.markdown markup.underline`],
    settings: {
      fontStyle: `underline`,
      foreground: palette.white
    }
  },
  {
    name: `Markdown - Blockquote`,
    scope: [
      `text.html.markdown markup.quote punctuation.definition.blockquote.markdown`
    ],
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: `Markdown - Quote`,
    scope: [`text.html.markdown markup.quote`],
    settings: {
      fontStyle: `italic`,
      foreground: palette.blue
    }
  },
  {
    name: `Markdown - Link`,
    scope: [`text.html.markdown string.other.link.title.markdown`],
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: `Markdown - Link Description`,
    scope: [`text.html.markdown string.other.link.description.title`],
    settings: {
      foreground: palette.white
    }
  },
  {
    name: `Markdown - Link Anchor`,
    scope: [`text.html.markdown markup.underline.link`],
    settings: {
      foreground: palette.green
    }
  },
  {
    name: `Markdown - Raw Block`,
    scope: [`text.html.markdown markup.raw.block`],
    settings: {
      foreground: palette.white
    }
  },
  {
    name: `Markdown - Raw Block Fenced`,
    scope: [`text.html.markdown markup.raw.block.fenced`],
    settings: {
      foreground: palette.white
    }
  },
  {
    name: `Markdown - Fenced Bode Block`,
    scope: [
      `text.html.markdown markup.fenced_code.block punctuation.definition`
    ],
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: `Markdown - Separator`,
    scope: [`text.html markdown meta.separator`],
    settings: {
      fontStyle: `bold`,
      foreground: palette.white
    }
  }
];

module.exports = markdown;
