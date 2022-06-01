#! /bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh
bash "$COMMON"/node_version.sh

source ./tools/constants/colors.sh

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Run jest testing"

# shellcheck disable=SC2035
TEST=$(circleci tests glob **/__tests__/*.{ts,tsx,js,jsx} | circleci tests split --split-by=timings)
# shellcheck disable=SC2086
yarn jest --runInBand --env=jsdom -c="$CI_JEST_CONFIG_PATH" $TEST

if [ $? -eq 1 ]; then
	echo -e "🚨🚨🚨 Tests ${COLOR_BOLD_RED}failed${COLOR_OFF} 🚨🚨🚨"
	exit 1
else
	echo -e "✨✨✨ Tests ${COLOR_BOLD_GREEN}passed${COLOR_OFF} in ${SECONDS} seconds ✨✨✨"
	exit 0
fi
