#!/bin/bash

source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh
bash $COMMON/node_version.sh
bash $COMMON/mklogs.sh

source ./tools/constants/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building development version\n"

BABEL_CACHE_PATH=$BABEL_CACHE_PATH NODE_ENV=development \
ts-node -P $TOOLS_TS_CONFIG $BUNDLE_TOOL_PATH -c ./config/webpack/webpack.server.ts \
./logs/server_bundle.error.log

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \
BABEL_CACHE_PATH=$BABEL_CACHE_PATH BABEL_ENV=development NODE_ENV=development \
yarn node ./dist/server.js \
./logs/run_server.error.log
