

/* let calculate = (a, b, operation) => { 
    let result = '';
    if (operation === 'sum'){
        result = a + b;
    }
    if (operation === 'mul'){
        result = a * b;
    }
    return result;
}
let output = calculate(10,20,'sum');
let output2 = calculate(10,20,'mul');
console.log(output);
console.log(output2); */




calculator = (callback) => {
    console.log(`result`);
    return callback(2, 3);
}

const sumResult = calculator(sum = (a, b) => {
    return a + b;
});
console.log(`Sum of given two numbers = ${sumResult}`);