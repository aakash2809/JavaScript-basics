/* setTimeout(() => {
    console.log("timer")
}, 5000); */

/* abc = () => {
    console.log("timer1")
} */

function x(y) {
    y();
    console.log("x");
}

x(function y() {
    console.log("y");
});

