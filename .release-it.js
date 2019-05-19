module.exports = {
  npm: false,
  github: {
    release: true,
    releaseNotes: true
  },
  git: {
    changelog:
      "npx auto-changelog --stdout --commit-limit false -u --template ./src/changelog.hbs"
  },
  scripts: {
    beforeStage: "npx auto-changelog -p --template ./changelog.hbs"
  }
};
