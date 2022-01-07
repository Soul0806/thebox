import re
import sys

app = sys.argv[1]
with open('./Thebox/urls.py', 'r+') as f:
    file_content = f.read()
    match = re.sub(r'(\)\)(?!,))',
                   rf"\1,\n    path('{app}/', include('{app}.urls'))\n",
                   file_content)
    f.seek(0)
    f.write(match)
    f.truncate()

f.close()
