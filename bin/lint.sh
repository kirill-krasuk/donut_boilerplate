#!/bin/bash

source ./bin/variables.sh

bash $CONTEXT/run_banner.sh
bash $CONTEXT/node_version.sh

source $CONTEXT/colors.sh

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run typescript checking"
yarn types &&
echo -e "${BBlack}${On_Green} PASS ${Color_Off} Type check was successful"

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run eslint checking"
yarn lint &&
echo -e "${BBlack}${On_Green} PASS ${Color_Off} Code style check was successful"

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run stylelinitng"
yarn lint:styled &&
echo -e "${BBlack}${On_Green} PASS ${Color_Off} Stylelint check was successful\n"

if [ $? -eq 1 ]; then
    echo -e "🚨🚨🚨 Linting ${BRed}failed${Color_Off} 🚨🚨🚨"
    exit 1
else
    echo -e "✨✨✨ Linting ${BGreen}passed${Color_Off} in ${SECONDS} seconds ✨✨✨"
    exit 0
fi
