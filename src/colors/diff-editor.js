// https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
const diffEditor = colors => ({
  "diffEditor.insertedTextBackground": `${colors.green}11`,
  "diffEditor.removedTextBackground": `${colors.red}11`,
  "diffEditor.border": colors.magenta77
});

module.exports = diffEditor;
