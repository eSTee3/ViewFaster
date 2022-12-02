var keyTv = "8Y_bdZWnhU4JhXd6lZNrh5UD5jMGbBal";
var inputTv = document.getElementById('tvInput');
var buttonTv = document.getElementById("submitTv");
var textTv = document.getElementById('tvInput');

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.tvmaze.com/singlesearch/shows?q=the voice';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })
};
getApi()

buttonTv.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(textTv.value);
});
  
