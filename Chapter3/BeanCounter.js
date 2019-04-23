function countBs(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            counter++
        }
    }
    return counter;
}

const testString1 = "Buster Bluth";
const testString2 = "BBBBUUUUUZZZZZZZ";

console.log(countBs(testString1));
console.log(countBs(testString2));

function countChar(str, target) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            counter++
        }
    }
    return counter;
}

const testPhrase1 = "This is it!";
const testPhrase2 = "I WIN!!!";

console.log(countChar(testPhrase1, "!"));
console.log(countChar(testPhrase2, "!"));