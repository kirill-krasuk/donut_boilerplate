#!/bin/bash

# shellcheck disable=SC1091
source ./tools/constants/colors.sh

if [[ -d "./.cache" ]]; then
	echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_YELLOW} WARN ${COLOR_OFF} ⚠️ Detecting old caches"
	sleep 1
	echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Deleting..."

	rm -rf ./.cache && sleep 1 &&
		echo -e "${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_GREEN} PASS ${COLOR_OFF} ✅ Cache clear\n"
	sleep 1
fi
