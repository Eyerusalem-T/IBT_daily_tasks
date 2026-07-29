list = [40,60,10,20,30,40,50]
for i in list:
    if i > 30:
        list.sort()
        print(i)


sum= sum(list)
avg = sum/len(list)

print("Sum:", sum)
print(avg)

#2nd question
dectionery = {
    "banana":200,"apple":100, "orange":120,"grapes":150,"mango":300
}
for d in dectionery:
    print(f"{d}: {dectionery[d]}")

#list comprehension
list = [x for x in range(1, 21)]
list1 = [x for x in range(1, 31) if x % 2 == 0]
list2 = [x for x in range(1, 31) if x % 2 != 0]

#module and import


from utils import add_tax


def main():
    price = float(input("price: "))
    tax_rate = float(input("tax rate: ") or 0.15)
    total_price = add_tax(price, tax_rate)
    print(f"Total price: {total_price:.2f}")

if __name__ == "__main__":
    main()