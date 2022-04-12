#! /bin/bash

git filter-branch --commit-filter '
    if [ "$GIT_AUTHOR_EMAIL" = "wrong-email6@gmail.com" ];
    then
        GIT_AUTHOR_EMAIL="correct-email@gmail.com";
        git commit-tree "$@";
    else
        git commit-tree "$@";
    fi' HEAD
