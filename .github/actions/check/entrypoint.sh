#!/bin/sh
set -e
yarn install && yarn test:check-code
