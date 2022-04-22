#!/bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh
source ./tools/constants/colors.sh

bash ./tools/common/mklogs.sh

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_GREEN} START ${COLOR_OFF} 🍩 application 🍩\n" &&
	yarn node ./dist/server.js 2>./logs/run_server.error.log
