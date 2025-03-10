const id = new URLSearchParams(window.location.search).get("id");
import { endpoints } from "./constants.js";
import { getDataById } from "./services.js";
const backBtn = document.querySelector(".back-btn");

if (!id) {
  window.location.href = "index.html";
}

async function getBook() {
  try {
    const book = await getDataById(endpoints.books, id);
    drawBook(book);
    console.log(book);
    
  } catch (error) {
    console.log(error);
  }
}
getBook()

function drawBook(book) {
    const title = document.querySelector(".title");
    title.textContent = book.title;
}

// backBtn.addEventListener("click", () => {
// //  window.location.href = "index.html";
//  window.history.back()
// });

backBtn.addEventListener("click", goBack);

function goBack() {
  window.history.back();
}