class TreeNode:
    def __init__(self, name):
        self.name = name
        self.children = []  

    def add_child(self, child_node):
        self.children.append(child_node)


def print_tree(node, level=0):
    
    indent = "    " * level + "|-->" if level > 0 else ""
    print(indent + node.name)

    for child in node.children:
        print_tree(child, level + 1)


# BUILD THE BANK HIERARCHY


head_office = TreeNode("Head Office")
bole_branch = TreeNode("Bole Branch")
piassa_branch = TreeNode("Piassa Branch")
bole_teller = TreeNode("Teller")
bole_loan_officer = TreeNode("Loan Officer")
head_office.add_child(bole_branch)
head_office.add_child(piassa_branch)
bole_branch.add_child(bole_teller)
bole_branch.add_child(bole_loan_officer)

print("    BANK HIERARCHY TREE")
print_tree(head_office)