function range(start, end) {
    let total = 0; 
    for (let i = start; i < end + 1; i++) {
        total += i;
    }
    return total;
}

console.log(range(1, 4));

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findSum(testArray));