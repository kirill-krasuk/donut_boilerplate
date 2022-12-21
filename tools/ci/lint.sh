#! /bin/bash

# shellcheck disable=SC1091
source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh

source ./tools/constants/colors.sh

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Run typescript checking"
TSC_ERRORS=$(yarn types)

if [ -n "$TSC_ERRORS" ]; then
	echo -e "🚨🚨🚨 Linting ${COLOR_BOLD_RED}failed${COLOR_OFF} 🚨🚨🚨"
	echo "$TSC_ERRORS"
	exit 1
fi

echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_GREEN} PASS ${COLOR_OFF} Type check was successful"

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Run eslint checking"
yarn lint &&
	echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_GREEN} PASS ${COLOR_OFF} Code style check was successful"

echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Run stylelinitng"
yarn lint:styled &&
	echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_GREEN} PASS ${COLOR_OFF} Stylelint check was successful\n"

if [ $? -eq 1 ]; then
	echo -e "🚨🚨🚨 Linting ${COLOR_BOLD_RED}failed${COLOR_OFF} 🚨🚨🚨"
	exit 1
else
	echo -e "✨✨✨ Linting ${COLOR_BOLD_GREEN}passed${COLOR_OFF} in ${SECONDS} seconds ✨✨✨"
	exit 0
fi
