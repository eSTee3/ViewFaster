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






let tvsearchHistory = JSON.parse(localStorage.getItem("search")) || [];
let moviesearchHistory = JSON.parse(localStorage.getItem("search")) || [];

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
      tvShowNameElement.style.display = "flex"
      tvShowScheduleElement.style.display = "flex"
      tvShowPictureElement.style.display = "flex"

      if (showsite != null) {
      tvShowNameElement.innerHTML = "<a style=color:red href="+""+showsite+""+">"+name+"</a>";
      tvShowPictureElement.innerHTML = "<img src="+""+image+""+" alt="+""+name+""+">";
      tvShowScheduleElement.innerHTML = "Upcoming Schedule: "+scheduledays+" at "+scheduletime;
      }else {
      tvShowNameElement.innerHTML = name;
      tvShowPictureElement.innerHTML = "<img src="+""+image+""+" alt="+""+name+""+">";
      tvShowScheduleElement.innerHTML = "Upcoming Schedule: "+scheduledays+" at "+scheduletime;
      }
      
      

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

    fetch(movieRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function(data){
      console.log(data)
      let results = data.title_results

      console.log(results)

      movieNameElement.style.display = "block"


      movieNameElement.innerHTML = ""
      for (let i= 0; i< 5; i++) {
      
        console.log(results[i].name)
        var movieTitle = results[i].name
        var movieImdbId = results[i].imdb_id
        var movieYear = results[i].year
        var movieType = results[i].type

      let movieItem = document.createElement("li")
        movieItem.innerHTML = "<a style=color:red href="+""+"https://www.imdb.com/title/"+movieImdbId+""+">"+ movieType.toUpperCase() +": "+movieTitle+"  [Released: "+movieYear+"]</a>"  
        movieNameElement.append(movieItem)      
      };
    }
    )};




// Search for TV Show
buttonTvElement.addEventListener("click", function() {
  event.preventDefault()
    var tvShow = inputTv.value;
    getTvShow(tvShow);
    tvsearchHistory.push(tvShow);
    localStorage.setItem("tvSearch", JSON.stringify(tvsearchHistory));
    console.log(tvShow);
    var i;

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.getItem(localStorage.key(i)));
    }

  });

// Search for Movie
buttonMovieElement.addEventListener("click", function() {
  event.preventDefault()
    var movie = inputMovie.value;
    getMovie(movie);
    moviesearchHistory.push(movie);
    localStorage.setItem("movieSearch", JSON.stringify(moviesearchHistory));
    console.log(movie);
  });
