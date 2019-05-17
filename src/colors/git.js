// https://code.visualstudio.com/api/references/theme-color#git-colors
const git = colors => ({
  "gitDecoration.addedResourceForeground": colors.green,
  "gitDecoration.modifiedResourceForeground": colors.magenta,
  "gitDecoration.deletedResourceForeground": colors.red
});

module.exports = git;
