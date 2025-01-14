const greet = (name = "viewer") => `Hello, ${name}!`;

console.log(greet("George"));  
console.log(greet());

// -------------------------------------------

const sum = (a = 0, b = 5) => a + b;

console.log(sum(3, 4));  
console.log(sum(10));   
console.log(sum());

// -------------------------------------------

const greater = (a = 10, b = 20) => a > b ? a : b;

console.log(greater(5, 8));  
console.log(greater(15));     
console.log(greater());      

// -------------------------------------------

const multiply = (a = 1, b = 2, c = 3) => a * b * c;

console.log(multiply(2, 3, 4)); 
console.log(multiply(5, 2));     
console.log(multiply());

// -------------------------------------------

const calculateFinalPrice = (price, tax = 0.05) => price + (price * tax);

console.log(calculateFinalPrice(100, 0.1));  
console.log(calculateFinalPrice(200));      
console.log(calculateFinalPrice(50, 0.07)); 