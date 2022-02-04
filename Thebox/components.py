from pprint import pprint


class Components():
    def __init__(self):
        pass


    def ul_li(self, set, *args):
        ul = {}
        concate = result = ''
  
        if 'class' in args[0]:
            ul['class'] = args[0]['class']

        for row in set:
            for elemnt in args[1]:
                val = getattr(row, elemnt['key'])
                concate += f'<{elemnt["tag"]} class="{elemnt["class"]}">{val}</{elemnt["tag"]}>'
            concate = f'<li>{concate}</li>'
            result += concate
            concate =''

        result = f'<ul class="{ul["class"]}">{result}</ul>'
        
        return result