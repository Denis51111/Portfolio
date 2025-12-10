



function crossSum(num) {
    return num
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, n) => sum + n, 0);
}


function isEven(num) {
    return num % 2 === 0;
}


function add(a, b) {
    return a + b;
}


const sumTotal = add(add(4651, 586), 23586);
const cross = crossSum(sumTotal);
console.log("Summe:", sumTotal);
console.log("Quersumme:", cross);
console.log("Ist Quersumme gerade?", isEven(cross));





let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100);
console.log("Zufällige Zahlen:", numbers);


let crossSums = numbers.map(n => crossSum(n));
console.log("Quersummen:", crossSums);


let oddNumbers = numbers.filter(n => n % 2 !== 0);
console.log("Nur ungerade Zahlen:", oddNumbers);


let totalSum = numbers.reduce((sum, n) => sum + n, 0);
console.log("Summe aller Zahlen:", totalSum);


console.log("Jede Zahl einzeln:");
numbers.forEach(n => console.log(n));


let exists10to30 = numbers.some(n => n >= 10 && n <= 30);
console.log("Gibt es eine Zahl zwischen 10 und 30?", exists10to30);



function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Fakultät von 5:", factorial(5));


function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci von 10:", fibonacci(10));
