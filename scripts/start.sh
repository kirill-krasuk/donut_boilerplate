#!/bin/bash

CONTEXT=./scripts
NM_BIN=./node_modules/.bin

bash $CONTEXT/node_version.sh
bash $CONTEXT/install_deps.sh

echo -e "\n🍩 Start application 🍩\n"

$NM_BIN/cross-env TS_NODE_PROJECT=./config/webpack/tsconfig.webpack.json webpack \
    --config ./config/webpack/webpack.server.ts --mode=development
$NM_BIN/cross-env BABEL_ENV=development NODE_ENV=development node ./dist/server.js
