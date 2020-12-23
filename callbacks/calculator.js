sum = (a, b) => {
    return a + b;
}

subtract = (a, b) => {
    return a - b;
}

divide = (a, b) => {
    return a / b;
}

multiply = (a, b) => {
    return a * b;
}

calculator = (callback, x, y) => {
    return callback(x, y);
}

const sumResult = calculator(sum, 3, 4);
console.log(`Sum of given two numbers = ${sumResult}`);

const subtractedResult = calculator(subtract, 8, 6);
console.log(`Subtration of given two numbers = ${subtractedResult}`);

const multiplicationResult = calculator(multiply, 15, 3);
console.log(`Multiplication of given two numbers = ${multiplicationResult}`);

const divisionResult = calculator(divide, 15, 3);
console.log(`Division of given two numbers = ${divisionResult}`);