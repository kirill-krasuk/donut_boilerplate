#!/bin/bash

# this is npm context, because this script
# must running from app root

bash ./bin/build_prod.sh &&
echo -e "\n🍩 Start application 🍩\n" &&
node ./dist/server.js 2>> ./logs/error_build.log
