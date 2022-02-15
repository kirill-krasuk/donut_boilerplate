#! /bin/bash

source ./tools/common/variables.sh

bash $COMMON/banner.sh
bash $COMMON/node_version.sh

source $COMMON/colors.sh

echo -e "${BBlack}${On_Blue} INFO ${Color_Off} Run tests suites"

case $1 in
    w) yarn jest --env=jsdom --watch -c=$JEST_CONFIG_PATH;;
    c) yarn jest --env=jsdom --coverage -c=$JEST_CONFIG_PATH;;
    u) yarn jest --env=jsdom -u -c=$JEST_CONFIG_PATH;;
    *) yarn jest --runInBand --env=jsdom -c=$JEST_CONFIG_PATH;;
esac