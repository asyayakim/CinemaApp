function updateViewMovies() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main">
    <div class="header">
    <h1>Movies in the cinema</h1>
    </div>
    <div class="search-container">
    <div class="searchText">
    Search:<br/>
    </div>
    <div class="search">
    <input type="text" id="myInputSearch" onkeyup="searchMovies()" placeholder="Search for movies in the cinema..">
    </div>
    </div>
        <div class="movies-grid">
        ${createMoviesHtml()}
        </div>
        </div>
    `;
}

let searchMode = false;
function createMoviesHtml() {
    const movies = model.movies;
    let html = '';
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        if (searchMode === false) {

            html += /*HTML*/`
                <div class="movie-card" onclick="showMovie(${movie.id})">
                    <div class="movie-image">
                        <img src="${movie.imageUrl}"/>
                    </div>
                    <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p class="movie-year-genre">${movie.year} | ${movie.genre}</p>
                        <!--<div>${movie.movieLanguage}</div>--->
                    </div>
                </div>
            `;
        }
        if (searchMode === true) {
           searchMovies();
        }
        
    }
    return html;
}
function searchMovies() {
    let movieList = model.movies;
    console.log(movieList);
    let html = '';
    let movieGrid = document.querySelector('.movies-grid');
    const searchString = document.getElementById('myInputSearch').value;
    if (searchString === '' || searchString === null) {
        searchMode = false;
        createMoviesHtml();
        return;
    }
    else {
        searchMode = true;
        if (searchMode === true) {
            movieList = model.movies;
        
            for (let i = 0; i < movieList.length; i++) {
                const movie = movieList[i];
                if (movie.title.toLowerCase().includes(searchString.toLowerCase())) {
                    console.log(searchString.toLowerCase());
                    html += /*HTML*/`
                    <div class="movie-card" onclick="showMovie(${movie.id})">
                        <div class="movie-image">
                            <img src="${movie.imageUrl}"/>
                        </div>
                        <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <p class="movie-year-genre">${movie.year} | ${movie.genre}</p>
                            <!--<div>${movie.movieLanguage}</div>--->
                        </div>
                    </div>
                `;
                }
                
            }
        }
    }
   movieGrid.innerHTML = html;
}