const BASE_URL = "https://book-store-api-liard-three.vercel.app"


function getAllData(endpoint){
    fetch(`${BASE_URL}/${endpoint}`).then((res)=>{
        if(!res.ok){
            throw new Error("some error occured!")
        }
        return res.json()
    }).then((data)=>{
        drawCards(data)
    }).catch((err)=>{
        console.log(err);  
    })
}


getAllData("books")
// getAllData("users")
// getAllData("genres")



function drawCards(books){
    const cards = document.querySelector(".cards")
    books.forEach((book)=>{
        const cardWrapper = document.createElement("div")
        cardWrapper.className = "col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"

        cardWrapper.innerHTML = `
             <div class="card mb-2" style="width: 18rem;" >
             <div class="img-wrapper">
                 <img src="${book.coverImageURL}" class="card-img-top" alt="${book.title}">
             </div>
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text">Price: ${book.price}</p>
                    <p class="card-text">Raiting: ${book.rating} &#127775;</p>
                    <a href="details.html?id=${book.id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        `
        cards.appendChild(cardWrapper)

    })
}















// http request methods: get, post, delete, put, patch
// status codes: 
// 2xx - success
// 4xx - client side errors
// 5xx - server side errors