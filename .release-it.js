module.exports = {
  //   npm: false (commenting out but leaving, )
  github: {
    release: false,
    releaseNotes: false
  },
  git: {
    changelog:
      "npx auto-changelog --stdout --commit-limit false -u --template ./release-it/changelog.hbs",
    requireUpstream: false
  },
  scripts: {
    beforeStage: "npx auto-changelog -p"
  },
  plugins: {
    "./release-it/version.js": {}
  }
};
