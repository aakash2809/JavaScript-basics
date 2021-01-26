// -resolve
// -reject
// -pending
func1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log('function: your promise resolved')
                resolve();
            }else{
                console.log('you promises has been rejected')
                reject('sorry not fullfiled');
            }
        }, 2000);
    }) 

}
func1().then(()=>{
    console.log("thanks for resolving");
}).catch((err)=>{
console.log(`${err} very bad`)})