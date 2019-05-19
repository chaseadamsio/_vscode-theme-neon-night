workflow "Build, Test & Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Check Code" {
    uses ="./.github/actions/check"
}

action "Master" {
  needs = "Check Code"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Release" {
  needs = "Master"
  uses = "./.github/actions/release"
  secrets = ["GITHUB_TOKEN"]
}

action "Publish" {
  needs = "Release"
  uses = "./.github/actions/publish"
  secrets = ["VSCE_TOKEN", "GITHUB_TOKEN"]
}
