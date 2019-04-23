function range(start, end) {
    let total = 0; 
    for (let i = start; i < end + 1; i++) {
        total += i;
    }
    return total;
}

console.log(range(1, 4));