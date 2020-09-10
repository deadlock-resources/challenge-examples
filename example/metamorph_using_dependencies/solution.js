// CommonJS

if (process.argv.length > 2) {
    const numbers = JSON.parse(process.argv[2]);
    console.log(numbers.reduce((prod, n) => prod * n, 1));
}
