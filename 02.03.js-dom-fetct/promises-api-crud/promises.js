// state: pending, fullfilled, rejected


// const myPromise = new Promise((resolve, reject)=>{
//     // resolve("hello")
//     reject("error")
// })

// console.log(myPromise);


const students = ["sabit", "salbuz", "sanan"]
// students.length = 0
const promise = new Promise((resolve, reject)=>{
    if(students.length > 0){
        resolve(students)
    }else{
        reject("there is no student")
    }
})


// console.log(promise);

// blocks: then, catch, finally

// promise.then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
    
// }).finally()


//chaning

promise.then((res)=>{
    res.push("mahir")
    return res
}).then((data)=>{
    console.log(data);
})


//async await