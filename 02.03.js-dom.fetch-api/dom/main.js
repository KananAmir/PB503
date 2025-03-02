// const heading = document.querySelector("#heading")
const heading = document.getElementById("heading")
const list = document.querySelector(".list")
//innerHtml
//createElement


const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies

// webTechs.forEach((tech)=>{
//     list.innerHTML += `<li>${tech}</li>`
// })

webTechs.forEach((tech) => {
    const liElem = document.createElement("li")
    liElem.textContent = tech

    liElem.classList.add("bg-teal")

    // liElem.addEventListener("click", function() {
    //     // console.log(this);
    //     this.remove()
    // })

    
    liElem.addEventListener("click", (e) => {
        // console.log(e.target);
        // e.target.remove()
    })

    // list.append(liElem)
    list.appendChild(liElem)



})


//classList: add, remove, toggle, contains, replace



const resultElement = document.querySelector(".result")
const operation = document.querySelector("#operation")
const firstInput = document.querySelector(".first")
const secondInput = document.querySelector(".second")
const calcBtn = document.querySelector(".calc")



calcBtn.addEventListener("click", (e)=>{
    let result = 0
    switch (operation.value) {
        case "plus":
            result = +firstInput.value + +secondInput.value
            break;
        case "minus":
            result = +firstInput.value - +secondInput.value
            break;
        case "multiple":
            result = +firstInput.value * +secondInput.value
            break;
        case "divide":
            if(secondInput.value == 0){
                window.alert("you can not diivide by 0!")
                return;
            }
            
            result = +firstInput.value / +secondInput.value
            break;
    
        default:
            window.alert("select operation!!!")
    }


    resultElement.textContent = result
})


//random bg color

const randomBgBtn = document.querySelector(".random-bg")

randomBgBtn.addEventListener("click", ()=>{
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor =`rgb(${r}, ${g}, ${b})`

    console.log(`rgb(${r}, ${g}, ${b})`);
    
})