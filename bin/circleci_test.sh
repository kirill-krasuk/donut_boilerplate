TEST=$(circleci tests glob **/__tests__/*.(j|t)sx? | circleci tests split --split-by=timings)
yarn jest $TEST