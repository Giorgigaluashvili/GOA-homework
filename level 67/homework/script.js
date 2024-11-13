function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person('Alice', 30);
person1.introduce();

// ------------------------------------------------------

function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;
}

Book.prototype.getDetails = function() {
    console.log(`Title: "${this.title}", Author: ${this.author}`);
};

const book1 = new Book('1984', 'George Orwell');
book1.getDetails();
const book2 = new Book('The Catcher in the Rye');
book2.getDetails();

// ------------------------------------------------------

function Classroom(students) {
    this.students = students;
}

Classroom.prototype.countStudents = function() {
    console.log(`Number of students: ${this.students.length}`);
};

const myClassroom = new Classroom(['Alice', 'Bob', 'Charlie']);
myClassroom.countStudents();

// ------------------------------------------------------

function Counter() {
    this.value = 0; 
}

Counter.prototype.increment = function() {
    this.value += 1; 
};

Counter.prototype.getValue = function() {
    return this.value; 
};

const myCounter = new Counter();
console.log(myCounter.getValue()); 

myCounter.increment();
console.log(myCounter.getValue()); 

myCounter.increment();
console.log(myCounter.getValue());

// ------------------------------------------------------

function Light() {
    this.state = "off"; 
}

Light.prototype.toggle = function() {
    this.state = this.state === "off" ? "on" : "off"; 
};

// Example usage:
const myLight = new Light();
console.log(myLight.state);

myLight.toggle();
console.log(myLight.state); 

myLight.toggle();
console.log(myLight.state);
