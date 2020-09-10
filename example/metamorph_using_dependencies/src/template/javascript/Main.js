// CommonJS

const _ = require("lodash");

function multiply(integers) {

}

if (process.argv.length > 2) {
    multiply(process.argv[2]);
} else {
    console.log("No given arguments")
}
