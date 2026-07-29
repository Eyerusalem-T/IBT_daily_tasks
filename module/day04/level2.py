class Student:
    def __init__(self,name,id):
        self.name=name
        self.id= id
        self.grade = []

    def add_grade(self,grade):
        self.grade.append(grade)
    def avg_grade(self):
        if len(self.grade)==0:
            return 0
        total =sum (self.grade)
        avg =total/len(self.grade)
        return avg

student1 =Student("abe", "UGR1")
student1.add_grade(90)
avg = student1.avg_grade()
print(f"student: {student1.name}  id: {student1.id } grade : {student1.grade}")


#product class
class product:
    def __init__(self,name,price,stock):
        self.name =name
        self.price=price
        self.stock=stock

    def sell(self, quantity):
        if quantity > self.stock:
            print(f"cant sell {quantity}")
        else:
            self.stock -= quantity
            print(f"sold {quantity} of {self.name}")

    def restock(self,quantity):
        self.stock += quantity
        print(f"restock {quantity} of {self.name}. new stock {self.stock}")

pc = product("pc",10000,10)
print(f"product: {pc.name}  price:{pc.price}  nitial Stock: {pc.stock}")