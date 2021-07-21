// let lunchAmount = 100;
var lunchAmount = 100;

function totalAmountWithTip(lunchAmount) {
    let totalAmount = lunchAmount + 10;
    return totalAmount;
}

// let totalAmount = totalAmountWithTip(lunchAmount);
var totalAmount = totalAmountWithTip(lunchAmount);

console.log(`pay ${totalAmount} Rs. only`);
