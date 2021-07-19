#! /bin/bash
while test $# -gt 0; do
      case "$1" in
          -i)
              # shift
              first_argument=$1
              shift
              ;;
          -a)
              # shift
              second_argument=$1
              shift
              ;;
          *)
              echo "$1 is not a recognized flag!"
              exit
              ;;
      esac
done 
# git add . 
# git commit -m $1
# git push origin $2


echo 'first' + $first_argument
echo $second_argument
# echo 'Push sucessfully'