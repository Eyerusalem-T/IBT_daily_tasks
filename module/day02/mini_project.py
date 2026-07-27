def add_income(income):
    return income

def add_expense(expense):
    return expense

def show_balance(income, expense):
    balance = income - expense
    return balance

def exit():
    print("Exiting the program.")
    quit() # it use like break

def main():
    income =0
    expense =0

    while True:
        choice = input("Enter 'i' to add income, 'e' to add expense, 'b' to show balance, or 'q' to quit: ").lower()
        if choice == 'i':
            try:
                income += float(input("Enter income amount: "))
            except ValueError:
                print("Invalid input. Please enter a numeric value.")

        elif choice == 'e':
            try:
                expense += float(input("Enter expense amount: "))
            except ValueError:
                print("Invalid input. Please enter a numeric value.")
                
        elif choice == 'b':
            print(f"Current balance: ${show_balance(income, expense):.2f}")

        elif choice == 'q':
            exit()

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()