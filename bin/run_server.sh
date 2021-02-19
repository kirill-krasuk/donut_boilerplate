#!/bin/bash

source ./bin/colors.sh

bash ./bin/mklogs.sh

echo -e "\n${BBlack}${On_Green} START ${Color_Off} 🍩 application 🍩\n" && \

yarn node ./dist/server.js 2> ./logs/server_errors.log