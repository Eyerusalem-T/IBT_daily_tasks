# Recursive Version
def factorial_recursive(n):
    if n <= 1: 
        return 1
    return n * factorial_recursive(n - 1)
# Iterative Version (using a loop)
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result


print( factorial_recursive(5))  
print( factorial_iterative(5))

#Recursion with Lists (Sum of List)
def sum_list(numbers):
    if len(numbers) == 0: 
        return 0
    return numbers[0] + sum_list(numbers[1:])

my_numbers = [1, 2, 3, 4, 5]
print( sum_list(my_numbers))

#linear search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i 
    return -1


numbers = [10, 25, 30, 45, 50]
print(linear_search(numbers, 30))  
print(linear_search(numbers, 99))