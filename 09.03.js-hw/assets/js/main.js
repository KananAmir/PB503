// import sum from "./constants.js";
// import cem from "./constants.js";
import { getDatatFromLocalStorage as getFromLocal, setDataToLocaleStorage } from "./helpers.js";
import { BASE_URL } from "./constants.js";

const searchInput = document.querySelector("#search");
const regionSelect = document.querySelector("#region");
const modeBtn = document.querySelector(".mode-btn");
const sceleton = document.querySelector(".sceleton");

function getAllCountries() {
    fetch(`${BASE_URL}/all`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            renderCards(data)

        })
        .catch(error => console.log(error))
        .finally(()=>{
            sceleton.classList.replace("d-flex", "d-none")
        })

}

getAllCountries()


function renderCards(countries) {
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";
    countries.forEach((country) => {
        cards.innerHTML += `
               <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                    <a href="details.html?name=${country.name?.common}">
                        <div class="card" >
                        <div class="img-wrapper">
                            <img src="${country.flags?.svg}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">${country.name?.common}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </a>
                </div>
        `
    })
}

let timeout;

//search by name
searchInput.addEventListener("keyup", (e) => {
    clearTimeout(timeout)
    const searchValue = e.target.value.trim().toLowerCase();

    if (searchValue === "") {
        getAllCountries()
        return
    }

    timeout = setTimeout(() => {
        fetch(`${BASE_URL}/name/${searchValue}`).then((res) => {
            return res.json()
        })
            .then((data) => {
                renderCards(data)
            })
            .catch((err) => {
                console.log(err);

            })

    }, 500)


})
//filter by region
regionSelect.addEventListener("change", (e) => {
    const selectValue = e.target.value;

    if (selectValue === "all") {
        getAllCountries()
        return
    }

    fetch(`${BASE_URL}/region/${selectValue}`).then((res) => {
        return res.json()
    })
        .then((data) => {
            renderCards(data)
        })
        .catch((err) => {
            console.log(err);
        })

})

const mode = getFromLocal("mode")
if (mode) {
    document.body.classList.add(mode)
    if (mode === "dark") {
        modeBtn.textContent = "Light"
    }
    else {
        modeBtn.textContent = "Dark"
    }
}

modeBtn.addEventListener("click", (e) => {
    if (e.target.textContent === "Light") {
        e.target.textContent = "Dark"
        document.body.classList.replace("dark", "light")
        setDataToLocaleStorage("mode", "light")
    }
    else {
        e.target.textContent = "Light"
        document.body.classList.replace("light", "dark")
        setDataToLocaleStorage("mode", "dark")

    }

})