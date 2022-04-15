import re
import sys

app = sys.argv[1]

# layout_input = open('./init/layout.html', 'r')
# layout_output = open(f'./{app}/templates/spider/layout.html', 'w')

# layout_content = layout_input.read()
# layout_output.write(layout_content)

# index_input = open('./init/index.html', 'r')
# index_output = open(f'./{app}/templates/spider/index.html', 'w')

# content = index_input.read()
# match = re.sub(r'{}', rf"{app}", content)
# index_output.write(match)

scss_input = open('./init/style.scss', 'r')
scss_output = open(f'./{app}/static/spider/scss/style.scss', 'w')

scss_content = scss_input.read()
scss_output.write(scss_content)
# print(match)
