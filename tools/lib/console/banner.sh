#! /bin/bash

# shellcheck disable=1091
source ./tools/constants/variables.sh

ts-node -P "$TOOLS_TS_CONFIG" ./tools/common/showBanner.ts
