#! /bin/bash

TOOLS_TS_CONFIG=./tools/tsconfig.json

ts-node -P $TOOLS_TS_CONFIG ./tools/scripts/showBanner.ts
