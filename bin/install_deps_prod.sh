#!/bin/bash

# this is npm context, because this script
# must running from package.json

if [ ! -d "./node_modules/" ]; then 
    if [ -d "./.cache" ]; then
        bash ./bin/prune_caches.sh
    fi

    echo "⚠️ Dependencies not installed"
    echo -e "\nInstalling...\n"

    npm ci --production && sleep 1 &&

    echo -e "\n✅ Dependencies installed successfully\n"
fi
