#!/bin/bash

bash ./scripts/node_version.sh

if [[ ! -d "./node_modules/" && -d "./.cache" ]]; then
    echo "⚠️ Detecting old caches"
    sleep 1
    echo -e "\nDeleting...\n"
    rm -rf ./.cache && sleep 1 &&
    echo -e "✅ Cache clear\n"
    sleep 1
fi

if [ ! -d "./node_modules/" ]; then 
    echo "⚠️ Dependencies not installed"
    echo -e "\nInstalling...\n"
    npm i && sleep 1 &&
    echo -e "✅ Dependencies installed successfully\n"
fi

echo -e "\n🍩 Start application 🍩\n"

./node_modules/.bin/cross-env TS_NODE_PROJECT=tsconfig.webpack.json webpack \
    --config ./webpack/webpack.server.ts --mode=development
./node_modules/.bin/cross-env BABEL_ENV=development NODE_ENV=development node ./dist/server.js