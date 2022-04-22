#! /bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh &&
	bash "$COMMON"/mklogs.sh
bash "$COMMON"/prune_caches.sh

source ./tools/constants/colors.sh

echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} 🔧 Building production server" &&
	NODE_ENV=production \
		ts-node -P "$TOOLS_TS_CONFIG" "$BUNDLE_TOOL_PATH" -c "$WEBPACK_SERVER_CFG" \
		2>./logs/server_bundle.error.log

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} 🔧 Building production client" &&
	BABEL_ENV=production NODE_ENV=production \
		ts-node -P "$TOOLS_TS_CONFIG" "$BUNDLE_TOOL_PATH" -c "$WEBPACK_CLIENT_CFG" \
		2>./logs/client_bundle.error.log

if [ $? -eq 1 ]; then
	echo -e "🚨🚨🚨 Bundling ${COLOR_BOLD_RED}failed${COLOR_OFF} 🚨🚨🚨"
	exit 1
else
	echo -e "✨✨✨ Bundling ${COLOR_BOLD_GREEN}passed${COLOR_OFF} ✨✨✨"
	exit 0
fi
