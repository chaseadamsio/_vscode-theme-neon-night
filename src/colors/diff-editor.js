// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
const diffEditor = (palette /*: Palette */) => ({
  "diffEditor.insertedTextBackground": `${palette.green}11`,
  "diffEditor.removedTextBackground": `${palette.red}11`,
  "diffEditor.border": palette.magenta77
});

module.exports = diffEditor;
