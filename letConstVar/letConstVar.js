/**
 * @description var declarations are globally scoped or function scoped while let and const are block scoped.
 * const never assign value more than once while let can assign
 * const vaiable needs to assign value at the same time when we declare it
 * let vaiable can be assign value any where after declartion
 * var vaiable can be assign value any where after declartion even before declartion but it should be decalare
 * some where in its scope.
 *
 *
 */



// *********************************  var, let ******************************************
// output 6 times 6 because var is globaly socoped create single copy of variable
/* for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 5000);
} */

// output 1 to 5 because let is functional socoped create seprate copy of variable
/* for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 5000);
} *

//******************************************************************************************** */


// *********************************case first for const and let ****************************

//  const:  Here  inside the settimeout temparature will give ,
//  type error assignment to constant varablle
/* const temprature = 40;

console.log(`current temprature is ${temprature} degree celcious`);

setTimeout(() => {
    temprature = 25;
    console.log(`updated temprature is ${temprature} degree celcious`);
}, 1000);
*/



//  let:  Here above same code work fine let can be assign again,
/* let temprature = 40;

console.log(`current temprature is ${temprature} degree celcious`);

setTimeout(() => {
    temprature = 25;
    console.log(`updated temprature is ${temprature} degree celcious`);
}, 1000); */
// *****************************************************************************************




// *********************************case second for var, let & const ****************************

// will give syntex error: Missing initializer in const declaration
/* const a;
console.log('value of a is', a); */

// not a error  will print undefined 
/* let b;
console.log('value of a is', b); */

// will give syntex error: Missing initializer in const declaration
/* const a;
a = 5;
console.log('value of a is', a); */

// will run fine and o/p 5 that let can be assign value 
/* let b;
b = 5;
console.log('value of a is', b); */

// will give ReferenceError: Cannot access 'b' before initialization
/* b = 5;
console.log('value of a is', b);
let b; */

// will run fine and o/p 5 that let can be assign value 
/* b = 5;
console.log('value of a is', b);
var b; */

//******************************************************************************************** */



