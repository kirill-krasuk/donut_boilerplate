#!/bin/bash

CONTEXT=./scripts
NM_BIN=./node_modules/.bin

WEBPACK_TS_PATH=./config/webpack/tsconfig.webpack.json
WEBPACK_SERVER_CFG=./config/webpack/webpack.server.ts
WEBPACK_CLIENT_CFG=./config/webpack/webpack.prod.ts

bash $CONTEXT/node_version.sh
bash $CONTEXT/install_deps.sh

# # clear previouos build assets
rm -rf ./public/**/build

$NM_BIN/cross-env TS_NODE_PROJECT=$WEBPACK_TS_PATH  NODE_ENV=production webpack \
    --config $WEBPACK_SERVER_CFG --mode=production &&
$NM_BIN/cross-env TS_NODE_PROJECT=$WEBPACK_TS_PATH \
    BABEL_ENV=production NODE_ENV=production webpack --config $WEBPACK_CLIENT_CFG \
    --mode=production
