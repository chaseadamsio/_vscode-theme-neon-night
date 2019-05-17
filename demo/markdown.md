# Neon Night

> A dark theme for VS Code

## Getting Started

You can find the Neon Night theme in the [Visual Studio Code Marketplace](https://marketplhub.visualstudio.com/items?itemName=chaseadamsio.vscode-theme-neon-night).

## Installation

1. Open the **Extensions** sidebar in VS Code. `View → Extensions`
2. Search for `Neon Night`, choose "Neon Night" by **chaseadamsio**
3. Click **Install** to install it
4. Click **Reload** to reload your editor
5. Navigate to File > `Preferences` > Color Theme > **Neon Night** or any of _the_ variants listed
6. 🎉🎉 You're all set.

---

| test                | test | test |
| :------------------ | :--- | :--- |
| blah blah blah this | is a | cell |

```diff
+ this is some text
- this is removing some stuff
! this is modifying some stuff
```

```diff
diff --git a/filea.extension b/fileb.extension
index d28nd309d..b3nu834uj 111111
--- a/filea.extension
+++ b/fileb.extension
@@ -1,6 +1,6 @@
-oldLine
+newLine
! modified
```

## Development

Run the `develop:init` task:

```sh
yarn develop:init
```

```js
const foo = require("foo");
console.log("hello world");
```

This will create a symlink in the VS Code extensions and build the theme for the first time. Afte running this, follow the Installation instructions to load the theme.

Designed with 💜 by **[Chase Adams](https://github.com/chaseadamsio)**. You can find me on [Twitter at chaseadamsio](https://twitter.com/chaseadamsio).
