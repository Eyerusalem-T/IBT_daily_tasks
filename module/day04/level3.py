#bank accountclass bank:
class bank:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Fixed property error

    @property
    def balance(self):
        return self.__balance

    def deposit(self, amount):  # Fixed spelling: deposit
        if amount > 0:
            self.__balance += amount
            print(f"{self.owner} deposited {amount}")
        else:
            print("none")

    def withdraw(self, amount):
        if amount <= 0:
            print("cant")
        elif amount > self.__balance:
            print("no money")
        else:
            self.__balance -= amount
            print(f"{self.owner} withdrew {amount}")

    def transfer(self, to_account, amount):
        if amount <= self.__balance:
            self.withdraw(amount)
            to_account.deposite(amount)
            print(f"Transferred {amount} to {to_account.owner}")
        else:
            print("failed")


abe = bank("abebe", 200)
bele = bank("belete", 400)

abe.deposit(400)
bele.withdraw(300)




# library system
class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.__available = True

    @property
    def available(self):
        return self.__available

    def mark_borrowed(self):
        self.__available = False

    def mark_returned(self):
        self.__available = True


class Library:
    def __init__(self):
        self.__books = []

    def add_book(self, book):
        self.__books.append(book)
        print(f"Added '{book.title}' .")

    def borrow_book(self, isbn):
        for book in self.__books:
            if book.isbn == isbn:
                if book.available:
                    book.mark_borrowed()
                    print(f"borrowed '{book.title}'.")
                    return
                else:
                    print(f"'{book.title}' is  borrowed.")
                    return
        print(f"No book: {isbn}")

    def return_book(self, isbn):
        for book in self.__books:
            if book.isbn == isbn:
                if not book.available:
                    book.mark_returned()
                    print(f"You returned '{book.title}'.")
                    return
                else:
                    print(f"'{book.title}' not borrowed")
                    return
        print(f"No book : {isbn}")

my_library = Library()
book1 = Book("meow", "dimet", "12345")
print("    Adding Books")
my_library.add_book(book1)
print("\n Borrowing Books ")
my_library.borrow_book("12345")
