#!/bin/bash

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)

echo used node version ${NODE_VERSION}
echo used npm version ${NPM_VERSION}

ls -la

# run next command if previos success
./node_modules/.bin/tsc --noEmit -p . &&
./node_modules/.bin/eslint . &&
./node_modules/.bin/jest --env=jsdom &&
./node_modules/.bin/stylelint './src/**/*.ts'

if [ $? -eq 1 ]; then
    echo 🚨🚨🚨 CI failed 🚨🚨🚨
    exit 1
else
    echo ✨✨✨CI passed in ${SECONDS} seconds✨✨✨
    exit 0
fi
