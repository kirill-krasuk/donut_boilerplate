#!/bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh
source ./tools/constants/colors.sh

bash ./tools/common/mklogs.sh

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \

yarn node ./dist/server.js 2> ./logs/run_server.error.log
