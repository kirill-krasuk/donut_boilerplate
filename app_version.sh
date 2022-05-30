#! /bin/bash

env=$1

sh -c "
. \"$env\"

envsubst <index.tmpl.html >index.html
