const form = document.querySelector("form")
const BASE_URL = "https://book-store-api-liard-three.vercel.app"

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const title = document.querySelector("#title").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value

    // const newBook = {
    //     title:title,
    //     price:price,
    //     description:description
    // }

    const newBook = {
        title,
        price,
        description
    }

    if(title && description && price){
        addNewData("books", newBook)
        resetForm()
        
    }
    else{
        alert("fill all inputs!")
    }
    
})


function addNewData(endpoint, payload){
    fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
        
    })
}


function resetForm(){
    form.reset()
}