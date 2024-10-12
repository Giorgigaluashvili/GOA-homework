function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet());       

// -------------------------------------

function add_numbers(num1, num2 = 0) {
    return num1 + num2;
}

console.log(add_numbers(5, 3));
console.log(add_numbers(5));     

// -------------------------------------

function calculate_area(length, width = 1) {
    return length * width;
}

console.log(calculate_area(5, 3)); 
console.log(calculate_area(5));    

// -------------------------------------

function convert_temperature(temperature, scale = "C") {
    if (scale === "C") {
        return (temperature * 9/5) + 32;
    } else if (scale === "F") {
        return (temperature - 32) * 5/9;
    } else {
        throw new Error("Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}

console.log(convert_temperature(25, "C"));
console.log(convert_temperature(77, "F")); 
console.log(convert_temperature(25));      

// -------------------------------------

function add_to_shopping_list(item, quantity = 1) {
    return `${quantity} x ${item} added to the shopping list.`;
}

console.log(add_to_shopping_list("Apples", 3)); 
console.log(add_to_shopping_list("Bananas"));   

// -------------------------------------

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(5, 3)); 
console.log(power(4));    
