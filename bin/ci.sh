#!/bin/bash

bash ./bin/run_banner.sh
bash ./bin/node_version.sh

source ./bin/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} Run test suites"
bash ./bin/test.sh &&

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run typescript checking"
yarn tsc --noEmit -p . &&
echo -e "${BBlack}${On_Green} PASS ${Color_Off} Type check was successful"

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run eslint checking"
yarn eslint . &&
echo -e "${BBlack}${On_Green} PASS ${Color_Off} Code style check was successful"

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run stylelinitng"
yarn stylelint './src/**/*.ts' &&
echo -e "${BBlack}${On_Green} PASS ${Color_Off} Stylelint check was successful\n"

if [ $? -eq 1 ]; then
    echo -e "🚨🚨🚨 CI ${BRed}failed${Color_Off} 🚨🚨🚨"
    exit 1
else
    echo -e "✨✨✨ CI ${BGreen}passed${Color_Off} in ${SECONDS} seconds ✨✨✨"
    exit 0
fi
