#!/bin/bash

NM_BIN=./node_modules/.bin

bash ./scripts/node_version.sh

if [ ! -d "./node_modules/" ]; then
    echo node_modules not found
    echo check if dependencies are installed
    exit 1
fi

# run next command if previos success
$NM_BIN/tsc --noEmit -p . &&
$NM_BIN/eslint . &&
$NM_BIN/jest --env=jsdom -c=./config/jest/jest.config.js &&
$NM_BIN/stylelint './src/**/*.ts'

if [ $? -eq 1 ]; then
    echo 🚨🚨🚨 CI failed 🚨🚨🚨
    exit 1
else
    echo ✨✨✨CI passed in ${SECONDS} seconds✨✨✨
    exit 0
fi
