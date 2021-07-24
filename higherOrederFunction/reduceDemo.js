
// ---------------------------------------------------------------------------------
// sum all elements of the given array without using reduce function
/* let arr = [1, 2, 5, 6, 7, 8];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(`sum of given array is: ${sum}`); */
//------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// sum all elements of the given array using reduce function
/* let arr = [1, 2, 5, 6, 7, 8];

let sum = arr.reduce((acc, curr) => {
    return acc + curr;
});

console.log(`sum of given array is: ${sum}`); */
//------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// sum all elements of the given array using reduce function
let arr = [1, 2, 5, 6, 7, 8];

let sum = arr.reduce((acc, curr) => acc + curr);

console.log(`sum of given array: ${sum}`);
//------------------------------------------------------------------------------------

