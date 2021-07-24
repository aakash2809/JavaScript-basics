/**
 * @description In this file there is  description of map function step by step 
 * from the example one can understand how map works by step by step  modification
 * to see the working need to uncomment and run the sections one by one.
 */

// without using map find the double of array
/* let arr = [5, 6, 7, 8, 9];
let doubledArr = [];

for (let i = 0; i < arr.length; i++) {
    doubledArr[i] = arr[i] * 2;
}

console.log(doubledArr); */

// -----------------------------------------------------------------------------------------------------

// double of array by using map 
/* let arr = [5, 6, 7, 8, 9];

double = (arrayElement) => {
    return arrayElement * 2;
}

let output = arr.map(double);

console.log(output); */


// -----------------------------------------------------------------------------------------------------

// modification1 in above code for double of array using map

// double of array by using map 
/* let arr = [5, 6, 7, 8, 9];

let output = arr.map(double = (arrayElement) => {
    return arrayElement * 2;
});

console.log(output);
 */
// -----------------------------------------------------------------------------------------------------

// modification2 in above code for double of array using map

// double of array by using map 
/* let arr = [5, 6, 7, 8, 9];

let output = arr.map((arrayElement) => {
    return arrayElement * 2;
});

console.log(output);
 */
// -----------------------------------------------------------------------------------------------------

// modification3 in above code for double of array using map

// double of array by using map 
/* let arr = [5, 6, 7, 8, 9];

let output = arr.map((arrayElement) => { return arrayElement * 2 });

console.log(output); */

// -----------------------------------------------------------------------------------------------------

// modification5 in above code for double of array using map

// double of array by using map 
/* let arr = [5, 6, 7, 8, 9];

let output = arr.map((arrayElement) => arrayElement * 2);

console.log(output); */

// -----------------------------------------------------------------------------------------------------

// modification6 in above code for double of array using map

// double of array by using map 
let arr = [5, 6, 7, 8, 9];

let output = arr.map(arrayElement => arrayElement * 2);

console.log(output);
