#!/bin/sh
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | ssh-add -
git config --global user.email "caiovscerobot@gmail.com"
git config --global user.name "CAIO VSCE Robot"

git branch master -u origin/master

yarn install
yarn run release
