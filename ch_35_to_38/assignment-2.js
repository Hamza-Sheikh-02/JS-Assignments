let number = prompt("Enter a number to factorialize:", 5);
number = Number(number);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let result = factorial(number);
console.log(result);
