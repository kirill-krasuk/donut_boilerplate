#!/bin/bash

source ./bin/variables.sh

bash $CONTEXT/run_banner.sh
bash $CONTEXT/node_version.sh
bash $CONTEXT/mklogs.sh

source $CONTEXT/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building development version\n"

BABEL_CACHE_PATH=$BABEL_CACHE_PATH  NODE_ENV=development \
ts-node -P $TOOLS_TS_CONFIG ./cli/scripts/bundle.ts -c ./config/webpack/webpack.server.ts \
./logs/server_bundle.error.log

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \
BABEL_CACHE_PATH=$BABEL_CACHE_PATH  BABEL_ENV=development NODE_ENV=development \
yarn node ./dist/server.js \
./logs/run_server.error.log
