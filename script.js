

var keyTv = "8Y_bdZWnhU4JhXd6lZNrh5UD5jMGbBal";
var inputTv = document.getElementById('tvInput');
var buttonTv = document.getElementById("submitTv");
var textTv = document.getElementById('tvInput');
var inputMovie = document.getElementById('movieInput');
var buttonMovie = document.getElementById("submitMovie");
var textMovie = document.getElementById('movieInput');

  function getTvShow(tvShow) {


    let requestUrl = "https://api.tvmaze.com/singlesearch/shows?q=The_Voice";
    fetch(requestUrl)
      .then(function (response) {
        var output = response
        console.log(output);
      })
    };


  buttonTv.addEventListener("click", function(event) {
      event.preventDefault();
      console.log(textTv.value);
  });

  buttonMovie.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(textMovie.value);
});


