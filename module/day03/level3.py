#File Reading & Writing
students = [("abebe", 80), ("kebede", 92), ("susan", 71)]

with open("students.txt", "w") as f:
    for name, grade in students:
        f.write(f"{name}: {grade}\n")
        
try:
    with open("students.txt", "r") as f:
        grades = []
        for line in f:
            print(line.strip())
            name, grade = line.strip().split(":")
            grades.append(float(grade))

    if grades:
        avg = sum(grades) / len(grades)
        print(f"\nAverage Score: {avg:.2f}")
except FileNotFoundError:
    print("File not found.")

# inventory management system
inventory = {}

def main():
    while True:
        print("\nInventory Management System")
        print("1. Add Item")
        print("2. update Item")
        print("3.save to file")
        print("4. View Inventory")
        print("5. Exit")

        choice = input("ur choice: ")

        if choice == '1':
            item = input("name: ")
            quantity = int(input(" qty: "))
            inventory[item] = inventory.get(item, 0) + quantity
            print(f"{quantity} {item}(s) added.")

        elif choice == '2':
            item = input("name to update: ")
            if item in inventory:
                quantity = int(input("new qty: "))
                inventory[item] = quantity
                print(f"{item} updated to {quantity}.")
            else:
                print(f"{item} not found in inventory.")
        elif choice == '3':
            with open("inventory.txt", "w") as f:
                for item, quantity in inventory.items():
                    f.write(f"{item}: {quantity}\n")
            print("Inventory saved to inventory.txt.")

        elif choice == '4':
            if inventory:
                print("\nCurrent:")
                for item, quantity in inventory.items():
                    print(f"{item}: {quantity}")
            else:
                print("it is empty.")

        elif choice == '5':
            print("Exit.")
            break

        else:
            print("Invalid try again.")

if __name__ == "__main__":
    main()