const apiKey = "api_key=e932eb3f7ed10e514897aeab06f9ce70";
var query = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "& " + "query=" + movie;
var movie;
function showAlert(){
    movie = document.getElementById("target").value;
    console.log(enteredText);
}