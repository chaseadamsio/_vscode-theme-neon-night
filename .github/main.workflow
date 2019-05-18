workflow "Pull Request" {
  on = "push"
  resolves = ["Check Code"]
}

action "Check Code" {
    uses ="./.github/actions/check"
}
