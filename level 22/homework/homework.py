def print_numbers():
     for i in range(5):
         print(i + 5)

print_numbers()
print("END")

#--------------------------------

def calculate_avarage():
     numbers = [9/3]
     print(sum(numbers) / len(numbers))

calculate_avarage()

#--------------------------------

name = "Giorgi"
print(len(name))
print(name)

#--------------------------------

name = ["Georgia", "country"]
print(len(name))

#--------------------------------

def longest_string(string):
    longest = string[0]
    for i in string:
        if len (i)>len(longest):
            longest = string
    print(longest)
result = longest_string(["Guram", "Gio"])

#--------------------------------

def factorial(Gio):
    if Gio == 0:
        return 1
    else:
        result = 1
        for i in range(2, Gio + 1):
            result *= i
        return result

number = int(input("enter number: "))
print(f"{number}-ის ფაქტორიალი არის {factorial(number)}")

#--------------------------------

def max_numbers(list1, list2):
    max1 = max(list1)
    max2 = max(list2)
    numbers1 = sum(list1)
    numbers2 = sum(list2)
    return[max1, max2], [numbers1, numbers2]
list1 = [1, 2, 3, 4, 5, 6, 7]
list2 = [8, 9, 10, 11, 12, 13]
max_list, sum_list = max_numbers (list1, list2)
print(f"მაქსიმალური ელემენტების მნიშვნელობა და ჯამი: {max_list}")
print(f"მაქსიმალური ელემებტების მნიშვნელობა და ჯამი: {sum_list}")

#--------------------------------

def min_nums(list1, list2):
    min1 = min(list1)
    min2 = min(list2)
    nums1 = abs(min1 - min2)
    return[min1, min2], nums1
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]
mins, differens = min_nums(list1, list2)
print(f"პირველი ლისტის მინიმალური ელემენტი და მეორე ლისტის მინიმალური ელემენტი: {mins}")
print(f"მინიმალური ელემენტების სხვაობა: {differens}")

#--------------------------------

def max_min_numbers(nums):
    if not nums:
        return None
    max_nums=max(nums)
    min_nums=min(nums)
    differens=max_nums - min_nums
    return differens
nums = [1, 2, 3, 4]
result = max_min_numbers(nums)
print(f"მაქსიმალური და მინიმალური რიცხვების სხვაობა: {result}")

#--------------------------------

def all_numbers(nums):
    num1 = all(list1)
    numbers1 = (list1)
    return[num1, numbers1]
list1 = [1, 2, 3, 4, 5,]
result = all_numbers(list1)
print(f"ყველა ელემენტის ჯამი: {result}")