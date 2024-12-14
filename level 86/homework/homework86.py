arr = [10, 20, 30, 40, 50]

print("Element at index 2:", arr[2])
print("Element at index 4:", arr[4])

# -----------------------------------------

N = int(input("Enter the number of numbers: "))

arr = []

print(f"Enter {N} integers:")
for _ in range(N):
    num = int(input())
    arr.append(num)

print("Elements at odd indices:")
for i in range(1, N, 2):
    print(arr[i])

# -----------------------------------------

arr = []

print("Enter 10 integers:")
for i in range(10):
    num = int(input())  
    arr.append(num)    

doubled_arr = [num * 2 for num in arr]

print("Doubled elements:")
for num in doubled_arr:
    print(num)