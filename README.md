# Neon Night

> A dark theme for VS Code


![Full Preview](static/preview/full-preview.png)

| JavaScript | React | Vue |
|:---:|:---:|:---:|
| ![JavaScript Screen](static/preview/javascript.png) |![React Screen](static/preview/react.png) | ![Vue Screen](static/preview/vue.png) |

| Go | Dockerfile | HTML |
|:---:|:---:|:---:|
| ![Go Screen](static/preview/go.png) | ![Dockerfile screen](static/preview/docker.png) | ![HTML Screen](static/preview/html.png) |

| JSON | TOML | YAML |
|:---:|:---:|:---:|
| ![JSON Screen](static/preview/json.png) | ![TOML Screen](static/preview/toml.png) | ![YAML screen](static/preview/yaml.png)


## Getting Started

You can find the Neon Night theme in the [Visual Studio Code Marketplace](https://marketplhub.visualstudio.com/items?itemName=chaseadamsio.vscode-theme-neon-night).

## Installation

1. Open the **Extensions** sidebar in VS Code. `View → Extensions`
2. Search for `Neon Night`, choose "Neon Night" by **chaseadamsio**
3. Click **Install** to install it
4. Click **Reload** to reload VS Code
5. From the menu bar click: Code > Preferences > Color Theme > **Neon Night** (or any of the variants listed)
6. 🎉🎉 Enjoy!

## Development

Run the `develop:init` task:

```sh
yarn develop:init
```

This will create a symlink in the VS Code extensions and build the theme for the first time. Afte running this, follow the Installation instructions to load the theme.

## Publishing

- **`vscode:prepublish`** - Creates the `neon-night.json` and `package.json` in `<ROOT>/themes` and copies relevant files (README, license, static assets)
- **`vscode:publish`** - Publishes `themes` as the root directory for the extension.

Designed with 💜 by **[Chase Adams](https://github.com/chaseadamsio)**. You can find me on [Twitter at chaseadamsio](https://twitter.com/chaseadamsio).
