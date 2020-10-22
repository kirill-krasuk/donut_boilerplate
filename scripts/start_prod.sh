#!/bin/bash

bash ./scripts/build_prod.sh &&
node ./dist/server.js
