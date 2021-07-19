#! /bin/bash

if [ $# -eq 0 ]; then
    git add . 
    git commit -m "fast commit"
    git push origin main
else
    git add . 
    git commit -m $1
    git push origin $2
fi

echo 'Push successfully'

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
