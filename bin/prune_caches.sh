#!/bin/bash

source ./bin/colors.sh

if [[ -d "./.cache" ]]; then
    echo -e "${BBlack}${On_Yellow} WARN ${Color_Off} ⚠️ Detecting old caches"
    sleep 1
    echo -e "${BBlack}${On_Blue} INFO ${Color_Off} Deleting..."

    rm -rf ./.cache && sleep 1 &&

    echo -e "${BBlack}${On_Green} PASS ${Color_Off} ✅ Cache clear\n"
    sleep 1
fi
