const api = 'http://www.omdbapi.com/?apikey=82b3209c&s=Game+of+Thrones&plot=full&type=series'


window.getMovies = (api) => {
    console.log('api');
    console.log(api);
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data.Search);
        let movies = [];
        let title = '';
        let type = '';
        let year = '';
        let poster = '';
        let id = '';
            let info = data.Search;
            for (series in info) {
                let seriesOb = {};
                if (info[series].poster == "N/A") {
                    poster = 'https://gifsanimados.de/img-gifsanimados.de/l/los-simpson/los-simpson-lluvia.gif';
                }else {
                    poster = info[series].Poster;
                }
                title = info[series].Title;
                type = info[series].Type;
                year = info[series].Year;
                id = info[series].imbdID;
                seriesOb.poster = poster;
                seriesOb.title = title;
                seriesOb.type = type;
                seriesOb.year = year;
                seriesOb.id = id;
                movies.push(seriesOb);
                poster = '';
                title = '';
                type = '';
                year = '';
                id = '';
            }
            printAll: (allSeries) => {
                let seriesCard = document.getElementById('seriesCard').addEventListener("click", event => {
                    //let seriesCard = document.getElementById('seriesCard');
                    let card = '';
                        for (let i =0; i<allSeries.length; i++){
                            cards += `<div class = 'card'>
                                <div class = 'row'>
                                    <div class = "col sm-6">
                                        <div class = "card">
                                            <img src = "${allSeries[i].poster}">
                                        </div>
                                        <div class="card-contenet">
                                            <span class="card-title">${allSeries[i].title}</span>
                                            <p>${allSeries[i].year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                        }
                })
                seriesCard.innerHTML = card;
            }
    });
}



