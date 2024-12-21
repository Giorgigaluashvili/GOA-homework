function findLongestAscendingSubarray(arr) {
    if (arr.length === 0) return [];

    let longestStart = 0;
    let longestEnd = 0;
    let currentStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            if (i - currentStart > longestEnd - longestStart) {
                longestStart = currentStart;
                longestEnd = i - 1;
            }
            currentStart = i;
        }
    }

    if (arr.length - currentStart > longestEnd - longestStart) {
        longestStart = currentStart;
        longestEnd = arr.length - 1;
    }

    return arr.slice(longestStart, longestEnd + 1);
}

console.log(findLongestAscendingSubarray([1, 2, 3, 1, 2, 3, 4])); 
console.log(findLongestAscendingSubarray([1, 2, 1, 3, 16, 21, 11])); 
