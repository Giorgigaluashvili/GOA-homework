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
    
print(count_area(4, 5)) 
print(count_area(7)) 
print(count_area(3, 4, 0))
