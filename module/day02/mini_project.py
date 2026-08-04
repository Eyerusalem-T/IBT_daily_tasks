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
        choice = input("Enter '1' to add income, '2' to add expense, '3' to show balance, or '4' to quit: ").lower()
        if choice == '1':
            try:
                income += float(input("Enter income amount: "))
            except ValueError:
                print("Invalid input. Please enter a numeric value.")

        elif choice == '2':
            try:
                expense += float(input("Enter expense amount: "))
            except ValueError:
                print("Invalid input. Please enter a numeric value.")

        elif choice == '3':
            print(f"Current balance: {show_balance(income, expense):.2f}")

        elif choice == '4':
            exit()

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()