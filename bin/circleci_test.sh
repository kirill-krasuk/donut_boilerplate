#! /bin/bash

source ./bin/variables.sh

TEST=$(circleci tests glob **/__tests__/*.tsx? | circleci tests split --split-by=timings)
yarn jest -c=$JEST_CONFIG_PATH $TEST