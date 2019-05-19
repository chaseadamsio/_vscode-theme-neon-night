const pkgJSON = require(`../package.json`);
const { Plugin } = require(`release-it`);

class MyPlugin extends Plugin {
  getLatestVersion() {
    return pkgJSON.version.trim();
  }
}

module.exports = MyPlugin;
