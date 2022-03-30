#! /bin/bash

export CONTEXT=./tools
export CI_CONTEXT=$CONTEXT/ci
export BUILD_CONTEXT=$CONTEXT/build
export COMMON=$CONTEXT/common

export TOOLS_TS_CONFIG=./tools/tsconfig.json
export BUNDLE_TOOL_PATH=./tools/lib/build/compile.ts
export JEST_CONFIG_PATH=./config/jest/jest.config.js
export CI_JEST_CONFIG_PATH=./config/jest/ci.jest.config.js

export WEBPACK_SERVER_CFG=./config/webpack/webpack.server.ts
export WEBPACK_CLIENT_CFG=./config/webpack/webpack.prod.ts

export BABEL_CACHE_PATH=./.cache/babel-register

export FORCE_COLOR=1
