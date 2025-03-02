const BASE_URL = "https://book-store-api-liard-three.vercel.app"


function getAllData(endpoint){
    fetch(`${BASE_URL}/${endpoint}`).then((res)=>{
        if(!res.ok){
            throw new Error("some error occured!")
        }
        return res.json()
    }).then((data)=>{
        console.log(data);
        
        drawTable(data)
    }).catch((err)=>{
        console.log(err);  
    })
}

getAllData("books")

function drawTable(books){
    const tBody = document.querySelector("tbody")
    tBody.innerHTML = ""
    books.forEach((book)=>{
        const trElem = document.createElement("tr")
        trElem.innerHTML = `
                <td>${book.id}</td>
                <td>
                    <img src="${book.coverImageURL}"width="100" />
                </td>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button data-id="${book.id}" class="btn btn-outline-danger delete-btn">delete</button>
                </td>
        `
        console.log(book);
        

        tBody.appendChild(trElem)
    })

    const allDeleteBtns = document.querySelectorAll(".delete-btn")


    allDeleteBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const id = e.target.getAttribute("data-id")
            deleteData("books", id, btn)
        })
    })
}


function deleteData(endpoint, id, deleteBtn){
    fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "DELETE"
    }).then((res)=>{
        console.log(res);
        // getAllData("books")
        // deleteBtn.parentElement.parentElement.remove()
        deleteBtn.closest("tr").remove()
        
    }).catch((err)=>{
        console.log(err); 
    })
}









