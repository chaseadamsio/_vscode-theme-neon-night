#!/bin/sh
eval $(ssh-agent -s)
ssh-add <(echo "$GIT_SSH_PRIV_KEY")
git config --global user.email "caiovscerobot@gmail.com"
git config --global user.name "CAIO VSCE Robot"

yarn run release
