import time
from collections import deque

# List vs Dictionary Search 
# Create a list and dictionary with 10,000,000 items
size = 10_000_000
test_list = list(range(size))
test_dict = {i: True for i in range(size)}
target = size - 1 

# Search in List - O(n)
start = time.time()
target in test_list
list_time = time.time() - start

# Search in Dictionary - O(1)
start = time.time()
target in test_dict
dict_time = time.time() - start

print("    1. Search Time Comparison ")
print(f"List search time:       {list_time:.6f} seconds")
print(f"Dictionary search time: {dict_time:.6f} seconds")


# List vs Deque Insertions at Beginning
n_inserts = 10_000

# Insert at index 0 of a List - O(n)
test_list = []
start = time.time()
for i in range(n_inserts):
    test_list.insert(0, i)
list_insert_time = time.time() - start

# Insert (appendleft) in a Deque - O(1)
test_deque = deque()
start = time.time()
for i in range(n_inserts):
    test_deque.appendleft(i)
deque_insert_time = time.time() - start

print("\n   2. Insert at Beginning Comparison   ")
print(f"List insert(0) time:   {list_insert_time:.6f} seconds")
print(f"Deque appendleft time: {deque_insert_time:.6f} seconds")