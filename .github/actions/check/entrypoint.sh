#!/bin/sh -l

set -e
yarn install && yarn test:check-code
