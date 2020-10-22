#!/bin/bash

if [ ! -d "./node_modules/" ]; then 
    bash ./scripts/prune_caches.sh

    echo "⚠️ Dependencies not installed"
    echo -e "\nInstalling...\n"

    npm i && sleep 1 &&

    echo -e "\n✅ Dependencies installed successfully\n"
fi
