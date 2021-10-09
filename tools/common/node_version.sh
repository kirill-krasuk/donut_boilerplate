#! /bin/bash

NODE_VERSION=$(node -v)

VERSION_FROM_NVMRC=$(cat ./.nvmrc)

source ./tools/common/colors.sh

if [ $NODE_VERSION != $VERSION_FROM_NVMRC ]; then
    echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} 🙅‍♂️ Node version ${NODE_VERSION} did not match with version from config"
    echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} 🔧 Setting Node version from .nvmrc \n"

    source $NVM_DIR/nvm.sh 2> /dev/null

    # unset nvm PREFIX environment 
    unset PREFIX

    nvm alias default $VERSION_FROM_NVMRC
    nvm use
else
    echo -e "\n${BBlack}${On_Blue} INFO ${Color_Off} Current Node version ${NODE_VERSION} \n"
fi
