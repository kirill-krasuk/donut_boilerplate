#!/bin/bash

PATH_TO_JEST=./node_modules/.bin/jest
CONFIG_PATH=./config/jest/jest.config.js

case $1 in
    w) $PATH_TO_JEST --env=jsdom --watch -c=$CONFIG_PATH;;
    c) $PATH_TO_JEST --env=jsdom --coverage -c=$CONFIG_PATH;;
    u) $PATH_TO_JEST --env=jsdom -u -c=$CONFIG_PATH;;
    *) $PATH_TO_JEST --env=jsdom -c=$CONFIG_PATH;;
esac