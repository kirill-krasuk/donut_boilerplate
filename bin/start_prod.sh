#!/bin/bash

# this is npm context, because this script
# must running from package.json

bash ./bin/build_prod.sh &&
echo -e "\n🍩 Start application 🍩\n" &&
node ./dist/server.js 2>> ./logs/error_build.log
