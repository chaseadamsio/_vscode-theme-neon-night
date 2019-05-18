// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#text-colors
const text = (palette /*: Palette */) => ({
  "textCodeBlock.background": palette.black,
  "textBlockQuote.background": palette.blackest,
  "textPreformat.foreground": palette.white,
  "textLink.foreground": palette.magenta,
  "textLink.activeForeground": palette.magenta,
  "textPreformat.foreground": palette.magenta
});

module.exports = text;
