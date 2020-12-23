sum = (a, b) => {
    return a + b;
}

calculator = (callback, x, y) => {
    return callback(x, y);
}

const sumResult = calculator(sum, 3, 4);
console.log(`Sum of given two numbers  ${sumResult}`);