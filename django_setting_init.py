import re
import sys

# app = 'stock'
app = sys.argv[1]

PROJECT_NAME = 'Thebox'
TAB = ' ' * 4

with open(f"./{PROJECT_NAME}/settings.py", 'r+') as f:
    file_content = f.read()
    match = re.sub(r'(INSTALLED_APPS = \[\n)',
                   rf"\1{TAB}'{app}',\n",
                   file_content)
    f.seek(0)
    f.write(match)
f.close()

with open(f"./{PROJECT_NAME}/urls.py", 'r+') as f:
    file_content = f.read()
    match = re.sub(r'(\)\)(?!,))',
                   rf"\1,\n{TAB}path('{app}/', include('{app}.urls'))",
                   file_content)
    f.seek(0)
    f.write(match)
f.close()

with open(f"./{app}/urls.py", 'w') as f:
    urls_content = f"""from django.urls import path
from . import views

app_name = '{app}'
urlpatterns = [
    path('', views.index, name='index')
]
"""
    f.write(urls_content)

f.close()

with open(f"./{app}/views.py", 'r+') as f:
    file_content = f.read()
    match = re.sub(r'(.+render\n)',
                   rf"\g<1>from django.http import HttpResponse ",
                   file_content)
    new_content = f"""{match}
def index(request):
    return HttpResponse('{app} Application Successful')
"""
    f.seek(0)
    f.write(new_content)
f.close()
