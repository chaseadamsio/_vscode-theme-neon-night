module.exports = {
  npm: false,
  github: {
    release: true,
    releaseNotes: true,
    changelog: "npx auto-changelog -p --stdout --commit-limit false"
  },
  scripts: {
    beforeStage: "npx auto-changelog -p"
  }
};
