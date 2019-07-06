// @flow
const path = require(`path`);
const fs = require(`fs`);

const generateTheme = require(`./generate-theme`);
const pkgJSON = require(`./generate-pkg-json`);
const palette = require(`./palette`);
const themeInfo = {
  name: `neon-night`,
  displayName: `Neon Night`,
  variant: ``
};

const themePath = (variant /*: ?string */) => {
  const name = variant ? `${themeInfo.name}-${variant}` : themeInfo.name;
  return path.resolve(__dirname, `..`, `themes`, `${name}-theme.json`);
};

const pkgJSONPath = path.resolve(__dirname, `..`, `themes`, `package.json`);

const main = async function(themePath, themeInfo, fontStyleEnabled) {
  await fs.writeFileSync(
    themePath(themeInfo.variant),
    JSON.stringify(
      generateTheme({
        displayName: themeInfo.name,
        palette,
        fontStyleEnabled
      }),
      null,
      2
    ),
    `utf-8`
  );

  await fs.writeFileSync(
    pkgJSONPath,
    JSON.stringify(pkgJSON(themeInfo), null, 2),
    `utf-8`
  );
};

// default
main(themePath, themeInfo, { italic: true, bold: true });

// no font style
main(
  themePath,
  { variant: `no-style`, ...themeInfo },
  { italic: false, bold: false }
);

// no bold style
main(
  themePath,
  { variant: `no-bold`, ...themeInfo },
  { italic: true, bold: false }
);

// no italic style
main(
  themePath,
  { variant: `no-italic`, ...themeInfo },
  { italic: false, bold: true }
);
