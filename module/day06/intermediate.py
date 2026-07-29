#apply SRP and DIP
# Class for sending email (SRP)
class EmailNotifier:
    def send(self, message):
        print("Email sent:", message)

#  Class for saving to database (SRP)
class AccountRepository:
    def save(self, account):
        print("Saved balance:", account.balance)


#  Account class
class Account:
    def __init__(self, balance, notifier):
        self.balance = balance
        self.notifier = notifier 
        
    def deposit(self, amount):
        self.balance += amount
        self.notifier.send(f"Deposited {amount}")

    def withdraw(self, amount):
        self.balance -= amount
        self.notifier.send(f"Withdrow {amount}")


notifier = EmailNotifier()
db = AccountRepository()
my_account = Account(500, notifier)
my_account.deposit(200)
my_account.withdraw(100) 
db.save(my_account)     


# FActory pattern

class SavingsAccount:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.balance = balance
        self.type = "Savings"

class CurrentAccount:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.balance = balance
        self.type = "Current"

class FixedDepositAccount:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.balance = balance
        self.type = "Fixed Deposit"


# 2. The Factory class
class AccountFactory:
    @staticmethod
    def create(kind, owner, number, balance):
        if kind == "savings":
            return SavingsAccount(owner, number, balance)
        elif kind == "current":
            return CurrentAccount(owner, number, balance)
        elif kind == "fixed":
            return FixedDepositAccount(owner, number, balance)

acc1 = AccountFactory.create("savings", "kebe", "101", 1000)
acc2 = AccountFactory.create("current", "yytt", "102", 500)
acc3 = AccountFactory.create("fixed", "kkk", "103", 5000)

print(acc1.owner, "-", acc1.type, "Account - Balance:", acc1.balance)
print(acc2.owner, "-", acc2.type, "Account - Balance:", acc2.balance)
print(acc3.owner, "-", acc3.type, "Account - Balance:", acc3.balance)


#Observer pattern 

class SMSAlert:
    def update(self, amount):
        print(f" SMS Alert:  withdrawal : {amount}")


class AuditLog:
    def update(self, amount):
        print(f" Audit: Recorded withdrawal of {amount}")

class Account:
    def __init__(self, balance):
        self.balance = balance
        self.observers = []

    def add_observer(self, observer):
        self.observers.append(observer)

    def withdraw(self, amount):
        self.balance -= amount
        print(f"\nWithdrew {amount}.  balance: {self.balance}")

        if amount > 3000:
            for observer in self.observers:
                observer.update(amount)


my_account = Account(10000)
sms = SMSAlert()
audit = AuditLog()
my_account.add_observer(sms)
my_account.add_observer(audit)
my_account.withdraw(500)


#isp

class Account:
    def __init__(self, balance):
        self.balance = balance

class InterestBearing:
    def add_interest(self):
        pass 
    
class SavingAccount(Account, InterestBearing):
    def add_interest(self):
        interest = self.balance * 0.05  
        self.balance += interest
        print(f"Interest add and the balnce became{self.balance}")


class CurentAccount(Account):
    pass


savings = SavingAccount(1000)
current = CurentAccount(1000)
savings.add_interest()   
print("Balance:", current.balance)  