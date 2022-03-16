let films = window.localStorage.getItem("data")
if(!films) films = [{  title: "USA",  genre: 5, useLink: `<iframe width="500" height="315" src="https://www.youtube.com/embed/oL7gU66lRXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}]
else films = JSON.parse(films)

let genres = [
    {
        id: 1,
        genre: "public"
    },
    {
        id: 2,
        genre: "social"
    },
    {
        id: 3,
        genre: "learning"
    },
    {
        id: 4,
        genre: "study"
    },
    {
        id: 5,
        genre: "comedy"
    }
]