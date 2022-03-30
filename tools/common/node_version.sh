#! /bin/bash

NODE_VERSION=$(node -v)

VERSION_FROM_NVMRC=$(cat ./.nvmrc)

# shellcheck disable=SC1091
source ./tools/constants/colors.sh

if [ "$NODE_VERSION" != "$VERSION_FROM_NVMRC" ]; then
    echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} 🙅‍♂️ Node version ${NODE_VERSION} did not match with version from config"
    echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} 🔧 Setting Node version from .nvmrc \n"

    # shellcheck disable=SC1091
    source "$NVM_DIR"/nvm.sh 2> /dev/null

    # unset nvm PREFIX environment 
    unset PREFIX

    nvm alias default "$VERSION_FROM_NVMRC"
    nvm use
else
    echo -e "\n${COLOR_BOLD_BLACK}${BACKGROUND_COLOR_BLUE} INFO ${COLOR_OFF} Current Node version ${NODE_VERSION} \n"
fi
