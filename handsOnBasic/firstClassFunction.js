// fucntion statement
function a() {
    console.log("a invoked");
    return "a called and returned"
}
// function expresion
let b = function () {
    console.log("b called");
}
//anonymous function
/* function () {
    console.log("b called");
} */

// named function expration 
let c = function xyz() {
    console.log("c called");
}

// first Class function
//.......example1
let d = function (parameter) {
    console.log(parameter());
}

//.......example2
let m = function () {
    return function j() {
        let sum = 3 + 2
        console.log('j called through m', sum);
        j();
    }
}

/* a();
b();
c();
xyx(); */
d(a);
console.log(m());