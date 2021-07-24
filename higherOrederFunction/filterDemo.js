/**
 * @description In this file there is  description of map function step by step
 * from the example one can understand how map works by step by step  modification
 * to see the working need to uncomment and run the sections one by one.
 */

// without using map find the double of array
/* let arr = [10, 3, 9, 4, 2, 8, 12];
let lessThanNine = [];
let j = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < 9) {
        lessThanNine[j] = arr[i];
        j++;
    }
}

console.log(lessThanNine); */

// -----------------------------------------------------------------------------------------------------

//  filter values less of array by using filter 
/* let arr = [10, 3, 9, 4, 2, 8, 12];

elementsLessThanthree = (arrayElement) => {
    return arrayElement < 9;
}

let output = arr.filter(elementsLessThanthree);

console.log(output);
 */
// ---------------------------------------------------------------------------------------------------


//  filter values less of array by using filter 
/* let arr = [10, 3, 9, 4, 2, 8, 12];

let output = arr.filter(
    elementsLessThanthree = (arrayElement) => {
        return arrayElement < 9;
    });

console.log(output); */

// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------

//  filter values less of array by using filter 
/* let arr = [10, 3, 9, 4, 2, 8, 12];

let output = arr.filter((arrayElement) => {
    return arrayElement < 9;
});

console.log(output); */

// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------

//  filter values less of array by using filter 
/* let arr = [10, 3, 9, 4, 2, 8, 12];

let output = arr.filter((arrayElement) => arrayElement < 9);

console.log(output); */

// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------

//  filter values less of array by using filter 
let arr = [10, 3, 9, 4, 2, 8, 12];

let output = arr.filter(arrayElement => arrayElement < 9);

console.log(output);

// ---------------------------------------------------------------------------------------------------