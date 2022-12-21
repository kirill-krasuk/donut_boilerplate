#! /bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh

source ./tools/constants/colors.sh

echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Run tests suites"

case $1 in
w) yarn jest --env=jsdom --watch -c="$JEST_CONFIG_PATH" ;;
c) yarn jest --env=jsdom --coverage -c="$JEST_CONFIG_PATH" ;;
u) yarn jest --env=jsdom -u -c="$JEST_CONFIG_PATH" ;;
*) yarn jest --runInBand --env=jsdom -c="$JEST_CONFIG_PATH" ;;
esac
