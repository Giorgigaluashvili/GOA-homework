function sayHello() {
    console.log("hello");
}

sayHello();

// ------------------------------------

function greet(name) {
    console.log("Hello, " + name);
}

greet("Giorgi");  
greet("Alice");  

// ------------------------------------

function incrementByOne(number) {
    return number + 1;
}

console.log(incrementByOne(55));  
console.log(incrementByOne(100)); 

// ------------------------------------

function toNegative(number) {
    return -number;
}

function outputOneMoreThanNegative(number) {
    const negativeNumber = toNegative(number);  
    console.log(negativeNumber - 1);
}

outputOneMoreThanNegative(44);
