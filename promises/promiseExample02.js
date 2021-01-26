let students = [
    {name:"Aakash", subject:"node.js"},
    {name:"Rahul", subject:"java"},
    {name:"Ahmad", subject:"Abinitio"}
]

function enrollStudent(student){
    return new  Promise((resolve, reject)=>
    {
        setTimeout(() => {
            students.push(student) 
            console.log("new student has been enrolled");
            let error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }
         }, 8000);
    })

}

function getStudents(){
    setTimeout(() => {
       let str = "";
       students.forEach((students)=>{
           str +=`<li>${students.name}</li>`
       }) 
       document.getElementById('student').innerHTML = str;
   console.log("students has been retrieved");

    }, 1000);

}

let newStudent = {name:"hritik" , subject:"flutter"};
enrollStudent(newStudent).then(()=>{
    getStudents();
}).catch();
