# SavingsAccount Inheritance
from ..day04.level3 import bank


class SavingsAccount(bank):
    def __init__(self, owner, balance=0, interest_rate=0.05):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate 

    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        print(f"Add {interest} interest. balance:{self.balance}")

my_savings = SavingsAccount("Abe", balance=200, interest_rate=0.05)
my_savings.deposit(500)
my_savings.add_interest()
print(f"Balance: {my_savings.balance}")


#current account inheritance


class CurrentAccount(bank):
    def __init__(self, owner, balance=0, overdraft_limit=200):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        max_allowed = self.balance + self.overdraft_limit

        if amount <= max_allowed:
            self.balance -= amount
            print(f"Withdrew {amount}. balance: {self.balance}")
        else:
            print(f"Max withdraw is {max_allowed}")