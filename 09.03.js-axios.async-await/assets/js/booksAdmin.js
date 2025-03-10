import { endpoints } from "./constants.js";
import { deleteDataById, getAllData } from "./services.js"


const getBooks = async () => {
    try {
        const books = await getAllData(endpoints.books)
        drawTable(books)
    } catch (error) {
        console.log(error);
    }
}
getBooks()

function drawTable(books) {
    const tBody = document.querySelector("tbody")
    tBody.innerHTML = ""
    books.forEach((book) => {
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


    allDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {

            Swal.fire({
                title: "Are you sure to delete book?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                        const id = e.target.getAttribute("data-id")
                        deleteDataById(endpoints.books, id)
                        // getBooks()
                        e.target.closest("tr").remove()
                        Swal.fire({
                        title: "Deleted Successfully!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });



        })
    })
}







