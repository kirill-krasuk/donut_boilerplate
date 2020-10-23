#!/bin/bash

# this is npm context, because this script
# must running from package.json

bash ./scripts/build_prod.sh &&
echo -e "\n🍩 Start application 🍩\n" &&
node ./dist/server.js
