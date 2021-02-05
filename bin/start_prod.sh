#!/bin/bash

# this is npm context, because this script
# must running from app root

bash ./bin/build_prod.sh &&
bash ./bin/run_prod.sh
