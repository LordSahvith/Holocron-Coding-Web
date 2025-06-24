function isEven(n) {
    if (n < 0) {
        n = -n;
    }

    return n === 0 ? true : n === 1 ? false : isEven(n - 2);
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → false
console.log(isEven(-2)); // → true