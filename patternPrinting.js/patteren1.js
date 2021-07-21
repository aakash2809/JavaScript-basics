/**
 * input = 4
 * output =
 * 1 2 3 4 3 2 1
 * 1 2 3 2 1
 * 1 2 1
 * 1
 */


var j;

for (var i = 0; i < 4; i++) {
    for (j = 1; j <= 4 - i; j++) {

        process.stdout.write(`${j} `)
    }

    for (var k = j - 2; k > 0; k--) {
        process.stdout.write(`${k} `)
    }
    console.log()
}