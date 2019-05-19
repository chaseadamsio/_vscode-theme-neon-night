workflow "Check, Build, Release & Publish" {
  on = "push"
  resolves = ["Publish to VS Marketplace"]
}

action "Check Code" {
    uses ="./.github/actions/check"
}

action "Is Master Branch" {
  needs = "Check Code"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Generate Release" {
  needs = "Is Master Branch"
  uses = "./.github/actions/release"
  secrets = ["GITHUB_TOKEN"]
}

action "Publish to VS Marketplace" {
  needs = "Generate Release"
  uses = "./.github/actions/publish"
  secrets = ["VSCE_TOKEN", "GITHUB_TOKEN"]
}
