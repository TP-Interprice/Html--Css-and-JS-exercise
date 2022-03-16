let filterSelect = document.querySelector("#filterSelect")
let filmsList = document.querySelector(".films-list")
let form = document.querySelector("form")
function renderedGenres (array) {
    for(let element of array){
        let option = document.createElement("option")
        option.textContent = element.genre
        option.value = element.id
        filterSelect.appendChild(option)
    }
}

function renderedFilms(array, genresList) {
    filmsList.innerHTML = null
    let html = ''
    for(let element of array){
        let found = genresList.find(e => e.id === element.genre)
        html += '<li class="films-item">'
        html += '<div>' + element.useLink + '</div>'
        html += '<div class="item-content">'
        html += '<h3>' + element.title + '</h3>'
        html += '<span>' + found.genre + '</span>'
        html += '</div>'
        html += '</li>'
    }
    filmsList.innerHTML = html
}

function filterFilms(array, genreKey){
    let filter = []
    for(let film of array){
        if(film.genre == genreKey){
            filter.push(film)
        }
        else if(genreKey == 0) {
            return array
        }
    }
    return filter
}

form.addEventListener("submit", event => {
    event.preventDefault();
    let filtered = filterFilms(films, filterSelect.value)
    renderedFilms(filtered, genres)
})
renderedGenres(genres)
renderedFilms(films, genres)