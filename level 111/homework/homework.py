class Book:
    def __init__(self, title, author, year):
        self.title = title  
        self.author = author  
        self.year = year  
        self.is_borrowed = False  

    def borrow_book(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            return f"The book '{self.title}' has been borrowed."
        else:
            return f"The book '{self.title}' is already borrowed."

    def return_book(self):
        if self.is_borrowed:
            self.is_borrowed = False
            return f"The book '{self.title}' has been returned."
        else:
            return f"The book '{self.title}' was not borrowed."

    def get_title(self):
        return self.title

    @property
    def availability(self):
        return "Available" if not self.is_borrowed else "Not Available"

class AdventureBook(Book):
    def __init__(self, title, author, year, setting, protagonist):
        super().__init__(title, author, year)
        self.setting = setting  
        self.protagonist = protagonist  

    def return_book(self):
        return f"Thank you for returning the adventure book '{self.title}'!"

    def adventure_level(self):
        return f"The adventure level of '{self.title}' is high."

    @property
    def book_setting(self):
        return self.setting

    @property
    def book_protagonist(self):
        return self.protagonist

class SatireBook(Book):
    def __init__(self, title, author, year, humor_level, target_socio_group):
        super().__init__(title, author, year)
        self.humor_level = humor_level  
        self.target_socio_group = target_socio_group  

    def borrow_book(self):
        return f"You're in for a good laugh with the book '{self.title}'. Enjoy reading!"

    def satire_level(self):
        return f"The satire level in '{self.title}' is {self.humor_level}."

    @property
    def book_humor_level(self):
        return self.humor_level

    @property
    def book_target_group(self):
        return self.target_socio_group

class FantasyBook(Book):
    def __init__(self, title, author, year, magical_elements, fantasy_world):
        super().__init__(title, author, year)
        self.magical_elements = magical_elements  
        self.fantasy_world = fantasy_world  

    def return_book(self):
        return f"Thank you for returning the fantasy book '{self.title}'! The magic continues."

    def magic_elements_in_book(self):
        return f"'{self.title}' contains {self.magical_elements} magical elements."

    @property
    def book_fantasy_world(self):
        return self.fantasy_world

    @property
    def book_magical_elements(self):
        return self.magical_elements



adventure_book1 = AdventureBook("The Lost Island", "John Doe", 2020, "Tropical Island", "Jack")
adventure_book2 = AdventureBook("Mystery of the Sea", "Jane Smith", 2021, "Sea", "Sarah")
adventure_book3 = AdventureBook("Desert Journey", "David Lee", 2022, "Desert", "Mike")

satire_book1 = SatireBook("The Fake World", "Alice Brown", 2021, "Moderate", "Adults")
satire_book2 = SatireBook("Social Clowns", "Bob White", 2022, "High", "Young Adults")
satire_book3 = SatireBook("The Big Laugh", "Charlie Black", 2020, "Low", "Teens")

fantasy_book1 = FantasyBook("The Enchanted Forest", "Lily Green", 2021, "Wizards, Dragons", "Feyland")
fantasy_book2 = FantasyBook("Mystic Realms", "Max Blue", 2022, "Elves, Fairies", "Nirvana")
fantasy_book3 = FantasyBook("The Magic Portal", "Clara Yellow", 2020, "Magic Stones, Spells", "Atlantis")

print(adventure_book1.borrow_book())
print(adventure_book2.adventure_level())
print(adventure_book3.book_protagonist)

print(satire_book1.satire_level())
print(satire_book2.book_humor_level)
print(satire_book3.book_target_group)

print(fantasy_book1.magic_elements_in_book())
print(fantasy_book2.book_fantasy_world)
print(fantasy_book3.return_book())