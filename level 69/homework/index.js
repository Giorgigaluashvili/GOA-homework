let arr1 = [10, 20, 30, 40, 50];
console.log("Length of array:", arr1.length);

console.log("Array as string:", arr1.toString());

console.log("Second element using at():", arr1.at(1));

console.log("Array joined with '-':", arr1.join('-'));

arr1.push(60, 70); 
console.log("Array after push:", arr1);
arr1.pop(); 
console.log("Array after pop:", arr1);


// --------------------------------------------


let arr2 = [5, 10, 15, 20];
arr2.shift();  
console.log("Array after shift:", arr2);

arr2.unshift(0); 
console.log("Array after unshift:", arr2);

delete arr2[1]; 
console.log("Array after delete:", arr2);

let arr3 = [30, 40];
let mergedArr = arr2.concat(arr3);
console.log("Concatenated Array:", mergedArr);

arr2.unshift(100);
console.log("Array after unshift:", arr2);
console.log("New length after unshift:", arr2.length);


// --------------------------------------------


let arr4 = [5, 10, 15, 10, 20];
console.log("First occurrence of 10:", arr4.indexOf(10));

console.log("Last occurrence of 10:", arr4.lastIndexOf(10));

console.log("Array includes 15:", arr4.includes(15));

console.log("Index of non-existing element (100):", arr4.indexOf(100));

let arr5 = ["apple", "banana", "Apple"];
console.log("Includes 'apple':", arr5.includes("apple")); 
console.log("Includes 'Apple':", arr5.includes("Apple")); 


// --------------------------------------------


let strArr = ["banana", "apple", "cherry", "date"];
console.log("Sorted strings:", strArr.sort());

let numArr = [40, 10, 30, 20, 50];
console.log("Sorted numbers in ascending order:", numArr.sort((a, b) => a - b));

console.log("Sorted numbers in descending order:", numArr.sort((a, b) => b - a));

let reversedArr = numArr.reverse();
console.log("Reversed array:", reversedArr);

let mixedArr = [20, 10, 30, 50, 40];
let sortedReversedArr = mixedArr.sort((a, b) => a - b).reverse();
console.log("Sorted then reversed array:", sortedReversedArr);


// --------------------------------------------


let arr6 = [40, 10, 30, 50];
arr6.sort((a, b) => a - b);
arr6.push(60);
console.log("Sorted array after push:", arr6);

let arr7 = [10, 20, 30];
let arr8 = [40, 50, 60];
let mergedAndSortedArr = arr7.concat(arr8).sort((a, b) => a - b);
console.log("Concatenated and sorted array:", mergedAndSortedArr);

let arr9 = [10, 20, 30];
arr9.push(40, 50, 60);
arr9.reverse();
console.log("Array after push and reverse:", arr9);

let arr10 = [5, 10, 15, 20];
let index = arr10.indexOf(15);
if (index !== -1) {
    arr10.splice(index, 1); 
}
console.log("Array after finding and removing 15:", arr10);

let arr11 = [10, 20, 30, 40];
let joinedStr = arr11.join('-');
console.log("Joined string:", joinedStr);
let splitArr = joinedStr.split('-');
console.log("Array from split:", splitArr);
console.log("Includes 30:", splitArr.includes("30"));