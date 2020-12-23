sum = (a,b) =>{
    return a+b;
}

calculator = (fx,x,y) =>{
   return fx(x,y);
}

const sumResult = calculator(sum,3,4);
console.log(sumResult);