import os
import sys
# create folder in python
app = sys.argv[1]

scss_default_files = [
    '_reset',
    '_variables',
    '_extends',
    '_mixins',
    '_global',
    '_animations',
    '_googleicons',
    'style',
    'main'
]

js_default_files = [
    'ajax',
    'index'
]

html_default_files = [
    'index',
    'layout',
    'main',
    'nav',
    'section'
]

# form_default_files = [
#     'form'
# ]

template_path = f'./{app}/templates/{app}'
staic_js_path = f'./{app}/static/{app}/js'
staic_scss_path = f'./{app}/static/{app}/scss'
# form_path = f'./{app}'

all_path = [
    {template_path: {'html': html_default_files}},
    {staic_js_path: {'js': js_default_files}},
    {staic_scss_path: {'scss': scss_default_files}},
]

for path in all_path:
    for file_path, file in path.items():
        [[ext, files]] = file.items()
        if not os.path.exists(file_path):
            os.makedirs(file_path)
        for file in files:
            file = f"{file_path}/{file}.{ext}"
            with open(file, 'a') as f:
                os.utime(file, None)
