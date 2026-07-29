# Time Complexity: O(n) 
def find_max(numbers):
    highest = numbers[0]
    for num in numbers: 
        if num > highest:
            highest = num
    return highest


# Time Complexity: O(n²)
def print_pairs(numbers):
    for i in numbers:         
        for j in numbers: 
            print(i, j)

#Linked List Basics
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")

ll = LinkedList()
ll.append(10)
ll.print_list()


#Stack (LIFO) & String Reversal

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0


text = "eyerus bisrat"
my_stack = Stack()

for letter in text:
    my_stack.push(letter)
reversed_text = ""
while not my_stack.is_empty():
    reversed_text += my_stack.pop()

print("Original:", text)
print("Reversed:", reversed_text)




#Queue (FIFO) & Bank Simulation

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)  

    def dequeue(self):
        return self.items.pop(0) 

    def is_empty(self):
        return len(self.items) == 0


bank_queue = Queue()
bank_queue.enqueue("tt")
bank_queue.enqueue("bb")
bank_queue.enqueue("kk")

print("   Serving Bank Customers    ")
while not bank_queue.is_empty():
    customer = bank_queue.dequeue()
    print(f"Now serving: {customer}")