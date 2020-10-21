#!/bin/bash

source $NVM_DIR/nvm.sh;

NODE_VERSION=$(node -v)

VERSION_FROM_NVMRC=$(cat ./.nvmrc)

if [ $NODE_VERSION != $VERSION_FROM_NVMRC ]; then
    echo -e "\n🙅‍♂️ Node version ${NODE_VERSION} did not match with version from config"
    echo -e "\n🔧 Setting Node version from .nvmrc \n"
    nvm use $VERSION_FROM_NVMRC
else
    echo -e "\nCurrent Node version ${NODE_VERSION} \n"
fi
