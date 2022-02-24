from math import *

def isPrime(n):
    print("hi")
    for i in range(2, int(sqrt(n))):
        if n % i == 0: return True
        else: return False

n = int(input("Enter number: "))
print(isPrime(n))
