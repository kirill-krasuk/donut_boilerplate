#! /bin/bash

CONTEXT=./bin

TOOLS_TS_CONFIG=./tools/tsconfig.json
BUNDLE_TOOL_PATH=./tools/scripts/bundle.ts

WEBPACK_SERVER_CFG=./config/webpack/webpack.server.ts
WEBPACK_CLIENT_CFG=./config/webpack/webpack.prod.ts

bash $CONTEXT/run_banner.sh &&
bash $CONTEXT/mklogs.sh
bash $CONTEXT/prune_caches.sh
source ./bin/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building production server" &&

NODE_ENV=production \
yarn ts-node -P $TOOLS_TS_CONFIG $BUNDLE_TOOL_PATH -c $WEBPACK_SERVER_CFG \
2> ./logs/bundle_errors_1.log

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Building production client" &&

BABEL_ENV=production NODE_ENV=production \
yarn ts-node -P $TOOLS_TS_CONFIG $BUNDLE_TOOL_PATH -c $WEBPACK_CLIENT_CFG \
2> ./logs/bundle_errors_2.log

if [ $? -eq 1 ]; then
    echo -e "🚨🚨🚨 Bundling ${BRed}failed${Color_Off} 🚨🚨🚨"
    exit 1
else
    echo -e "✨✨✨ Bundling ${BGreen}passed${Color_Off} ✨✨✨"
    exit 0
fi