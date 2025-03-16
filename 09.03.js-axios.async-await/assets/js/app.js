import { endpoints } from "./constants.js";
import { getAllData, getDataById } from "./services.js";


console.log(getAllData(endpoints.books));

const favorites = JSON.parse(localStorage.getItem("favs")) || []

// getAllData("books").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// async function getBooks(){
//  try {   
//     const books = await getAllData(endpoints.books)
//     drawCards(books)
//  } catch (error) {
//     console.log(error);
//  }
// }


async function getBooks(){
    try {
        const books = await getAllData(endpoints.books)
        drawCards(books)
    } catch (error) {
        console.log(error);
    }
}


getBooks()



function drawCards(books){
    const cards = document.querySelector(".cards")
    books.forEach((book)=>{
        const cardWrapper = document.createElement("div")
        cardWrapper.className = "col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-3"

        cardWrapper.innerHTML = `
             <div class="card mb-2" style="width: 18rem;" >
             <div class="img-wrapper">
                 <img src="${book.coverImageURL}" class="card-img-top" alt="${book.title}">
             </div>
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <button >
                        <i class="${favorites.find((q)=> q == book.id) ? "fa-solid" : "fa-regular"} fa-heart card-like text-danger" data-id="${book.id}"></i>
                    </button>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text">Price: ${book.price}</p>
                    <p class="card-text">Raiting: ${book.rating} &#127775;</p>
                    <a href="details.html?id=${book.id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        `
        cards.appendChild(cardWrapper)

    })


    const allFavBtns = document.querySelectorAll(".card-like")

    allFavBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const id = e.target.getAttribute("data-id")
            const idx = favorites.findIndex((q)=> q == id)
            
            if(idx === -1){
                const book = books.find((book)=> book.id == id)
                favorites.push(book.id)
                btn.classList.replace("fa-regular", "fa-solid")

            }else{
                favorites.splice(idx, 1)
                btn.classList.replace("fa-solid", "fa-regular")
            }

            localStorage.setItem("favs", JSON.stringify(favorites))
            calculateFavsCount()
        })
    })
}

calculateFavsCount()

function calculateFavsCount (){
    const favsCount = document.querySelector(".favs-count")
    const favs = JSON.parse(localStorage.getItem("favs")) || []
    favsCount.textContent = favs.length
}