#all SOLID prinsiple
# NOTIFICATIONS & DATABASE (SRP & DIP)

class EmailNotifier:
    def send(self, message):
        print(f" message: {message}")

class AccountRepository:
    def save(self, account):
        print(f"Saved Final Balance: {account.balance}")

# INTERFACE  (ISP)
class InterestBearing:
    def add_interest(self):
        pass

# ACCOUNT CLASSES (SRP, OCP, LSP)
# Base Account 
class Account:
    def __init__(self, balance, notifier):
        self.balance = balance
        self.notifier = notifier 

    def deposit(self, amount):
        self.balance += amount
        self.notifier.send(f"Deposited {amount}")

    def withdraw(self, amount):
        self.balance -= amount
        self.notifier.send(f"Withdrew {amount}")

class SavingsAccount(Account, InterestBearing):
    def add_interest(self):
        interest = self.balance * 0.05  
        self.balance += interest
        self.notifier.send(f"Add{interest} interest")


class CurrentAccount(Account):
    pass


notifier = EmailNotifier()
db = AccountRepository()
print("SAVINGS ACCOUNT ")
savings = SavingsAccount(1000, notifier)
savings.deposit(500)
savings.add_interest()
db.save(savings)
print("\n  CURRENT ACCOUNT  ")
current = CurrentAccount(2000, notifier)
current.withdraw(300)
db.save(current)



#combine factory,observer, singleton

class BankConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
        return cls._instance


class SMSAlert:
    def update(self, amount):
        print(f"SMS Alert: Large transaction detected({amount})")

class AuditLog:
    def update(self, amount):
        print(f"Audit Recorded transaction of {amount}")


# Base Account
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
        self.observers = [] 

    def add_observer(self, observer):
        self.observers.append(observer)

    def withdraw(self, amount):
        self.balance -= amount
        print(f"\n{self.owner} withdrew {amount}. Remaining balance: {self.balance}")

        if amount > 3000:
            for observer in self.observers:
                observer.update(amount)


class SavingsAccount(Account):
    def apply_interest(self):
        # Uses Singleton  for interest rate!
        config = BankConfig()
        interest = self.balance * config.interest_rate
        self.balance += interest
        print(f"Interest applied: {interest}. New balance: {self.balance}")


class CurrentAccount(Account):
    pass


# FACTORY PATTERN:
class AccountFactory:
    @staticmethod
    def create(account_type, owner, balance):
        if account_type == "savings":
            return SavingsAccount(owner, balance)
        elif account_type == "current":
            return CurrentAccount(owner, balance)



sms = SMSAlert()
log = AuditLog()
acc = AccountFactory.create("savings", "yared", 10000)
acc.add_observer(sms)
acc.add_observer(log)
acc.withdraw(4000)
acc.apply_interest()