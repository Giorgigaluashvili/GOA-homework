def odd_index_sum(numbers):
    total_sum = 0
    for index in range(len(numbers)):
        if index % 2 != 0:  
            total_sum += numbers[index]
    return total_sum
numbers = [10, 21, 32, 43, 54]
result = odd_index_sum(numbers)
print(result)