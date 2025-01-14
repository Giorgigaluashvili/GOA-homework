function findUniqueElements(matrix) {
    const flatArray = matrix.flat();

    const elementCount = {};

    for (const element of flatArray) {
        elementCount[element] = (elementCount[element] || 0) + 1;
    }

    const uniqueElements = [];
    for (const [element, count] of Object.entries(elementCount)) {
        if (count === 1) {
            uniqueElements.push(Number(element));
        }
    }

    return uniqueElements;
}

const matrix = [
    [1, 2, 3],
    [4, 2, 5],
    [6, 7, 3]
];

const unique = findUniqueElements(matrix);

console.log(unique);  
