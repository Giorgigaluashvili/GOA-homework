const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    start: function() {
        console.log("The car has started.");
    },
    stop: function() {
        console.log("The car has stopped.");
    }
};

console.log(car.brand);
console.log(car.model); 
console.log(car.year);  
car.start();           


// --------------------------------------------------


console.log(car.brand); 
console.log(car.year);  


// --------------------------------------------------


car.color = "Blue";
console.log(car.color);


// --------------------------------------------------


car.year = 2020;
console.log(car.year);


// --------------------------------------------------


delete car.model;
console.log(car);