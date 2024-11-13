def sum_of_numbers(numbers):
    if not numbers:
        return "The list is empty."
    else:
        total_sum = sum(numbers)
        return f"The sum of the numbers is: {total_sum}"

numbers = [1, 2, 3, 4, 5]
result = sum_of_numbers(numbers)
print(result)

empty_list = []
result_empty = sum_of_numbers(empty_list)
print(result_empty)
