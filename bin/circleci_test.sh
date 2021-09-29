#! /bin/bash

TEST=$(circleci tests glob **/__tests__/*.tsx? | circleci tests split --split-by=timings)
yarn jest $TEST