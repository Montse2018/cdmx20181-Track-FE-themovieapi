const api = 'http://www.omdbapi.com/?apikey=82b3209c&s=Game+of+Thrones&plot=full&type=series'


window.getMovies = (api) => {
    console.log('api');
    console.log(api);
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data.Search);

    })
}

/*getMovies("82b3209c", "Game of Thrones")

.then(function (response) {
    console.log(response);
    let title = response.Title;
    let image = response.Poster;
    let year = response.Year;
})*/

