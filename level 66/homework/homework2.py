def largest_above_20(numbers):
    filtered_numbers = [num for num in numbers if num > 20]
    
    if filtered_numbers:
        largest_number = max(filtered_numbers)
        return largest_number
    else:
        return "No numbers greater than 20."

numbers = [5, 12, 25, 30, 15]
result = largest_above_20(numbers)
print(result) 

empty_check = [5, 12, 15]
result_empty = largest_above_20(empty_check)
print(result_empty)
