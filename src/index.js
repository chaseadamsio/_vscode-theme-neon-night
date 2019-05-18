const path = require("path");
const fs = require("fs");

const generateTheme = require("./generate-theme");
const pkgJSON = require("./generate-pkg-json");
const colors = require("./palette");
const themeInfo = {
  name: "neon-night"
};

const themePath = path.resolve(
  __dirname,
  "..",
  "themes",
  `${themeInfo.name}-theme.json`
);

const pkgJSONPath = path.resolve(__dirname, "..", "themes", `package.json`);

const main = async function(themePath, themeInfo) {
  await fs.writeFileSync(
    themePath,
    JSON.stringify(generateTheme(themeInfo.name, colors), null, 2),
    "utf-8"
  );

  await fs.writeFileSync(
    pkgJSONPath,
    JSON.stringify(pkgJSON(themeInfo), null, 2),
    "utf-8"
  );
};

main(themePath, themeInfo);
