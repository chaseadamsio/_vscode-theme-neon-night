// @flow
const path = require(`path`);
const fs = require(`fs`);

const generateTheme = require(`./generate-theme`);
const pkgJSON = require(`./generate-pkg-json`);
const palette = require(`./palette`);
const themeInfo = {
  name: `neon-night`,
  displayName: `Neon Night`
};

const themePath = (variant /*: ?string */) => {
  const name = variant ? `${themeInfo.name}-${variant}` : themeInfo.name;
  console.log(`writing file ${name}-theme.json`);
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
main(themePath, { ...themeInfo, variant: `` }, { italic: true, bold: true });

// no font style
main(
  themePath,
  { ...themeInfo, variant: `no-style` },
  { italic: false, bold: false }
);

// no bold style
main(
  themePath,
  { ...themeInfo, variant: `no-bold` },
  { italic: true, bold: false }
);

// no italic style
main(
  themePath,
  { ...themeInfo, variant: `no-italic` },
  { italic: false, bold: true }
);
