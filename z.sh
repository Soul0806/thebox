#!/bin/bash

case $1 in
        path )
            cp z.sh /usr/local/bin/
            ls -l /usr/local/bin/z.sh
            exit 0
            ;;
        v ) 
            source ./venv/bin/activate
            # source ./venv/Scripts/activate
            exit 1
            ;;
        run )
            python3 -m webbrowser http://127.0.0.1:8000/$2
            python3 manage.py runserver             
            exit 1 
            ;;
        -m ) 
            git add . 
            git commit -m $2
            git push origin $3
            exit 1
            ;;
        p )
            git add . 
            git commit -m "fast commit~"
            git push origin main
            exit 1
            ;;
        create-app )             
            if [ -d "./$2" ]; then 
                echo $2 already exists.
            else    
                python3 manage.py startapp $2
                python3 ./django_setting_init.py $2
                python3 ./django_asset_init.py $2
            fi
            python3 -m webbrowser http://127.0.0.1:8000/$2
            python3 manage.py runserver            
            exit 0   
            ;;
        test ) 
            echo 'test'
            exit 0
            ;;            
esac
