/* function x() {
    var i = 1;
    setTimeout(() => {
        console.log(i);
    }, 5000);
    console.log('hello');
}
x(); */

// o/p firve times 6
// solution use let instead of var then o/p 1 to 5
/* function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        },  1000);
    }
    console.log('hello');
}
x(); */

// o/p 
// solution use let then o/p 1 to 5
x = () => {
    for (var i = 1; i <= 5; i++) {
        view = (i) => {
            setTimeout(() => {
                console.log(i);
            }, 1000);
        }
        view(i);
    }

}
x();

// o/p hello 
// 1
/* function x() {
  var i = 1;
        setTimeout(() => {
            console.log(i);
        },  1000);
    }
    console.log('hello');
x(); */

/* function x() {
    var i = 1;
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
console.log('hello');
x(); */