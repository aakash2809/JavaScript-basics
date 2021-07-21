console.log("this program is for demonstration of async await");
/* ----------------------Example01 for sync vs async----------------- */
/* // synchronous
for (let index = 0; index < 10; index++) {
    console.log(`Index number ${index}`);
}

console.log("done printing"); */
//asynchrouns
setTimeout(() => {
    for (let index = 0; index < 10; index++) {
        console.log(`Index number ${index}`);
    }
}, 2000);

console.log("done printing");

/* ---------------------------------------------------------------------- */

/* ----------------------Example02 for sync vs async---------------------- */