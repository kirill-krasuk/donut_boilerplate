#!/bin/bash

bash ./scripts/node_version.sh

if [ ! -d "./node_modules/" ]; then
    echo node_modules not found
    echo check if dependencies are installed
    exit 1
fi

# run next command if previos success
./node_modules/.bin/tsc --noEmit -p . &&
./node_modules/.bin/eslint . &&
./node_modules/.bin/jest --env=jsdom -c=./config/jest/jest.config.js &&
./node_modules/.bin/stylelint './src/**/*.ts'

if [ $? -eq 1 ]; then
    echo 🚨🚨🚨 CI failed 🚨🚨🚨
    exit 1
else
    echo ✨✨✨CI passed in ${SECONDS} seconds✨✨✨
    exit 0
fi
