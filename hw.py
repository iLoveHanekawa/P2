from math import *

def isPrime(n):
    for i in range(2, int(sqrt(n)) + 1):
        if n % i == 0: return False
    return True

n = int(input("Enter number: "))
print(isPrime(n))
