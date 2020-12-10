#!/bin/bash

# this is npm context, because this script
# must running from package.json

NM_BIN=./node_modules/.bin

bash ./bin/node_version.sh

if [ ! -d "./node_modules/" ]; then
    echo node_modules not found
    echo check if dependencies are installed
    exit 1
fi

# run next command if previos success
bash ./bin/test.sh &&
$NM_BIN/tsc --noEmit -p . &&
$NM_BIN/eslint . &&
$NM_BIN/stylelint './src/**/*.ts'

if [ $? -eq 1 ]; then
    echo 🚨🚨🚨 CI failed 🚨🚨🚨
    exit 1
else
    echo ✨✨✨CI passed in ${SECONDS} seconds✨✨✨
    exit 0
fi
