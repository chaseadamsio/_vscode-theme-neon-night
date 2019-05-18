// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#merge-conflicts
const mergeConflicts = (palette /*: Palette */) => ({
  "merge.currentHeaderBackground": palette.green77,
  "merge.currentContentBackground": palette.green33,
  "merge.incomingHeaderBackground": palette.blue77,
  "merge.incomingContentBackground": palette.blue33,
  "merge.commonContentBackground": palette.black,
  "merge.commonHeaderBackground": palette.black
});

module.exports = mergeConflicts;
