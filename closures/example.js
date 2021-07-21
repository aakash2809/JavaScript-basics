function x() {
    var a = 7;

    function y() {
        console.log('value of a: ', a);
    } 
     a = 7;
    return y;
}

var z = x();

console.log('value of z: ', z);
z();