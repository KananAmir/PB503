function setDataToLocaleStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getDatatFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


export { setDataToLocaleStorage, getDatatFromLocalStorage };