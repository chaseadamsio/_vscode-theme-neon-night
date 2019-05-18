// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#git-colors
const git = (palette /*: Palette */) => ({
  "gitDecoration.addedResourceForeground": palette.green,
  "gitDecoration.modifiedResourceForeground": palette.magenta,
  "gitDecoration.deletedResourceForeground": palette.red
});

module.exports = git;
