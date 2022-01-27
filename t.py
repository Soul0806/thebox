import sys
import re
import pathlib
import csv
from pprint import pprint
import pandas as pd
import subprocess


# str = '1111-aaa'
# result_find = re.findall(r'^\d\d\d(?:-)|-\d\d\d$', str)
# result_search = re.search(r'([^^])(\w+)\d{1}', str)
# print(result_find)

# name = ["ABC", "TUV", "XYZ", "PQR"]
# degree = ["BBA", "MBA", "BSC", "MSC"]
# score = [98, 90, 88, 95]
# dict = {'name': name, 'degree': degree, 'score': score}
# df = pd.DataFrame(dict)
# df.to_csv('/Users/soul/Documents/test.csv')


with open('/Users/soul/Documents/tires.csv', newline='') as f:
    rows = csv.reader(f)
    tires = {}
    for row in rows:
        for item in row:
            if len(item) >= 3 and re.findall(r'-', item):
                inch = item[-2:]
                if(tires.get(inch) is None):
                    tires[inch] = [item]
                else:
                    tires[inch].append(item)

# keys = list(tires.keys())
# pprint(sorted(keys))
f.close()

dict = {}

tires_key = sorted(list(tires.keys()), reverse=True)
for index, key in enumerate(tires_key):
    dict[key] = tires[key]

# pprint(dict)

# f = pd.DataFrame.from_dict(dict, orient='index')
# df.to_csv('/Users/soul/Documents/test.csv')

# subprocess.run(["open", "/Users/soul/Documents/test.csv"])


# with open('temp.py', 'r+') as f:
#     str = f.read()
#     reg = r"INSTALLED_APPS = \[([^]]+)"

#     reg_1 = r"(INSTALLED_APPS = \[\n)([^]]+)"
#     ori_text = re.sub(reg_1, r"\2", str)


# class Item:
#     rate = 0.9
#     all = []
#     def __init__(self, name: str = None, price: float = 0, *argu , **kargu):
#       self.name = name
#       self.price = price
#       self._var = 123

#       Item.all.append(self)

#     def discount(self):
#       self.price = self.price * self.rate
#       return self.price

#     def __repr__(self):
#       return f"{self.__class__.__name__}-{self.name}(${self.price})"

#     @property
#     def var(self):
#       return self.__var

#     # @name.setter
#     # def name(self, value):
#     #   self.__name = value

#     @property
#     def var(self):
#       return self._var

#     @var.setter
#     def var(self, value):
#       self._var = value

# class Dog(Item):
#   pass

# def check_prime(number):
#    for divisor in range(2, int(number ** 0.5) + 1):
#     if number % divisor == 0:
#         return False
#     return True

# class Prime():
#   def __init__(self, max):
#     self.max = max
#     self.number = 1
#   def __iter__(self):
#     return self

#   def __next__(self):
#      self.number += 1
#      if self.number >= self.max:
#        raise StopIteration
#      elif check_prime(self.number):
#        return self.number
#      else:
#        return self.__next__()

# arr = [1, 2, 3]

# d = Item()

# d._var = 1111111222
# print(d.var)
