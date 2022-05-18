#!/bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh
bash "$COMMON"/node_version.sh
bash "$COMMON"/mklogs.sh

source ./tools/constants/colors.sh
source ./tools/common/clear_dist.sh

echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} 🔧 Building development version\n"

BABEL_CACHE_PATH=$BABEL_CACHE_PATH NODE_ENV=development \
	ts-node -P "$TOOLS_TS_CONFIG" "$BUNDLE_TOOL_PATH" -c ./config/webpack/webpack.server.ts \
	./logs/server_bundle.error.log

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_GREEN} START ${COLOR_OFF} 🍩 application 🍩\n"

BABEL_CACHE_PATH=$BABEL_CACHE_PATH BABEL_ENV=development NODE_ENV=development \
	yarn node ./dist/server.js \
	./logs/run_server.error.log
