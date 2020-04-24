// @flow

/* ::
import type {Palette, FontStyles} from '../types'
*/

const asciidoc = (
  palette /*: Palette */,
  fontStyleEnabled /*: FontStyles */
) => [
  {
    name: `AsciiDoc - Heading 0-6`,
    scope: [
      `markup.heading.heading-0.asciidoc`,
      `markup.heading.heading-1.asciidoc`,
      `markup.heading.heading-2.asciidoc`,
      `markup.heading.heading-3.asciidoc`,
      `markup.heading.heading-4.asciidoc`,
      `markup.heading.heading-5.asciidoc`,
      `markup.heading.heading-6.asciidoc`,
    ],
    settings: {
      foreground: palette.magenta,
    },
  },
  {
    name: `AsciiDoc - Fenced Bode Block`,
    scope: [
      `text.asciidoc markup.code markup.heading`,
      `text.asciidoc markup.code markup.heading entity.name.function`,
    ],
    settings: {
      foreground: palette.blue,
    },
  },
  {
    name: `AsciiDoc - Bold`,
    scope: [`markup.bold.asciidoc`],
    settings: {
      fontStyle: `bold`,
    },
  },
  {
    name: `AsciiDoc - Italic`,
    scope: [`markup.italic.asciidoc`],
    settings: {
      fontStyle: `italic`,
    },
  },

  {
    name: `AsciiDoc - Italic`,
    scope: [`markup.raw.monospace.asciidoc`],
    settings: {
      fontStyle: `bold`,
      foreground: palette.blue,
    },
  },
];

module.exports = asciidoc;
