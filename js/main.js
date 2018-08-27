let btnSeries = document.getElementById('btn-series');



btnSeries.addEventListener("click", (event) => {
    event.preventDefault();
    window.getMovies.seriesPrint(seriesOb);
});
    
    /*let seriesCard = document.getElementById("seriesCard");
                let cards = '';
                for (let i=0; i<allSeries.length; i++){
                    cards += 
                    `<div class ="item">
                                <div class= "row">
                                    <div class="col sm-6">
                                        <div class="card">
                                            <div class="card-image">
                                                <img src="${allSeries[i].poster}">
                                            </div>
                                        </div>
                                        <div class="card-container">
                                            <span class="card-title">${allSeries[i].title}</span>
                                            <p>${allSeries[i].year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                }
                seriesCard.innerHTML = cards;
                //return cards;
            });*/
