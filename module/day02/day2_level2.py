score = int(input("Enter your score (0-100): "))
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Your grade is: {grade}")

#2nd question of day 2

for i in range (1,20):
    if i % 2 != 0 :
        print(i , "is odd")
    elif i % 5 == 0:
        print(i , "is divisible by 5")

# 3rd question od day 2

sum = 0
print("Enter a numbers :")
while True:
    num = float(input("Enter another number : "))
    if num == 0:
        break
    sum += num
print("The sum of the numbers is:", sum)

# 4th question

def greet(name):
    print("Hello, " + name + " Welcome to the IBT.")

def square (number):
    return number ** 2

def is_even(number):
    if number % 2 ==0:
        return True
    else:
        return False

number = int(input("Enter a number: "))
print(f"The number {number} is even: {is_even(number)}")

