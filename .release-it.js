module.exports = {
  github: {
    release: true
  },
  git: {
    changelog:
      "npx auto-changelog --stdout --commit-limit false -u --template ./release-it/changelog.hbs"
  },
  scripts: {
    beforeStage: "npx auto-changelog -p"
  },
  plugins: {
    "./release-it/version.js": {}
  }
};
