for i in range(1,50):
    if i % 5==0:
        print(i)

for i in range(1,300):
    if i % 2==0:
        print(i)

for i in range(1,50):
    if i % 2!=0:
        print(i)

#-------------------------------------

sum = 50

for i in range(100):
    print(sum)
    sum = sum + i

#-------------------------------------

Num1 = int(input("enter the number: "))
Num2 = int(input("enter the number: "))
if Num1 > Num2:
    largest = Num1
    smallest = Num2
else: 
    largest = Num2
    smallest = Num1
for i in range(smallest, largest):
    print(i)

#-------------------------------------

sum = 1
for i in range(5,11):
    sum *= i
    print(sum)
