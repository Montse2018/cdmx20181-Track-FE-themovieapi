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
            console.log(info);
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
                console.log(seriesOb);
                seriesPrint(seriesOb);
                console.log(seriesPrint);
            }
            //return seriesOb;
            //console.log(movies);
            //seriesPrint(allSeries);
            }),
            seriesPrint = (seriesOb) => {
                let seriesCard = document.getElementById("seriesCard");
                let cards = '';
                for (let i=0; i<seriesOb.length; i++){
                    cards += 
                    `<div class ="item">
                                <div class= "row">
                                    <div class="col sm-6">
                                        <div class="card">
                                            <div class="card-image">
                                                <img src="${seriesOb[i].poster}">
                                            </div>
                                        </div>
                                        <div class="card-container">
                                            <span class="card-title">${seriesOb[i].title}</span>
                                            <p>${seriesOb[i].year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                        seriesCard.innerHTML = cards;
                }
                //seriesCard.innerHTML = cards;
                return cards;
            }
            
}





