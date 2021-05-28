// File: fibonacci.js
// Name: D.Saravanan
// Date: 28/05/2021
// Script to compute fibonacci numbers

const fibonacci = function(n) {
    if (n === 1 || n == 2) {
        return 1;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

for (n = 1; n <= 50; n++) {
    console.log(fibonacci(n));
}
