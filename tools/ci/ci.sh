#! /bin/bash

source ./tools/constants/variables.sh

bash ./tools/lib/console/banner.sh
bash $COMMON/node_version.sh

source ./tools/constants/colors.sh

echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Run jest testing"
TEST=$(circleci tests glob **/__tests__/*.{ts,tsx,js,jsx} | circleci tests split --split-by=timings)
yarn jest -c=$CI_JEST_CONFIG_PATH $TEST

if [ $? -eq 1 ]; then
    echo -e "🚨🚨🚨 Tests ${BRed}failed${Color_Off} 🚨🚨🚨"
    exit 1
else
    echo -e "✨✨✨ Tests ${BGreen}passed${Color_Off} in ${SECONDS} seconds ✨✨✨"
    exit 0
fi
