class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"its {self.name} and {self.age} years old.")
person1 = person("John", 25)
person1.greet()
print(f"Name: {person1.name}, Age: {person1.age}")

#rectangle class
class rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)

rectangle1 = rectangle(5, 3)
print(f"Area: {rectangle1.area()}")
print(f"Perimeter: {rectangle1.perimeter()}")

#bank account
class account:
    def __init__(self, owner,balance):
        self.owner = owner
        self.balance = balance
    def deposite(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("no")
        self.balance -= amount
        return self.balance
account1=account("abebech",300)
print(f"birr: {account1.deposite(300)}")
print(f"withdraw: {account1.withdraw(20)}")