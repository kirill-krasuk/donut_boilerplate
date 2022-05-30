#! /bin/bash

dotenv=$(cat .env)

echo ${dotenv/APP_VERSION=/APP_VERSION=300}
