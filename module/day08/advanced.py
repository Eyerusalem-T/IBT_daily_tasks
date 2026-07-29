#recursive 
def reverse_string(s):
    if len(s) == 0: 
        return ""
    return s[-1] + reverse_string(s[:-1])

text = "hiiiiiiiii"
print(reverse_string(text))  


#recursive to count the number occurances  
def count_occurrences(arr, target):
    if len(arr) == 0:  
        return 0
    
    match = 1 if arr[0] == target else 0
    return match + count_occurrences(arr[1:], target)


numbers = [1, 2, 3, 2, 4, 2, 5]
print( count_occurrences(numbers, 2)) 

#sorting comparision b.n selection and insertion

def selection_sort(arr):
    arr = arr.copy() 
    comparisons = 0
    swaps = 0
    n = len(arr)

    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            comparisons += 1
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            swaps += 1

    return arr, comparisons, swaps


def insertion_sort(arr):
    arr = arr.copy()
    comparisons = 0
    swaps = 0
    n = len(arr)

    for i in range(1, n):
        key = arr[i]
        j = i - 1
        
        while j >= 0:
            comparisons += 1
            if arr[j] > key:
                arr[j + 1] = arr[j]  
                swaps += 1  
                j -= 1
            else:
                break
        arr[j + 1] = key

    return arr, comparisons, swaps

test_list = [29, 10, 14, 37, 13]
sel_sorted, sel_comp, sel_swaps = selection_sort(test_list)
ins_sorted, ins_comp, ins_swaps = insertion_sort(test_list)

print("1st List:", test_list)
print(f"Selection Sort -> Sorted: {sel_sorted} | Comparisons: {sel_comp} | Swaps: {sel_swaps}")
print(f"Insertion Sort -> Sorted: {ins_sorted} | Comparisons: {ins_comp} | Shifts/Swaps: {ins_swaps}")


#two pointer techniqe

def two_sum_sorted(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return (arr[left], arr[right])  
        elif current_sum < target:
            left += 1   
        else:
            right -= 1 

    return None  


sorted_numbers = [2, 7, 11, 15, 20]
target = 9
pair = two_sum_sorted(sorted_numbers, target)
print(f"Pair that adds to {target}:", pair) 
