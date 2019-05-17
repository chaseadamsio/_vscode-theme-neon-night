// https://code.visualstudio.com/api/references/theme-color#merge-conflicts
const mergeConflicts = colors => ({
  "merge.currentHeaderBackground": colors.green77,
  "merge.currentContentBackground": colors.green33,
  "merge.incomingHeaderBackground": colors.blue77,
  "merge.incomingContentBackground": colors.blue33,
  "merge.commonContentBackground": colors.black,
  "merge.commonHeaderBackground": colors.black
});

module.exports = mergeConflicts;
