def is_product_greater_than_100(num1, num2):
    product = num1 * num2
    if product > 100:
        return "The product is greater than 100."
    else:
        return "The product is less than or equal to 100."

number1 = float(input("Enter the first number: "))
number2 = float(input("Enter the second number: "))
result = is_product_greater_than_100(number1, number2)
print(result)
