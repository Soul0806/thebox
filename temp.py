# import random
# from pprint import pprint 
hash_t = { 11: 0, 3: 1 }

arr = [ 1 , 2, 3, 5 ,11]

for key, n in enumerate(arr):
    if(n in hash_t):
        print(key)

# for index in range(1, 9999):
#     arr.append(index)
# random.shuffle(arr)

# with open('test.txt', 'w') as f:
#     f.write(str(arr))

# f.close()
