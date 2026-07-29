class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
            return

        current = self.root
        while True:
            if value < current.value:
                if current.left is None:
                    current.left = Node(value)
                    break
                current = current.left
            else:
                if current.right is None:
                    current.right = Node(value)
                    break
                current = current.right

    def search(self, target):
        current = self.root
        while current:
            if target == current.value:
                return True
            elif target < current.value:
                current = current.left
            else:
                current = current.right
        return False



tree = BST()
for num in [50, 30, 70, 20, 40, 60]:
    tree.insert(num)

print("Is 40 in the tree?", tree.search(40))
print("Is 100 in the tree?", tree.search(100)) 