#! /bin/bash

source ./tools/common/variables.sh

bash $COMMON/banner.sh &&
bash $COMMON/mklogs.sh
bash $COMMON/prune_caches.sh
source $COMMON/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building production server" &&

NODE_ENV=production \
ts-node -P $TOOLS_TS_CONFIG $BUNDLE_TOOL_PATH -c $WEBPACK_SERVER_CFG \
# 2> ./logs/server_bundle.error.log

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building production client" &&

BABEL_ENV=production NODE_ENV=production \
ts-node -P $TOOLS_TS_CONFIG $BUNDLE_TOOL_PATH -c $WEBPACK_CLIENT_CFG \
# 2> ./logs/client_bundle.error.log

if [ $? -eq 1 ]; then
    echo -e "🚨🚨🚨 Bundling ${BRed}failed${Color_Off} 🚨🚨🚨"
    exit 1
else
    echo -e "✨✨✨ Bundling ${BGreen}passed${Color_Off} ✨✨✨"
    exit 0
fi
