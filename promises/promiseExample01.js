// -resolve
/* -----------------------Example01-------------------------------------- */
/* func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
             if (error) {
            console.log('you promises has been rejected')
            reject('sorry not fullfiled');
        } else {
            console.log('function: your promise resolved')
            resolve();
        }
        }, 2000);
    })
}

func1().then(() => {
    console.log("thanks for resolving");
}).catch((err) => {
    console.log(`${err} ver bad`)
}) */


// ---------------------------------example02------------------------------------

func1 = () => {
    return new Promise((resolve, reject) => {
        const error = true;
        if (error) {
            console.log('you promises has been rejected')
            reject('sorry not fullfiled');
        } else {
            console.log('function: your promise resolved')
            resolve('resolved');
        }
    })
}

/* func1().then(() => {
    console.log("thanks for resolving");
}).catch((err) => {
    console.log(`${err} ver bad`)
}) */
//func1();
