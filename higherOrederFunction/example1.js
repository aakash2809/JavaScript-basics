const interviewQuetion = (name) => {
    if (name == "aakash") {
        return function (topic) {
            console.log(`Hi ${name} explain ${topic}`)
        }
    }
    if (name == "vikash") {
        return function (topic) {
            console.log(`Hi ${name} explain ${topic}`)
        }

    } else {
        return function () {
            console.log('wait for interview');
        }
    }
}

interviewQuetion('aakash')('UI');
interviewQuetion('vikash')('FULL STACK');