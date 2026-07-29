name = "Eyerusalem"
age = 22
height = 5.7
is_student = True
favorite_foods = "Injera"

print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", is_student)
print("Favorite Foods:", favorite_foods)

# 2nd question of day 2 exercises

try:
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
except ValueError:
    print("Invalid input. Please enter numeric values.")
    exit()

sum = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
if num2 != 0:
    division = num1 / num2
else:
    division = "Error: Division by zero is not allowed."
print("\n Results:")
print(f"{num1} + {num2} = {sum}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} * {num2} = {multiplication}")
print(f"{num1} / {num2} = {division}")

# 3rd question of day 2 exercises

age = int(input("Enter your age: "))
print("You are", age, "years old.")

birth_year = int(input("Enter your birth year: "))
current_year = 2026
print(f"You are now {current_year - birth_year} years old.")

