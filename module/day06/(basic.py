#SINGLE RESPONSIBLITIES PRINCIPLE
#  employee's information
class Employee:

    def __init__(self, name, hours, rate):
        self.name = name
        self.hours = hours
        self.rate = rate

# Calculate salary
class SalaryCalculator:

    def calculate(self, employee):
        return employee.hours * employee.rate

#  Save data
class FileSaver:

    def save(self, employee):
        print(f"Saved {employee.name}'s data to a file.")

# Send emails
class EmailSender:

    def send(self, employee, salary):
        print(f"Sent email to {employee.name} (Salary: ${salary}).")

emp = Employee("tt", 40, 25)
calculator = SalaryCalculator()
salary = calculator.calculate(emp)
saver = FileSaver()
saver.save(emp)
mailer = EmailSender()
mailer.send(emp, salary)



#Open/Closed Principle (OCP)


# 1. Base class
class Employee:
    def __init__(self, salary):
        self.salary = salary

    def bonus(self):
        pass  

# 2. Specific employee classes 
class Employe_f(Employee):
    def bonus(self):
        return self.salary * 0.20

class Employe_p(Employee):
    def bonus(self):
        return self.salary * 0.10

class Contractor(Employee):
    def get_bonus(self):
        return self.salary * 0.05

# 3. Main function when new employee types are added
def calculate_bonus(employee):
    return employee.bonus()

emp1 = Employe_f(50000)
emp2 = Employe_p(30000)

print("Full-Time Bonus:", calculate_bonus(emp1)) 
print("Part-Time Bonus:", calculate_bonus(emp2)) 



# LSP (Liskov Substitution Principle)

class Vehicle:
    def drive(self):
        return "Driving "

class GasVehicle(Vehicle):
    def fill_gas(self):
        return "Filling gas"

class GasCar(GasVehicle):
    pass

class ElectricCar(Vehicle):
    def charge_battery(self):
        return "Charging "

# Function that specifically expects gas vehicles
def refill_gas(vehicle: GasVehicle):
    return vehicle.fill_gas()


my_toyota = GasCar()
my_bmw = ElectricCar()

print(refill_gas(my_toyota))
print(my_bmw.charge_battery())