#!/bin/bash

# this is npm context, because this script
# must running from app root
CONTEXT=./bin
TOOLS_TS_CONFIG=./tools/tsconfig.json
BABEL_CACHE_PATH=./.cache/babel-register

bash $CONTEXT/run_banner.sh
bash $CONTEXT/node_version.sh
bash $CONTEXT/mklogs.sh

source $CONTEXT/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building development version\n"

BABEL_CACHE_PATH=$BABEL_CACHE_PATH  NODE_ENV=development \
ts-node -P $TOOLS_TS_CONFIG ./tools/scripts/bundle.ts -c ./config/webpack/webpack.server.ts \
2> ./logs/bundle_errors_1.log

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \
BABEL_CACHE_PATH=$BABEL_CACHE_PATH  BABEL_ENV=development NODE_ENV=development \
yarn node ./dist/server.js \
2> ./logs/runtime_errors.log
