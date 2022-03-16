let adminSelect = document.querySelector("#adminSelect")
let iframeInput = document.getElementById("iframeInput")
let titleInput = document.getElementById("titleInput")
let filmsAdd = document.querySelector(".films-add")

function genresRender (array) {
    for(let element of array){
        let optionGenre = document.createElement("option")
        optionGenre.innerText = element.genre
        optionGenre.value = element.id;
        adminSelect.appendChild(optionGenre)
    }
}

genresRender(genres)

filmsAdd.onsubmit = function (e) {
    e.preventDefault()
    let filmsAdded = {
        title: `${titleInput.value}`,
        genre: adminSelect.value - 0,
        useLink: `${iframeInput.value}`
    }
    films.push(filmsAdded)
    window.localStorage.setItem("data", JSON.stringify(films))
    iframeInput.value = null
    titleInput.value = null
}