workflow "Pull Request" {
  on = "push"
  resolves = ["Check Code"]
}

workflow "Build, Test & Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Check Code" {
    uses ="./.github/actions/check"
}

action "Tag" {
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "Publish" {
  # needs = "Tag"
  uses = "lannonbr/vsce-action@master"
  args = "publish -p $VSCE_TOKEN"
  secrets = ["VSCE_TOKEN"]
}
