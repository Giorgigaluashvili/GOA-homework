def sum_of_two_largest(arr):
    arr.sort(reverse=True)
    
    return arr[0] + arr[1]

arr = [5, 18, 12, 40, 1, 19]
result = sum_of_two_largest(arr)
print(result)  