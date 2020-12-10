#!/bin/bash

# this is npm context, because this script
# must running from package.json
CONTEXT=./bin
NM_BIN=./node_modules/.bin

bash $CONTEXT/node_version.sh
bash $CONTEXT/install_deps.sh

echo -e "\n🔧 Building development version \n"

$NM_BIN/cross-env TS_NODE_PROJECT=./config/webpack/tsconfig.webpack.json webpack \
    --config ./config/webpack/webpack.server.ts --mode=development &&
echo -e "\n🍩 Start application 🍩\n" &&
$NM_BIN/cross-env BABEL_ENV=development NODE_ENV=development node ./dist/server.js
