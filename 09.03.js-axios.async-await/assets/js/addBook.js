const form = document.querySelector("form")
import { endpoints } from "./constants.js"
import { addNewData } from "./services.js"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value


    const book = {
        title,
        price,
        description
    }

    e.target.addEventListener("input", (e) => {
        validateForm()
    })
    
    const isValid = validateForm()

    if (isValid) {
        addNewData(endpoints.books, book).then((res) => {
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
                window.location.href = "index.html";
            })


        }).catch((err) => {
            console.log(err);
        })

    }

})


function validateForm() {
    const title = document.querySelector("#title").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value

    const titleError = document.querySelector(".title-error")
    const priceError = document.querySelector(".price-error")
    const descriptionError = document.querySelector(".description-error")

    titleError.textContent = ""
    priceError.textContent = ""
    descriptionError.textContent = ""

    let isValid = true

    if (title === "") {
        titleError.textContent = "Title is required"
        isValid = false
    } else if (title.length < 8) {
        titleError.textContent = "Title should be at least 8 characters"
        isValid = false
    }

    if (price === "") {
        priceError.textContent = "Price is required"
        isValid = false
    }
    if (description === "") {
        descriptionError.textContent = "Description is required"
        isValid = false
    }

    return isValid
}



