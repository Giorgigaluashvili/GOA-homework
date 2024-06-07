Num1 = int(input("enter the number: "))
Num2 = int(input("enter the number: "))
if Num1 > Num2:
    largest = Num1
    smallest = Num2
else: 
    largest = Num2
    smallest = Num1
for i in range(smallest, largest, + 1):
    print(i)

