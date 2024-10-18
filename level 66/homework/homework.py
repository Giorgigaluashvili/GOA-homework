def check_even_odd(number):
    if number % 2 == 0:
        return "ლუწი"
    else:
        return "კენტი"

number = int(input("შეიყვანეთ რიცხვი: "))
result = check_even_odd(number)
print(f"რიცხვი {number} არის: {result}")
