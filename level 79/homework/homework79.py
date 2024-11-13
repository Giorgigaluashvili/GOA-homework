import math

def count_area(*args):
    if len(args) == 2:
        width, height = args
        return width * height
    
    elif len(args) == 1:
        radius = args[0]
        return math.pi * radius ** 2
    
    elif len(args) == 3:
        base, height, _ = args 
        return 0.5 * base * height
    
    else:
        return "Invalid input"

# Example usage:
print(count_area(4, 5))  # Rectangle: 4 * 5 = 20
print(count_area(7))     # Circle: pi * 7^2
print(count_area(3, 4, 0))  # Triangle: 0.5 * 3 * 4 = 6

print(count_area(4, 5))  # Output: 20 (Rectangle)
print(count_area(7))     # Output: 153.93804002589985 (Circle with radius 7)
print(count_area(3, 4, 0))  # Output: 6.0 (Triangle with base 3 and height 4)
print(count_area(2, 3, 4))  # Output: 3.0 (Triangle with base 2 and height 3)
