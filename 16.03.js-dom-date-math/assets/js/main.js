// bom - browser object model


// console.log(window);


// console.log(window.location);
console.log(window.location.href);


// window.location.href = 'https://www.google.com';
// window.location = 'https://www.google.com';


// document.getElementById('back').addEventListener('click', function() {
//     window.history.forward();
//     window.history.back();
// })

//alert, confirm, prompt

// window.alert('Hello World');

// let bool = window.confirm('Are you sure delete?');

// console.log(bool);


// let username = window.prompt('Enter first num', "jhon doe");
// let a = window.prompt('Enter first num');
// let b = window.prompt('Enter second num');

// console.log(parseInt(a) + parseInt(b));


//timing functions

// const timeout = setTimeout(()=>{
//     console.log('Hello World');
// }, 1000)

// console.log(timeout);

// clearTimeout(timeout);


// const interval = setInterval(()=>{
//     console.log("Hello World");
// }, 1000)


// clearInterval(interval);


const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")
const result = document.querySelector(".result")
let timeout = null;
let count = 0;
startBtn.addEventListener('click', (e) => {
    // clearInterval(timeout)
    e.target.disabled = true;
    stopBtn.disabled = false;
    timeout = setInterval(() => {
        count++;
        result.textContent = count;
    }, 500)
})
stopBtn.addEventListener('click', (e) => {
    e.target.disabled = true;
    startBtn.disabled = false;
    clearInterval(timeout)
})

resetBtn.addEventListener('click', () => {
    count = 0;
    result.textContent = count;
    clearInterval(timeout);
    startBtn.disabled = false;
    stopBtn.disabled = false;
})


//date


const currentDate = new Date();
console.log(currentDate);


const firstDate = new Date('2021-02-16');
const secondDate = new Date('2021-01-16');

const diff = (firstDate - secondDate) / (1000 * 60 * 60 * 24);

console.log(diff);

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDay());
console.log(currentDate.getTime());
console.log(Date.now());

console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());


const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


getTime()
function getTime() {
    const date = new Date();
    hours.textContent = date.getHours().toString().padStart(2, '0');
    minutes.textContent = date.getMinutes().toString().padStart(2, '0');
    seconds.textContent = date.getSeconds().toString().padStart(2, '0');
}
setInterval(() => {
    getTime()
}, 1000
)


//math

// console.log(Math.PI);
// console.log(Math.abs(-10)); //10
// console.log(Math.pow(2,5)); //32
// console.log(2**5); //32


// console.log(Math.round(2.5)); //3
console.log(Math.round(-2.6)); //-3

console.log(Math.ceil(2.1)); //3 
console.log(Math.ceil(-2.1)); //-2
console.log(Math.floor(-2.1)); //-3
console.log(Math.floor(2.9)); //2
console.log(Math.trunc(2.9)); //2
console.log(Math.trunc(2.2)); //2
console.log(Math.trunc(-2.2)); //-2


const scores = [86, 94, 75, 85, 96];
console.log(Math.max(...scores)); //96
console.log(Math.min(...scores)); //96


console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); //10
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); //1

const random = Math.floor(Math.random() *100)

// Math.random() * (max - min) + min
// Math.random() * (200 - 100) + 100

console.log(Math.floor(Math.random() * (200 - 100) + 100));


// class (oop)

// object lithreal
// const obj = {
//     name: 'jhon',
//     age: 25,
//     show: function() {
//         console.log('Hello World');
//     }
// }

class Person {
    constructor(name, age) {
        if(this.constructor === Person) {
            throw new Error("Person is Abstract class")
           }
           
        this.name = name;
        this.age = age;
    }
  //methods
  getInfo(){
    return `Name: ${this.name}, Age: ${this.age}`;
  }
  
}

const person1 = new Person('jhon', 25);
const person2 = new Person('doe', 30);

// console.log(person1);
// console.log(person2);


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;

    }
    
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}




const teacher1 = new Teacher('jhon', 25, 'Math');
const student1 = new Student('doe', 30, 5);
console.log(teacher1);
console.log(student1);


let str = "lorem"

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log(str.capitalize());
console.log("hello".capitalize());


console.log(typeof Person);


const p = new Person('jhon', 25);
console.log(p);