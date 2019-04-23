// Divisible by 3 == Fizz
// Divisible by 5 (not 3) == Buzz
// Divisible by 3 & 5 == FizzBuzz

function FizzBuzz() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

console.log(FizzBuzz());