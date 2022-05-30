#!/bin/sh

# envsub - subsitute environment variables

env=$1
template=$2

sh -c "
. \"$env\"

cat <<EOF
$(cat "$template")
EOF"
