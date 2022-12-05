// List of Variables to use throughout the script
var keyMovie = "kjG2rO76NTk8hjFjwsfFxxe205z2J4Fd2ZFn66nA";
var inputTv = document.getElementById("tvInput");
var buttonTvElement = document.getElementById("submitTv");
var textTv = document.getElementById("tvInput");
var inputMovie = document.getElementById("movieInput");
var buttonMovieElement = document.getElementById("submitMovie");
var textMovie = document.getElementById("movieInput");

var tvShowNameElement = document.getElementById("showName");
var tvShowScheduleElement = document.getElementById("showSchedule");
var tvShowPictureElement = document.getElementById("tvPic")

var movieNameElement = document.getElementById("movieName")
var movieYearElement = document.getElementById("movieYear")






let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// API call function to retrieve TV show data
function getTvShow(tvShow) {
    // Actual TV Show data API call URL
    let tvRequestUrl = "https://api.tvmaze.com/singlesearch/shows?q=" + tvShow;
    console.log(tvRequestUrl)
    fetch(tvRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function(data){
      console.log(data)
      var name = data.name
      var showsite = data.officialSite
      var image = data.image.medium
      var scheduledays = data.schedule.days
      var scheduletime = data.schedule.time

      // 
      tvShowNameElement.innerHTML = "<a style=color:red href="+""+showsite+""+">"+name+"</a>";
      tvShowPictureElement.innerHTML = "<img src="+""+image+""+" alt="+""+name+""+">";
      tvShowScheduleElement.innerHTML = "Upcoming Schedule: "+scheduledays+" at "+scheduletime;


      

      console.log("Show Name: "+name)
      console.log(image)
      console.log("On TV: "+scheduledays+" at "+scheduletime)
      console.log("Official site: "+showsite)
    })
};

// API call function to retrieve Movie data
function getMovie(movie) {
    // Actual Movie data API call URL
    let movieRequestUrl = "https://api.watchmode.com/v1/search/?apiKey=" + keyMovie + "&search_field=name&search_value=" + movie;

    // TODO: Figure out how to show all movies that match search
    fetch(movieRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function(data){
      console.log(data)
      var movieTitle = data.title_results[0].name
      var movieImdbId = data.title_results[0].imdb_id
      var movieYear = data.title_results[0].year

      movieNameElement.innerHTML = "<a style=color:red href="+""+"https://www.imdb.com/title/"+movieImdbId+""+">"+movieTitle+"  (Released: "+movieYear+")</a>";
    })
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
