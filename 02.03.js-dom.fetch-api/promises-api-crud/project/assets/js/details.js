const BASE_URL = "https://book-store-api-liard-three.vercel.app"
const params = new URLSearchParams(window.location.search)


const bookId = params.get("id")

function getDataById(endpoint, id){
    fetch(`${BASE_URL}/${endpoint}/${id}`).then((res)=>{
       return res.json()
    }).then((data)=>{
      
        displayUI(data)
        
    }).catch((err)=>{
        console.log(err);
        
    })
}
getDataById("books", bookId)


 function displayUI(book){
    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const photo = document.querySelector(".photo")

    title.textContent = book.title
    description.textContent = book.description
    photo.src = book.coverImageURL
    photo.style.width = "100%"
}