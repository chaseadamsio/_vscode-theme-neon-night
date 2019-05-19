workflow "Pull Request" {
  on = "push"
  resolves = ["Check Code"]
}

workflow "Build, Test & Publish" {
  on = "push"
  resolves = ["Release"]
}

action "Check Code" {
    uses ="./.github/actions/check"
}

action "Tag" {
  needs = "Check Code"
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "Release" {
  needs = "Tag"
  uses = "./.github/actions/release"
  secrets = ["GITHUB_TOKEN", "SSH_PRIVATE_KEY"]
}

# action "Publish" {
  # needs = "Tag"
  # uses = "lannonbr/vsce-action@master"
  # args = "publish -p $VSCE_TOKEN"
  # secrets = ["GITHUB_TOKEN"]
  # secrets = ["VSCE_TOKEN"]
# }
