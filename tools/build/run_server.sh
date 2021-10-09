#!/bin/bash

source ./tools/common/variables.sh
source ./tools/common/colors.sh

bash ./tools/common/mklogs.sh

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \

yarn node ./dist/server.js 2> ./logs/run_server.error.log
