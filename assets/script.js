// List of Variables to use throughout the script
var keyMovie = "kjG2rO76NTk8hjFjwsfFxxe205z2J4Fd2ZFn66nA";
var inputTv = document.getElementById("tvInput");
var buttonTvElement = document.getElementById("submitTv");
var textTv = document.getElementById("tvInput");
var inputMovie = document.getElementById("movieInput");
var buttonMovieElement = document.getElementById("submitMovie");
var textMovie = document.getElementById("movieInput");

// API call function to retrieve TV show data
function getTvShow(tvShow) {
    // Actual TV Show data API call URL
    let tvRequestUrl = "https://api.tvmaze.com/singlesearch/shows?q=" + tvShow;
    fetch(tvRequestUrl)
    .then(function (response) {
      var showName = response
      console.log(showName)


    });
  };

// API call function to retrieve Movie data
function getMovie(movie) {
    // Actual Movie data API call URL
    let movieRequestUrl = "https://api.watchmode.com/v1/search/?apiKey=" + keyMovie + "&search_field=name&search_value=" + movie;

    fetch(movieRequestUrl)
    .then(function (response) {
      var movieName = response
      console.log(movieName)


    });
  };

// Search for TV Show
buttonTvElement.addEventListener("click", function() {
  event.preventDefault()
    var tvShow = inputTv.value;
    getTvShow(tvShow);
    console.log(tvShow);
  });

// Search for Movie
buttonMovieElement.addEventListener("click", function() {
  event.preventDefault()
    var movie = inputMovie.value;
    getMovie(movie);
    console.log(movie);
  });