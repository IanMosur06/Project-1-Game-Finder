// global variables
var localStorage = {
  platformArray: [],
  genreArray: [],
  rating: [],
};
// rawg api key
var apiKey = '?key=9c9c4ff2f104433ba2fee0058fd0a4bd';

// RAWG API
const options = {
  method: 'GET',
  // headers: {
  //   'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
  //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  // }
};

// Youtube API
const youtube = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// DOM references
r
var searchBtn = document.querySelector ('.button')
var imgEl = document.getElementById('game-img');
var descriptionEl = document.getElementById('game-description')

function appendToLocalStorage (data1, data2) {


function appendToHistory(data1, data2) {

  //for (var i=0; i < 8; i++){
  //var platformData = data1[i].platform.name;
  //console.log(platformData);
  //localStorage.platformArray.push(platformData);
  //console.log(localStorage.platformArray);
  //}
  var img = data2.background_image;
  localStorage.setItem('game-img', img);
  var description = data2.description_raw;
  localStorage.setItem('game-description', description);
  renderItems();
}

function renderItems() {
  var img = localStorage.getItem('game-img');
  //platform
  //genre
  var description = localStorage.getItem('game-description');
  
  imgEl.src = img;
  //platform
  //genre
  descriptionEl.textContent = description;
}


// fetch game title and details
async function fetchGameTitle(search) {
   await fetch(`https://api.rawg.io/api/games/${search}?key=9c9c4ff2f104433ba2fee0058fd0a4bd`, options)
renderItems()
    .then(response => response.json())
    .then(response => {
      if (response.redirect) {
        var gameName = response.slug
        fetchGameTitle(gameName)
      }
      //console.log(search)
      //console.log(response)
      appendToLocalStorage(response.parent_platforms, response);
    })
    .catch(err => console.error(err));
}

function handeSearchFormSubmit(event) {
  event.preventDefault();
  var gameSearch = document.getElementById('input').value;
  if (!gameSearch) {
    alert("Please enter a game title!");
    return;
  } else {
    fetchGameTitle(gameSearch);
  }
  window.location.href="results.html"
}


searchBtn.addEventListener('click', handeSearchFormSubmit)

// localStorage.setItem("game-data", JSON.stringify(localStorage));

// if(localStorage.getItem("game-data") !== null){
//   var searchedGamed = JSON.parse(localStorage.getItem("game-data"));
// }else {
//   console.log("error, Nothing in storage");
// }

// // user input function
// function handleGameSearch() {


//   // if input full call fetch coords
//   var search = inputEl.value;
//   fetchgame(search);
//   inputEl.value = "";
// }



