// CommonJS

const _ = require("lodash");

function multiply(integers) {
    const numbers = JSON.parse(integers);
    console.log(_.reduce(numbers, (prod, n) => prod * n, 1););
}

if (process.argv.length > 2) {
    multiply(process.argv[2]);
} else {
    console.log("No given arguments")
}
