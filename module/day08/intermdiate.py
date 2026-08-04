#buble sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

        print(f"Pass {i + 1}:", arr) 

data = [5, 3, 8, 2, 1]
print( data)
bubble_sort(data)

#binarey search
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2 
        if arr[mid] == target:
            return mid 
        elif arr[mid] < target:
            low = mid + 1 
        else:
            high = mid - 1 
    return -1  

sorted_numbers = [10, 20, 30, 40, 50, 60]
print( binary_search(sorted_numbers, 40))  