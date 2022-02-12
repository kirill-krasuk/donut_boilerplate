#! /bin/bash

CONTEXT=./tools
CI_CONTEXT=$CONTEXT/ci
BUILD_CONTEXT=$CCONTEXT/build
COMMON=$CONTEXT/common

TOOLS_TS_CONFIG=./tools/tsconfig.json
BUNDLE_TOOL_PATH=./tools/build/bundle.ts
JEST_CONFIG_PATH=./config/jest/jest.config.js
CI_JEST_CONFIG_PATH=./config/jest/ci.jest.config.js

WEBPACK_SERVER_CFG=./config/webpack/webpack.server.ts
WEBPACK_CLIENT_CFG=./config/webpack/webpack.prod.ts

BABEL_CACHE_PATH=./.cache/babel-register

export FORCE_COLOR=1
