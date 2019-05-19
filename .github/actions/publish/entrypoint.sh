#!/bin/sh
yarn install \
    && yarn prepublish \
    && yarn vscode:publish
