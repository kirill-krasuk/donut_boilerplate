#!/bin/bash

source ./bin/colors.sh

BABEL_CACHE_PATH=./.cache/babel-register
echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \

BABEL_CACHE_PATH=$BABEL_CACHE_PATH yarn node ./dist/server.js 2> ./logs/server_errrors.log