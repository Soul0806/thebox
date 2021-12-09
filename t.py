import time

class Item: 
    rate = 0.9
    all = []
    def __init__(self, name: str = None, price: float = 0, *argu , **kargu):
      self.name = name
      self.price = price
      self._var = 123

      Item.all.append(self)    

    def discount(self):
      self.price = self.price * self.rate
      return self.price
        
    def __repr__(self):
      return f"{self.__class__.__name__}-{self.name}(${self.price})"

    @property
    def var(self):
      return self.__var

    # @name.setter
    # def name(self, value):
    #   self.__name = value
    
    @property
    def var(self):
      return self._var

    @var.setter
    def var(self, value):
      self._var = value

class Dog(Item):
  pass
      
def check_prime(number):   
   for divisor in range(2, int(number ** 0.5) + 1):        
    if number % divisor == 0:            
        return False    
    return True  

class Prime():
  def __init__(self, max):        
    self.max = max       
    self.number = 1
  def __iter__(self):            
    return self

  def __next__(self):       
     self.number += 1        
     if self.number >= self.max:            
       raise StopIteration       
     elif check_prime(self.number):            
       return self.number      
     else:    
       return self.__next__()

arr = [1, 2, 3]

d = Item()

d._var = 1111111222
print(d.var)



