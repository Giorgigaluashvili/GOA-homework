def arithmetic_operations(a, b):
    return {
        'sum': a + b,
        'difference': a - b,
        'product': a * b,
        'quotient': a / b if b != 0 else 'undefined',  
        'remainder': a % b if b != 0 else 'undefined'
    }

print(arithmetic_operations(10, 5))
# ფუნქცია ჯამის 100-მდე მისატანად:
# python
# კოდის კოპირება

#--------------------------------

def add_until_100(a, b):
    while a < 100:
        a += b
    return a

print(add_until_100(20, 15))
# ფუნქცია კენტი ან ლუწი რიცხვის შესამოწმებლად:
# python
# კოდის კოპირება

#--------------------------------

def is_even(number):
    return number % 2 == 0

print(is_even(10))  # True
print(is_even(7))   # False
# ფუნქცია ლისტში უდიდესი რიცხვის პოვნისთვის:
# python
# კოდის კოპირება

#--------------------------------

def find_max(lst):
    if not lst:
        return None
    return max(lst)

print(find_max([1, 2, 3, 4, 5]))
# ფუნქცია ლისტში რიცხვების ჯამის დასათვლად:
# python
# კოდის კოპირება

#--------------------------------

def sum_list(lst):
    return sum(lst)

print(sum_list([1, 2, 3, 4, 5]))

#--------------------------------

def reverse_sequence(*args):
    return args[::-1]

print(reverse_sequence(1, 'hello', 2, 'world'))
# ფუნქცია ლისტში ყველაზე გრძელი და მოკლე სტრინგების პოვნისთვის:
# python
# კოდის კოპირება

#--------------------------------

def find_longest_and_shortest(lst):
    if not lst:
        return None, None
    longest = max(lst, key=len)
    shortest = min(lst, key=len)
    return longest, shortest

print(find_longest_and_shortest(['apple', 'banana', 'cherry', 'date']))
# ფუნქცია ასოების შეცვლისთვის (პატარა -> დიდი, დიდი -> პატარა):
# python
# კოდის კოპირება

#--------------------------------

def swap_case(s):
    return s.swapcase()

print(swap_case('Hello World'))
# ფუნქცია სტრინგში თანხმოვნების რაოდენობის დასათვლად:
# python
# კოდის კოპირება

#--------------------------------

def count_consonants(s):
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    return sum(1 for char in s if char in consonants)

print(count_consonants('Hello World'))
# ფუნქცია ლუწი ან კენტი რიცხვის შესამოწმებლად:
# python
# კოდის კოპირება

#--------------------------------

def is_even(number):
    return number % 2 == 0

print(is_even(10))  # True
print(is_even(7))   # False

#--------------------------------

# დავალება 11
# ფუნქცია, რომელიც აბრუნებს სიის ლუწ ინდექსებზე მყოფი რიცხვების ჯამს:

# python
# კოდის კოპირება

#--------------------------------

def sum_even_indices(numbers):
    return sum(numbers[i] for i in range(0, len(numbers), 2))
# დავალება 12
# ფუნქცია, რომელიც აბრუნებს, თუ რიცხვი ლუწია თუ კენტი:

# python
# კოდის კოპირება

#--------------------------------

def even_or_odd(number):
    return "ლუწია" if number % 2 == 0 else "კენტი"
# დავალება 13
# ფუნქცია, რომელიც ამოწმებს, მარტივია თუ არა რიცხვი:

# python
# კოდის კოპირება

#--------------------------------

def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True
# დავალება 14
# ფუნქცია, რომელიც აბრუნებს სიას, სადაც ყველა სახელი დიდი ასოთი იწყება:

# python
# კოდის კოპირება

#--------------------------------

def capitalize_names(names):
    return [name.capitalize() for name in names]
# დავალება 15
# ფუნქცია, რომელიც სიის ლუწ რიცხვებს ორზე ჰყოფს, ხოლო კენტ რიცხვებს ორზე ამრავლებს:

# python
# კოდის კოპირება

#--------------------------------

def process_numbers(numbers):
    return [(number // 2) if number % 2 == 0 else (number * 2) for number in numbers]

#--------------------------------

# დავალება 16
# ფუნქცია, რომელიც აბრუნებს შებრუნებულ და დიდი ასოებით სტრინგს:

# python
# კოდის კოპირება

#--------------------------------

def reverse_and_upper(string):
    return string[::-1].upper()
# დავალება 17
# ფუნქცია, რომელიც სტრინგების სიას ხლეჩს ორ სიად (კენტი და ლუწი ასოების რაოდენობის მიხედვით):

# python
# კოდის კოპირება

#--------------------------------

def split_by_length(strings):
    odd = []
    even = []
    for string in strings:
        if len(string) % 2 == 0:
            even.append(string.upper())
        else:
            odd.append(string.upper())
    print("Odd:", odd)
    print("Even:", even)
# დავალება 18
# ფუნქცია, რომელიც სტრინგებს ახარისხებს ლუწი და კენტი ასოების რაოდენობის მიხედვით და ასოებს დიდი/პატარა ასოებით აფორმატებს:

# python
# კოდის კოპირება

#--------------------------------

def process_strings(strings):
    result = []
    for string in strings:
        if len(string) % 2 == 0:
            result.append(string.upper())
        else:
            result.append(string.capitalize())
    return result
# დავალება 19
# ფუნქცია, რომელიც სტრინგებს გადააქცევს დიდი ან პატარა ასოებით ფორმატში მათი მიმდინარე ასოების მიხედვით:

# python
# კოდის კოპირება

#--------------------------------

def format_strings(strings):
    result = []
    for string in strings:
        if string.isupper():
            result.append(string.lower())
        elif string.islower():
            result.append(string.upper())
    return result
# დავალება 20
# ფუნქცია, რომელიც სტრინგს აბრუნებს upper ან capitalize ფორმატში მისი ინდექსის მიხედვით:

# python
# კოდის კოპირება

#--------------------------------

def find_and_format(string, substring):
    index = string.find(substring)
    if index % 2 == 0:
        return string.upper()
    else:
        return string.capitalize()