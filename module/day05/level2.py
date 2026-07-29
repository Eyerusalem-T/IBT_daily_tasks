from module.day04.level3 import bank


class SavingsAccount(bank):
    def __init__(self, owner, balance=0, interest_rate=0.05):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.deposit(interest)

    def statement(self):
        print("\n SAVINGS ACCOUNT STATEMENT ")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance}")
        print(f"Interest Rate: {self.interest_rate * 100}")


class CurrentAccount(bank):

    def __init__(self, owner, balance=0, overdraft_limit=200):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        max_allowed = self.balance + self.overdraft_limit
        if amount <= max_allowed:
            super().withdraw(amount)
        else:
            print(f"Max withdrawal is {max_allowed}")

    def statement(self):
        print("\n CURRENT ACCOUNT STATEMENT ")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance}")
        print(f"Overdraft Limit: {self.overdraft_limit}")


if __name__ == "__main__":
    sav = SavingsAccount("Abebe", balance=1000, interest_rate=0.05)
    sav.statement() 
    cur = CurrentAccount("Kebede", balance=300, overdraft_limit=500)
    cur.statement()


#  Polymorphism Practice
from module.day04.level3 import bank as Account


class SavingsAccount(Account):
    def __init__(self, owner, balance=0, interest_rate=0.05):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    def statement(self):
        print(
            f"[Savings Account] Owner: {self.owner} | Balance: {self.balance} | Interest Rate: {self.interest_rate * 100}%"
        )


class CurrentAccount(Account):

    def __init__(self, owner, balance=0, overdraft_limit=200):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    def statement(self):
        print(
            f"[Current Account] Owner: {self.owner} | Balance: {self.balance} | Overdraft Limit: {self.overdraft_limit}"
        )

if not hasattr(Account, "statement"):

    def account_statement(self):
        print(f"[Standard Account] Owner: {self.owner} | Balance: {self.balance}")

    Account.statement = account_statement

accounts = [
    Account("Abebe", 1000),  
    SavingsAccount("Sara", 1500, 0.05),  
    CurrentAccount("Dawit", 500, 300),  
]

print("=== POLYMORPHISM IN ACTION ===\n")
for acc in accounts:
    acc.statement()
    acc.deposit(100)

    print("-" * 50)