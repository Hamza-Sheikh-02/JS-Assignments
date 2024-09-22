var value = multiply(4, 3, 6);
console.log(`value ${value}`); // The result is 72

function add(a, b) {
    var z = a + b;
    return z;
}

function multiply(a, b, c) {
    var z = a * add(b, c);
    return z;
}

console.log("course", course); // The result is undefined
console.log("z", z); // The result is error

var course = "cloud native computing";
