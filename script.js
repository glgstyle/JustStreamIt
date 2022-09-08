// requests functions for data-movies
let bestMovieUrl = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7"
  function findTheBestMovie() {
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7")
    .then((response) => response.json())
    .then((data) => {
      let bestMovieInfos = document.createElement('div');
      bestMovieInfos.className = "best-movie-infos";
      let bestMovieInfosLeft = document.createElement('div')
      bestMovieInfosLeft.className = "best-movie-infos-left";
      let bestMovieTitle = document.createElement('h2');
      bestMovieTitle.textContent = data["results"][0]["title"];
      let imageUrl = document.createElement('img');
      imageUrl.src = data["results"][0]["image_url"];
      imageUrl.className = "best-movie-image";
      let descriptionUrl = data["results"][0]["url"]
      let bestMovie = document.querySelector('#best-movie');
      bestMovieInfosLeft.appendChild(bestMovieTitle);
      bestMovieInfos.appendChild(bestMovieInfosLeft)
      bestMovieInfos.appendChild(imageUrl);
      bestMovie.appendChild(bestMovieInfos);
      return fetch(descriptionUrl)
    })
      .then((response) => response.json())
      .then((description) => {
      let playButton = document.createElement('button');
      playButton.innerHTML = "Play";
      let moreButton = document.createElement('button');
      moreButton.innerHTML = "En savoir plus";
      moreButton.className = "more-button";
      moreButton.onclick = function() {
        openMovieDataModal(bestMovieUrl)
      }
      let bestMovieDescription = document.createElement('p');
      bestMovieDescription.textContent = description["description"];
      let bestMovieInfosLeft = document.querySelector(".best-movie-infos-left");
      bestMovieInfosLeft.appendChild(bestMovieDescription);
      bestMovieInfosLeft.appendChild(playButton);
      bestMovieInfosLeft.appendChild(moreButton);
    })
  };
  function openMovieDataModal(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let movieFullDescriptionUrl = ""
      if (data["url"]) {
        movieFullDescriptionUrl = data["url"]
      }
      else{
        movieFullDescriptionUrl = data["results"][0]["url"]
      }
      return fetch(movieFullDescriptionUrl)
    })
    .then((response) => response.json())
      .then((movieFullDescription) => {
        let modalContainer = document.getElementById("modal-container-id")
      let movieInfosModal = document.getElementById("modal-id")
      movieInfosModal.className = "modal";
      let leftSideMovieInfos = document.getElementById("left-side-movie-infos-id")
      let genreDiv = document.getElementById('genre-div');
      let dateDiv = document.getElementById('date-div');
      let ratedDiv = document.getElementById('rate-div');
      let imdbScoreDiv = document.getElementById('imdb-div');
      let directorsDiv = document.getElementById('directors-div');
      let actorsDiv = document.getElementById('actors-div');
      let durationDiv = document.getElementById('duration-div');
      let countryDiv = document.getElementById('country-div');
      let boxOfficeDiv = document.getElementById('box-office-div');
      let descriptionDiv = document.getElementById('description-div');
      // header
      let movieInfosHeader = document.getElementById("movie-infos-header-id");
      // button
      let closeButton = document.getElementById("close-button");
      closeButton.onclick = function () {
        modal = document.querySelector(".modal");
        modal.className = "invisible";
      }
      // data titles
      let genre = document.getElementById('genre');
      let date = document.getElementById('date');
      let rated = document.getElementById('rated');
      let ImdbScore = document.getElementById('imdb');
      let directors = document.getElementById('directors');
      let actors = document.getElementById('actors');
      let duration = document.getElementById('duration');
      let country = document.getElementById('country'); 
      let boxOffice = document.getElementById('box-office');
      let resume = document.getElementById('description');
      // datas
      let movieTitle = document.getElementById('movie-title');
      let movieGenre = document.getElementById('movie-genre');
      let movieDate = document.getElementById('movie-date');
      let movieRated = document.getElementById('movie-rated');
      let movieImdbScore = document.getElementById('movie-imdb');
      let movieDirectors = document.getElementById('movie-directors');
      let movieActors = document.getElementById('movie-actors');
      let movieDuration = document.getElementById('movie-duration');
      let movieCountry = document.getElementById('movie-country');
      let movieBoxOffice = document.getElementById('movie-box-office');
      let movieDescription = document.getElementById('movie-description');
      let movieImage = document.getElementById('image-id')
      movieTitle.textContent = movieFullDescription["title"];
      movieGenre.textContent = movieFullDescription["genres"];
      movieDate.textContent = movieFullDescription["date_published"];
      movieRated.textContent = movieFullDescription["rated"];
      movieImdbScore.textContent = movieFullDescription["imdb_score"];
      movieDirectors.textContent = movieFullDescription["directors"];
      movieActors.textContent = movieFullDescription["actors"];
      movieDuration.textContent = movieFullDescription["duration"];
      movieCountry.textContent = movieFullDescription["countries"];
      movieBoxOffice.textContent = movieFullDescription["votes"];
      movieDescription.textContent = movieFullDescription["description"];
      movieImage.src = movieFullDescription["image_url"];
      // insertion in html
      leftSideMovieInfos.appendChild(movieInfosHeader);
      movieInfosHeader.appendChild(movieTitle); 
      genreDiv.appendChild(genre);
      genreDiv.appendChild(movieGenre);
      leftSideMovieInfos.appendChild(genreDiv);
      dateDiv.appendChild(date);
      dateDiv.appendChild(movieDate);
      leftSideMovieInfos.appendChild(dateDiv);
      ratedDiv.appendChild(rated);
      ratedDiv.appendChild(movieRated);
      leftSideMovieInfos.appendChild(ratedDiv);
      imdbScoreDiv.appendChild(ImdbScore);
      imdbScoreDiv.appendChild(movieImdbScore);
      leftSideMovieInfos.appendChild(imdbScoreDiv);
      directorsDiv.appendChild(directors);
      directorsDiv.appendChild(movieDirectors);
      leftSideMovieInfos.appendChild(directorsDiv);
      actorsDiv.appendChild(actors);
      actorsDiv.appendChild(movieActors);
      leftSideMovieInfos.appendChild(actorsDiv);
      durationDiv.appendChild(duration);
      durationDiv.appendChild(movieDuration);
      leftSideMovieInfos.appendChild(durationDiv);
      countryDiv.appendChild(country);
      countryDiv.appendChild(movieCountry);
      leftSideMovieInfos.appendChild(countryDiv);
      boxOfficeDiv.appendChild(boxOffice);
      boxOfficeDiv.appendChild(movieBoxOffice);
      leftSideMovieInfos.appendChild(boxOfficeDiv);
      descriptionDiv.appendChild(resume);
      descriptionDiv.appendChild(movieDescription);
      leftSideMovieInfos.appendChild(descriptionDiv);
      movieInfosModal.appendChild(closeButton);
      movieInfosModal.appendChild(leftSideMovieInfos);
      movieInfosModal.appendChild(movieImage);
      modalContainer.appendChild(movieInfosModal);
    })
  };
  function topRatedGenre(genre, selectorQuery){
    // if a genre is given charge the page with the given genre
    if (genre != "") {
      url = "http://localhost:8000/api/v1/titles/?genre="+genre+"&sort_by=-imdb_score&page_size=7"
    }
    // charge the page with top rated movies
    else {
      url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7"
    }
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data["results"].length; i++){
      let imageUrl = document.createElement('img');
      imageUrl.src = data["results"][i]["image_url"];
      imageUrl.className = "top-rated-image";
      imageUrl.url = data["results"][i]["url"]
      imageUrl.addEventListener("click", function(event) {
        openMovieDataModal(event.currentTarget.url)
      })
      let bestMovie = document.querySelector(selectorQuery)
      bestMovie.appendChild(imageUrl)
      }
    })};
  function scrollToLeft(idTag) {
    let leftButton = document.getElementById(idTag);
    leftButton.scrollLeft -= 200;
  };
  function scrollToRight() {
    let rightButton = document.getElementById(idTag);
    rightButton.scrollLeft += 200;
  };
  findTheBestMovie()
  topRatedGenre("","#top-rated")
  topRatedGenre("action", "#top-rated-action")
  topRatedGenre("comedy", "#top-rated-comedy")
  topRatedGenre("thriller", "#top-rated-thriller")