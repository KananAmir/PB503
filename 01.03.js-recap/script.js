const BASE_URL = "https://book-store-api-liard-three.vercel.app"


fetch(`${BASE_URL}/books`).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log("books",data);
}).catch((err)=>{
    console.log(err);    
}).finally(()=>{
    // console.log("finally");
})

fetch(`${BASE_URL}/users`).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log("users",data);  
}).catch((err)=>{
    console.log(err);    
}).finally(()=>{
    // console.log("finally");
})


fetch(`${BASE_URL}/genres`).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log("genres",data);  
}).catch((err)=>{
    console.log(err);    
}).finally(()=>{
    // console.log("finally");
})

console.log("1");
console.log("2");
console.log("3");
console.log("4");



function sayHi(){
   return "Hi";
}

console.log(sayHi());

//loops

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//infinite loop
// while (true) {
//     console.log("while");
// }

// for (;;) {
//     console.log("for");
// }


// do while
// do{}
// while(condition);

let str = "lorem ipsum"

console.log(str.substring(2,4));
console.log(str.slice(-4, -1));


const cardNumber = "1234123412341234"

console.log(cardNumber.slice(-4).padStart(20, "*"));



//functions
// declearation / regular function
// arrow function
// function expression


// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,2)); // 3


// const sum = (a,b)=>{
//     return a+b
// }
 const sum = (a,b)=>a+b

 console.log(sum(2,5));
 

const greeting = function(username){
    return `Hello ${username}`
}

// //anonimous functions

// () => {}


// function(){

// }



//HOF - high order functions
const mainFc = (cb)=> {
   return cb()
}

//callback

const callbackFc = ()=>{
    return "I am cb function"
}


// console.log(mainFc(callbackFc));
console.log(mainFc(()=>{
    return "hello"
}));

//IIFE - immediately invoked function expression


// (()=>{
//     console.log("IIFE");
// })()

// (function(){})()



// function test (){
//     return "test"
// }

// test()


console.log(this); // gloabal window object


//objects

//object litheral
const student = {
    firstName: "Ravan",
    lastName: "Umudov",
    faculty: "IT",
    gpa: 3.4,
    isOnline: true,
    skills: ["html", "c#", "js"],
    // getStudentInfo: function(){
    //     return `I am ${this.firstName} ${this.lastName}.`
    // }
    getStudentInfo: ()=>{
        return `I am ${this.firstName} ${this.lastName}.`
    }
}
const student2 = {
    firstName: "Ruslan",
    lastName: "Arabov",
    faculty: "Sport",
    gpa: 3.4,
    isOnline: true,
    skills: ["sweeming", "soccer"],
    getStudentInfo: function(){
        return `I am ${this.firstName} ${this.lastName}.`
    }
}

// console.log(student);
// console.log(student.firstName);
// console.log(student["lastName"]);



console.log(student.getStudentInfo());
console.log(student2.getStudentInfo());

