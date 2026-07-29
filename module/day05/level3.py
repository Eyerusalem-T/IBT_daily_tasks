from abc import ABC, abstractmethod


class Account(ABC):

    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self.__balance = float(balance) if balance >= 0 else 0.0

    @property
    def balance(self):
        return self.__balance

    def _set_balance(self, value):
        self.__balance = value

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"[{self.owner}] Deposited {amount:.2f}. Balance: {self.__balance:.2f}")
            return True
        else:
            print("Deposit amount must be positive.")
            return False

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be positive.")
            return False
        if amount <= self.__balance:
            self.__balance -= amount
            print(f"[{self.owner}] Withdrew {amount:.2f}. Balance: {self.__balance:.2f}")
            return True
        else:
            print(f"[{self.owner}] Insufficient Balance: {self.__balance:.2f}")
            return False

    def statement(self):
        print(f"Account Owner: {self.owner} | Balance: {self.balance:.2f}")

    @abstractmethod
    def calculate_interest(self):
        pass



# 2. SavingsAccount Class

class SavingsAccount(Account):

    def __init__(self, owner, balance=0.0, interest_rate=0.05):
        super().__init__(owner, balance)
        self.__interest_rate = interest_rate

    @property
    def interest_rate(self):
        return self.__interest_rate

    def calculate_interest(self):
        interest_earned = self.balance * self.__interest_rate
        print(
            f"[{self.owner}] Calculated Interest: {interest_earned:.2f} (at {self.__interest_rate * 100:.1f}%)"
        )
        return interest_earned

    def add_interest(self):
        interest = self.calculate_interest()
        self.deposit(interest)

  
    def statement(self):
        print("\n--- SAVINGS ACCOUNT STATEMENT ---")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance:.2f}")
        print(f"Interest Rate: {self.__interest_rate * 100:.1f}%")



# 3. CurrentAccount Class

class CurrentAccount(Account):

    def __init__(self, owner, balance=0.0, overdraft_limit=200.0):
        super().__init__(owner, balance)
        self.__overdraft_limit = float(overdraft_limit)

    @property
    def overdraft_limit(self):
        return self.__overdraft_limit

    def calculate_interest(self):
        print(f"[{self.owner}] Current accounts do not earn interest (0.00).")
        return 0.0

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be positive.")
            return False

        max_allowed = self.balance + self.__overdraft_limit

        if amount <= max_allowed:
            new_balance = self.balance - amount
            self._set_balance(new_balance)
            print(f"[{self.owner}] Withdrew {amount:.2f}. New Balance: {self.balance:.2f}")
            return True
        else:
            print(
                f"[{self.owner}] Exceeds overdraft limit! Max allowed: {max_allowed:.2f}"
            )
            return False

    def statement(self):
        print("\n CURRENT ACCOUNT ")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance:.2f}")
        print(f"Overdraft Limit: {self.__overdraft_limit:.2f}")


if __name__ == "__main__":
    savings = SavingsAccount("Abebe", balance=1000.0, interest_rate=0.04)
    current = CurrentAccount("Kebede", balance=200.0, overdraft_limit=300.0)
    accounts: list[Account] = [savings, current]

    print("=== STATEMENTS & INTEREST ===")
    for acc in accounts:
        acc.statement()
        acc.calculate_interest()

    current.withdraw(400.0)  
    savings.add_interest()   