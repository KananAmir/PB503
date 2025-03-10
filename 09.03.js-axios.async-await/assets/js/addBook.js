const form = document.querySelector("form")
import {endpoints} from "./constants.js"
import { addNewData } from "./services.js"

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const title = document.querySelector("#title").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value

    
    const book = {
        title,
        price,
        description
    }

    if(title && price && description){
       addNewData(endpoints.books, book).then((res)=>{
           console.log(res);
           form.reset()
        //    if(res.status === 201){
        //        alert("Book added successfully")
        //    }

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Book added successfully!",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.href = "index.html";   } )
           
       
       }).catch((err)=>{
           console.log(err); 
        })   

    }else{
        alert("Please fill all fields")
    }
    
})

