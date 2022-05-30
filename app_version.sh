#! /bin/bash

source .env

export APP_VERSION=$APP_VERSION

envsubst <index.tmpl.html >index.html
