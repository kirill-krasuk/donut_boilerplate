#!/bin/bash

source ./bin/variables.sh
source ./bin/colors.sh

bash ./bin/mklogs.sh

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \

yarn node ./dist/server.js 2> ./logs/run_server.error.log