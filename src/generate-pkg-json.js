const pkgjson = require(`../package.json`);

const { name, version, description, license, repository, publisher } = pkgjson;

const homepage = pkgjson.repository.url;

const marketplaceRoot = `https://marketplace.visualstudio.com/items`;
const marketplaceURL = `${marketplaceRoot}/${publisher}.${pkgjson.name}`;

const marketplaceBadgeRoot = `https://vsmarketplacebadge.apphb.com`;

module.exports = themeInfo => ({
  name,
  version,
  description,
  license,
  repository,
  homepage,
  publisher,
  displayName: `Neon Night`,
  engines: {
    vscode: `^1.33.0`
  },
  icon: `static/favicon-128.png`,
  galleryBanner: {
    color: `#3C2843`,
    theme: `dark`
  },
  categories: [`Themes`],
  keywords: [`theme`, `dark`, `purple`, `neon`],
  contributes: {
    themes: [
      {
        label: `Neon Night`,
        uiTheme: `vs-dark`,
        path: `./neon-night-theme.json`
      },
      {
        label: `Neon Night (No Bold)`,
        uiTheme: `vs-dark`,
        path: `./neon-night-no-bold-theme.json`
      },
      {
        label: `Neon Night (No Italic)`,
        uiTheme: `vs-dark`,
        path: `./neon-night-no-italic-theme.json`
      },
      {
        label: `Neon Night - (No Font Styles)`,
        uiTheme: `vs-dark`,
        path: `./neon-night-no-style-theme.json`
      }
    ]
  },
  bugs: {
    url: `${homepage}/issues`
  },
  badges: [
    {
      url: `${marketplaceBadgeRoot}/version/${publisher}.${pkgjson.name}.svg`,
      href: marketplaceURL,
      description: `Extension Version`
    },
    {
      url: `${marketplaceBadgeRoot}/installs/${publisher}.${pkgjson.name}.svg`,
      href: marketplaceURL,
      description: `Extension Installs`
    },
    {
      url: `${marketplaceBadgeRoot}/rating/${publisher}.${pkgjson.name}.svg`,
      href: marketplaceURL,
      description: `Extension Rating`
    }
  ]
});
