def sum_of_two_largest(arr):
    arr.sort(reverse=True)
    
    return arr[0] + arr[1]

arr = [5, 18, 12, 40, 1, 19]
result = sum_of_two_largest(arr)
print(result)  

# -----------------------------------------------

def find_last_repeated_element(arr):
    seen = set()
    for num in reversed(arr): 
        if num in seen:
            return num
        seen.add(num)
    return "no element is repeated"  

arr = [5, 1, 3, 4, 1, 3, 12]
result = find_last_repeated_element(arr)
print(result)  