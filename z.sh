#!/bin/bash

# if [ $1 == 'activate' ]; then
#     source ./venv/Scripts/activate
#     exit 1
# fi

# if [ $1 == 'run' ]; then
#     python3 manage.py runserver
#     exit 1
# fi
case $1 in
        v ) 
            source ./venv/Scripts/activate
            exit 1
            ;;
        run ) 
           python manage.py runserver
            exit 1
            ;;
        -m ) 
            git add . 
            git commit -m $2
            git push origin $3
            exit 1
            ;;
esac

git add . 
git commit -m "fast commit~"
git push origin main

# if [ $# -eq 0 ]; then
#     git add . 
#     git commit -m "fast commit"
#     git push origin main
# else
#     git add . 
#     git commit -m $1
#     git push origin $2
# fi

# echo 'Push successfully !'

# while test $# -gt 0; do
#       case "$1" in
#           -i)
#               shift
#               first_argument=$1
#               shift
#               ;;
#           *)
#               echo "$1 is not a recognized flag!"
#               exit 1
#               ;;
#       esac
# done 
