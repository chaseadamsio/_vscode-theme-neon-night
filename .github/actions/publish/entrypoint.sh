#!/bin/sh -l

yarn install \
    && yarn prepublish \
    && yarn vscode:publish
