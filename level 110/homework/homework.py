class Animal:
    def __init__(self, name, age, species):
        self.name = name  
        self.age = age  
        self.species = species  

    def speak(self):
        return f"{self.name} says: Hello!"

class Vehicle:
    def __init__(self, model, year, color):
        self.model = model  
        self.year = year  
        self.color = color  

    def drive(self):
        return f"The {self.model} is driving!"

class Person:
    def __init__(self, name, occupation, age):
        self.name = name  
        self.occupation = occupation  
        self.age = age  

    def introduce(self):
        return f"Hi, I'm {self.name}, a {self.occupation}, and I'm {self.age} years old."

animal1 = Animal("Leo", 3, "Lion")
animal2 = Animal("Buddy", 5, "Dog")
animal3 = Animal("Whiskers", 2, "Cat")

vehicle1 = Vehicle("BMW M3 G80", 2021, "Gray")
vehicle2 = Vehicle("Ford Mustang", 2018, "Blue")
vehicle3 = Vehicle("Chevrolet Camaro ZL1", 2016, "Black")

person1 = Person("John", "Engineer", 28)
person2 = Person("Alice", "Artist", 32)
person3 = Person("Bob", "Doctor", 40)

print(animal1.speak())
print(animal2.speak())
print(animal3.speak())

print(vehicle1.drive())
print(vehicle2.drive())
print(vehicle3.drive())

print(person1.introduce())
print(person2.introduce())
print(person3.introduce())