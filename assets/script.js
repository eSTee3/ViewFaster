

var keyTv = "8Y_bdZWnhU4JhXd6lZNrh5UD5jMGbBal";
var keyMovie = "kjG2rO76NTk8hjFjwsfFxxe205z2J4Fd2ZFn66nA";
var inputTv = document.getElementById("tvInput");
var buttonTvElement = document.getElementById("submitTv");
var textTv = document.getElementById("tvInput");
var inputMovie = document.getElementById("movieInput");
var buttonMovieElement = document.getElementById("submitMovie");
var textMovie = document.getElementById("movieInput");

  function getTvShow(tvShow) {

    let tvRequestUrl = "https://api.tvmaze.com/singlesearch/shows?q=" + tvShow;
    fetch(tvRequestUrl)
    .then(function (response) {
      var showName = response
      console.log(showName)


    });
  };

  function getMovie(movie) {

    let movieRequestUrl = "https://api.watchmode.com/v1/search/?apiKey=" + keyMovie + "&search_field=name&search_value=" + movie;
    fetch(movieRequestUrl)
    .then(function (response) {
      var movieName = response
      console.log(movieName)


    });
  };

  buttonTvElement.addEventListener("click", function() {
    event.preventDefault()
    var tvShow = inputTv.value;
    getTvShow(tvShow);
    console.log(tvShow.data);
  });

  buttonMovieElement.addEventListener("click", function() {
    event.preventDefault()
    var movie = inputMovie.value;
    getMovie(movie);
    console.log(movie.data);
  });