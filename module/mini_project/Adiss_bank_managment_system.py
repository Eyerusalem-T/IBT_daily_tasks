import abc
import heapq
from collections import deque


#SINGLETON PATTERN: 
class BankConfig:

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(BankConfig, cls).__new__(cls)
            cls._instance.interest_rate = 0.05  
            cls._instance.overdraft_limit = 500.0 
            cls._instance.large_withdrawal_threshold = 3000.0  
        return cls._instance


#OBSERVER PATTERN: Notifications
class Observer(abc.ABC):
    @abc.abstractmethod
    def update(self, account_num: str, amount: float, message: str):
        pass


class SMSAlertService(Observer):

    def update(self, account_num: str, amount: float, message: str):
        print(f"\n ALERT Account {account_num}: {message} ({amount:.2f})")


class AuditLogService(Observer):

    def update(self, account_num: str, amount: float, message: str):
        print(f"AUDIT Logged alert for {account_num} - {message} ({amount:.2f})")


# ABSTRACT BASE CLASS & INHERITANCE
class Account(abc.ABC):
    #this class defining common interface (Open/Closed Principle)

    def __init__(self, account_num: str, owner: str, initial_balance: float = 0.0):
        self.account_num = account_num
        self.owner = owner
        self._balance = initial_balance
        self.observers: list[Observer] = []

    def attach_observer(self, observer: Observer):
        self.observers.append(observer)

    def _notify(self, amount: float, message: str):
        for obs in self.observers:
            obs.update(self.account_num, amount, message)

    @property
    def balance(self) -> float:
        return self._balance

    @abc.abstractmethod
    def withdraw(self, amount: float) -> bool:
        pass

    def deposit(self, amount: float) -> bool:
        if amount <= 0:
            print(" Deposit amount must be positive.")
            return False
        self._balance += amount
        print(f" Deposited {amount:.2f}. New Balance: {self._balance:.2f}")
        return True

    @abc.abstractmethod
    def apply_interest(self):
        pass


class SavingsAccount(Account):

    def withdraw(self, amount: float) -> bool:
        if amount <= 0:
            print(" Withdrawal must be positive.")
            return False
        if amount > self._balance:
            print(" Insufficient funds Account.")
            return False

        self._balance -= amount
        print(f"Withdrew {amount:.2f}. New Balance: {self._balance:.2f}")

        if amount >= BankConfig().large_withdrawal_threshold:
            self._notify(amount, "Large Withdrawal Detected")
        return True

    def apply_interest(self):
        rate = BankConfig().interest_rate
        interest = self._balance * rate
        self._balance += interest
        print(f"Applied {rate * 100}% interest ({interest:.2f}) to Account {self.account_num}. New Balance: {self._balance:.2f}")


class CurrentAccount(Account):

    def withdraw(self, amount: float) -> bool:
        if amount <= 0:
            print(" Withdrawal must be positive.")
            return False
        limit = BankConfig().overdraft_limit
        if self._balance - amount < -limit:
            print(f" limit exceeded (Max limit: {limit:.2f}).")
            return False

        self._balance -= amount
        print(f"Withdrew {amount:.2f}. New Balance: {self._balance:.2f}")

        if amount >= BankConfig().large_withdrawal_threshold:
            self._notify(amount, "Large Withdrawal Detected")
        return True

    def apply_interest(self):
        pass


# FACTORY PATTERN
class AccountFactory:

    @staticmethod
    def create_account(acc_type: str, account_num: str, owner: str, initial_deposit: float) -> Account:
        sms = SMSAlertService()
        audit = AuditLogService()

        if acc_type == "1":
            acc = SavingsAccount(account_num, owner, initial_deposit)
        elif acc_type == "2":
            acc = CurrentAccount(account_num, owner, initial_deposit)
        else:
            raise ValueError("Invalid account type selection.")

        acc.attach_observer(sms)
        acc.attach_observer(audit)
        return acc




# TREE: Organizational Hierarchy
class TreeNode:
    def __init__(self, name: str, title: str):
        self.name = name
        self.title = title
        self.children: list[TreeNode] = []

    def add_child(self, child_node):
        self.children.append(child_node)

    def print_tree(self, level=0):
        prefix = "    " * level + "|--> " if level > 0 else ""
        print(f"{prefix}{self.name} ({self.title})")
        for child in self.children:
            child.print_tree(level + 1)


#  BST: Customer Account Search 
class BSTNode:
    def __init__(self, account: Account):
        self.account = account
        self.left = None
        self.right = None


class AccountBST:

    def __init__(self):
        self.root = None

    def insert(self, account: Account):
        if not self.root:
            self.root = BSTNode(account)
        else:
            self._insert_rec(self.root, account)

    def _insert_rec(self, node: BSTNode, account: Account):
        if int(account.account_num) < int(node.account.account_num):
            if node.left is None:
                node.left = BSTNode(account)
            else:
                self._insert_rec(node.left, account)
        else:
            if node.right is None:
                node.right = BSTNode(account)
            else:
                self._insert_rec(node.right, account)

    def search(self, account_num: str) -> Account | None:
        return self._search_rec(self.root, account_num)

    def _search_rec(self, node: BSTNode, account_num: str) -> Account | None:
        if node is None or node.account.account_num == account_num:
            return node.account if node else None
        if int(account_num) < int(node.account.account_num):
            return self._search_rec(node.left, account_num)
        return self._search_rec(node.right, account_num)


#GRAPH: Money Transfer Network 
class TransferGraph:

    def __init__(self):
        self.adj_list: dict[str, list[str]] = {}

    def add_customer(self, name: str):
        if name not in self.adj_list:
            self.adj_list[name] = []

    def add_transfer(self, sender: str, receiver: str):
        self.add_customer(sender)
        self.add_customer(receiver)
        self.adj_list[sender].append(receiver)

    def bfs(self, start_customer: str):
        #Breadth-First Search (BFS) for exploring transfer connections.
        if start_customer not in self.adj_list:
            print(" Customer not found in transfer network.")
            return

        visited = set([start_customer])
        queue = deque([start_customer])

        print(f"\n BFS Transfer Connections starting from {start_customer}:")
        while queue:
            current = queue.popleft()
            print(f" -> {current}", end="")
            for neighbor in self.adj_list[current]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        print("\n")



# 3. RECURSION, SEARCHING & SORTING (Transaction Analyzer)

class TransactionAnalyzer:

    def __init__(self):
        self.transactions = []

    def add_transaction(self, amount: float, date_str: str, trans_type: str):
        self.transactions.append({"amount": amount, "date": date_str, "type": trans_type})

    # RECURSIVE CALCULATIONS 
    def recursive_total_balance(self, index=0) -> float:
        if index == len(self.transactions):
            return 0.0
        t = self.transactions[index]
        val = t["amount"] if t["type"] == "DEPOSIT" else -t["amount"]
        return val + self.recursive_total_balance(index + 1)

    def recursive_filter_threshold(self, threshold: float, index=0) -> list:
        if index == len(self.transactions):
            return []
        rest = self.recursive_filter_threshold(threshold, index + 1)
        if self.transactions[index]["amount"] >= threshold:
            return [self.transactions[index]] + rest
        return rest

    # --- SORTING ALGORITHMS ---
    def sort_by_amount(self):
        n = len(self.transactions)
        for i in range(1, n):
            key = self.transactions[i]
            j = i - 1
            while j >= 0 and self.transactions[j]["amount"] > key["amount"]:
                self.transactions[j + 1] = self.transactions[j]
                j -= 1
            self.transactions[j + 1] = key

    # --- SEARCHING ALGORITHMS ---
    def linear_search_by_type(self, trans_type: str) -> list:
        results = []
        for t in self.transactions:
            if t["type"].upper() == trans_type.upper():
                results.append(t)
        return results

    def binary_search_by_amount(self, target_amount: float) -> int:
        self.sort_by_amount()  
        low, high = 0, len(self.transactions) - 1
        while low <= high:
            mid = (low + high) // 2
            if self.transactions[mid]["amount"] == target_amount:
                return mid
            elif self.transactions[mid]["amount"] < target_amount:
                low = mid + 1
            else:
                high = mid - 1
        return -1





# 4. MAIN BANK SYSTEM

class AddisBankSystem:
    def __init__(self):
        self.accounts_dict = {}  # O(1) Fast lookup by account number
        self.account_bst = AccountBST()  # BST for hierarchical search
        self.transaction_stack = []  # Stack for Undo operations: O(1) Push/Pop
        self.priority_heap = []  # Heap for urgent processing: O(log n) Push/Pop
        self.transfer_graph = TransferGraph()  # Graph for customer transfers
        self.analyzer = TransactionAnalyzer()  # Sorting / Searching / Recursion engine

        # Organizational Root Tree
        self.hierarchy_root = TreeNode("Addis Bank Head Office", "Executive")
        bole = TreeNode("Bole Branch", "Branch")
        piassa = TreeNode("Piassa Branch", "Branch")
        bole.add_child(TreeNode("5kilo", "Branch Manager"))
        bole.add_child(TreeNode("megenagna", "Loan Officer"))
        self.hierarchy_root.add_child(bole)
        self.hierarchy_root.add_child(piassa)

        self.account_counter = 1001

    def run(self):
        while True:
            print("\n==================================================")
            print("  |        ADDIS BANK MANAGEMENT SYSTEM         | ")
            print("==================================================")
            print(" 1. Create Savings Account")
            print(" 2. Create Current Account")
            print(" 3. Deposit Money")
            print(" 4. Withdraw Money")
            print(" 5. Undo Last Transaction (Stack)")
            print(" 6. Apply Interest to All Savings Accounts")
            print(" 7. Show All Accounts (Polymorphism)")
            print(" 8. Bank Hierarchy & Branch Management (Tree)")
            print(" 9. Customer Transfer Network (Graph & BFS)")
            print("10. Priority Queue & Urgent Alerts (Heap)")
            print("11. Transaction Analyzer (Recursion & Sorting)")
            print("12. Search Account in Binary Search Tree (BST)")
            print("13. Exit System")
            print("==================================================")

            choice = input("Enter your choice (1-13): ").strip()

            try:
                if choice == "1" or choice == "2":
                    self._create_account(choice)
                elif choice == "3":
                    self._deposit()
                elif choice == "4":
                    self._withdraw()
                elif choice == "5":
                    self._undo_last_transaction()
                elif choice == "6":
                    self._apply_interest()
                elif choice == "7":
                    self._show_all_accounts()
                elif choice == "8":
                    self._manage_hierarchy()
                elif choice == "9":
                    self._manage_transfer_network()
                elif choice == "10":
                    self._manage_priority_queue()
                elif choice == "11":
                    self._run_analyzer()
                elif choice == "12":
                    self._search_bst()
                elif choice == "13":
                    print("\nThank you for choosing Addis Bank! Goodbye.")
                    break
                else:
                    print(" Invalid selection. Please enter a valid menu number.")
            except Exception as e:
                print(f" Error occurred: {e}")

    #   IMPLEMENTATIONS 

    def _create_account(self, acc_type: str):
        owner = input("Enter customer full name: ").strip()
        if not owner:
            print(" Name cannot be empty.")
            return

        try:
            deposit = float(input("Enter initial deposit amount : "))
            if deposit < 0:
                print(" Initial deposit cannot be negative.")
                return
        except ValueError:
            print(" Invalid birr.")
            return

        acc_num = str(self.account_counter)
        self.account_counter += 1

        # Factory creation
        account = AccountFactory.create_account(acc_type, acc_num, owner, deposit)

        # Save across multi-structure lookups
        self.accounts_dict[acc_num] = account  # Dictionary: O(1) lookup
        self.account_bst.insert(account)  # BST Insertion
        self.transfer_graph.add_customer(owner)  # Graph vertex

        if deposit > 0:
            self.analyzer.add_transaction(deposit, "7-29-2026", "DEPOSIT")

        acc_kind = "Savings" if acc_type == "1" else "Current"
        print(f" Created {acc_kind} Account #{acc_num} for {owner}.")

    def _deposit(self):
        # Dictionary Search: O(1) Time Complexity
        acc_num = input("Enter account number: ").strip()
        account = self.accounts_dict.get(acc_num)

        if not account:
            print(" Account not found.")
            return

        try:
            amount = float(input("Enter deposit amount : "))
            if account.deposit(amount):
                # Stack Push: O(1) Time Complexity
                self.transaction_stack.append({"type": "DEPOSIT", "account": account, "amount": amount})
                self.analyzer.add_transaction(amount, "27-7-2026", "DEPOSIT")
        except ValueError:
            print(" Invalid number format.")

    def _withdraw(self):
        # Dictionary Search: O(1) Time Complexity
        acc_num = input("Enter account number: ").strip()
        account = self.accounts_dict.get(acc_num)

        if not account:
            print(" Account not found.")
            return

        try:
            amount = float(input("Enter withdrawal amount : "))
            if account.withdraw(amount):
                # Stack Push: O(1) Time Complexity
                self.transaction_stack.append({"type": "WITHDRAW", "account": account, "amount": amount})
                self.analyzer.add_transaction(amount, "27-7-2026", "WITHDRAW")
        except ValueError:
            print(" Invalid number format.")

    def _undo_last_transaction(self):
        if not self.transaction_stack:
            print(" No transactions available to undo.")
            return

        last_trans = self.transaction_stack.pop()  # O(1) Pop
        account: Account = last_trans["account"]
        amount = last_trans["amount"]
        trans_type = last_trans["type"]

        print(f"\n Undoing last {trans_type} of {amount:.2f} on Account #{account.account_num}...")
        if trans_type == "DEPOSIT":
            account._balance -= amount
        elif trans_type == "WITHDRAW":
            account._balance += amount

        print(f" Reversal Complete. Restored Balance: {account.balance:.2f}")

    def _apply_interest(self):
        print("\n Applying interest across all savings accounts...")
        for account in self.accounts_dict.values():
            account.apply_interest()

    def _show_all_accounts(self):
        #display accounts using Polymorphism.
        if not self.accounts_dict:
            print(" No accounts registered in system.")
            return

        print("\n         ALL REGISTERED ACCOUNTS            ")
        for acc in self.accounts_dict.values():
            acc_type = "Savings" if isinstance(acc, SavingsAccount) else "Current"
            print(f"Account #{acc.account_num} | Type: {acc_type:<7} | Owner: {acc.owner:<15} | Balance: {acc.balance:.2f}")
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

    def _manage_hierarchy(self):
        print("\n        Addis Bank Hierarchy Tree         ")
        self.hierarchy_root.print_tree()

        add_option = input("\nAdd new node to Bole Branch? (y/n): ").strip().lower()
        if add_option == "y":
            name = input("Enter employee/role name: ").strip()
            title = input("Enter job title: ").strip()
            self.hierarchy_root.children[0].add_child(TreeNode(name, title))
            print(" Node added successfully.")

    def _manage_transfer_network(self):
        print("\n         Money Transfer Network (Graph)      ")
        print("1. Add Transfer Connection")
        print("2. Explore Connections via BFS")
        choice = input("Select sub-option (1-2): ").strip()

        if choice == "1":
            sender = input("Enter sender name: ").strip()
            receiver = input("Enter receiver name: ").strip()
            self.transfer_graph.add_transfer(sender, receiver)
            print(f" Transfer link established: {sender} --> {receiver}")
        elif choice == "2":
            start_name = input("Enter starting customer name: ").strip()
            self.transfer_graph.bfs(start_name)

    def _manage_priority_queue(self):
        print("\n    Priority Queue (Heap)    ")
        print("1. Add Urgent Transaction Alert")
        print("2. Process Highest Priority Alert")
        choice = input("Select option (1-2): ").strip()

        if choice == "1":
            description = input("Enter alert description (e.g., Fraud Alert): ").strip()
            try:
                priority = float(input("Enter urgency level/amount (e.g., 10000): "))
                # Store negated value so heap acts as Max-Heap
                heapq.heappush(self.priority_heap, (-priority, description))
                print(f" Urgent alert pushed to heap with priority level {priority}.")
            except ValueError:
                print(" Invalid priority value.")

        elif choice == "2":
            if not self.priority_heap:
                print("Priority queue is currently empty.")
                return

            # O(log n) Pop
            neg_priority, desc = heapq.heappop(self.priority_heap)
            print(f"\n ALERT Description: '{desc}' | Priority: {-neg_priority}")

    def _run_analyzer(self):
        print("\n--- Transaction Analyzer ---")
        print("1. View Total Balance (Recursive Calculation)")
        print("2. Sort Transactions by Amount (Insertion Sort)")
        print("3. Linear Search Transaction by Type")
        print("4. Binary Search Transaction by Amount")
        print("5. Generate High-Value Report (Recursive Threshold Filter)")

        choice = input("Select analyzer choice (1-5): ").strip()

        if choice == "1":
            total = self.analyzer.recursive_total_balance()
            print(f" Net Total Balance (Calculated Recursively): {total:.2f}")

        elif choice == "2":
            self.analyzer.sort_by_amount()
            print(" Sorted Transactions by Amount:")
            for t in self.analyzer.transactions:
                print(f"  - {t['amount']:.2f} ({t['type']})")

        elif choice == "3":
            t_type = input("Enter type to search (DEPOSIT/WITHDRAW): ").strip()
            results = self.analyzer.linear_search_by_type(t_type)
            print(f" Linear Search Results for '{t_type}': {len(results)} found.")
            for r in results:
                print(f"  - Amount: {r['amount']:.2f} on {r['date']}")

        elif choice == "4":
            try:
                target = float(input("Enter exact amount to binary search ($): "))
                idx = self.analyzer.binary_search_by_amount(target)
                if idx != -1:
                    found = self.analyzer.transactions[idx]
                    print(f" Match Found via Binary Search at index {idx}: {found}")
                else:
                    print(" Transaction not found.")
            except ValueError:
                print(" Invalid number input.")

        elif choice == "5":
            try:
                thresh = float(input("Enter threshold amount ($): "))
                report = self.analyzer.recursive_filter_threshold(thresh)
                print(f"\n High-Value Report (Above {thresh:.2f}):")
                for r in report:
                    print(f"  - {r['amount']:.2f} | Type: {r['type']}")
            except ValueError:
                print(" Invalid number input.")

    def _search_bst(self):
        acc_num = input("Enter account number to search in BST: ").strip()
        found_acc = self.account_bst.search(acc_num)
        if found_acc:
            print(f" BST Search: Found Account #{found_acc.account_num} belonging to {found_acc.owner} (Balance: {found_acc.balance:.2f})")
        else:
            print(" BST Search: Account does not exist.")


if __name__ == "__main__":
    system = AddisBankSystem()
    system.run()