function PhotoCarousel() {
  const LAST_VISITED_INDEX = "lastVisited";

  // DOM elements
  var show           = document.querySelector(".slider__show"),
      previousButton = document.querySelector(".slider__previous"),
      nextButton     = document.querySelector(".slider__next"),
      photoList      = document.querySelector(".slider__list"),
      photos         = document.querySelectorAll(".slider__list img"),
      currentIndex   = 0,
      numberOfPhotos = photos.length;

  function setConfig() {
    localStorage.setItem( LAST_VISITED_INDEX, currentIndex );
  }

  function getConfig() {
    currentIndex = Number( localStorage.getItem(LAST_VISITED_INDEX) );
  }

  function validateCurrentIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = numberOfPhotos - 1;
    } 
    else if (newIndex >= numberOfPhotos) {
      newIndex = 0;
    }

    return newIndex;
  }

  function updatePhoto(index) {
    photos[currentIndex].classList.remove("active");
    photos[index].classList.add("active");
    photos[index].scrollIntoView({behavior: "smooth", inline: "nearest"});

    currentIndex = index;
    show.style.backgroundImage = `url("${photos[currentIndex].src}")`;
    setConfig();
  }

  nextButton.addEventListener("click", function(evt) {
    let newIndex = validateCurrentIndex( currentIndex + 1 );
    updatePhoto( newIndex );
  });

  previousButton.addEventListener("click", function(evt) {
    let newIndex = validateCurrentIndex( currentIndex - 1 );
    updatePhoto( newIndex );
  });

  photos.forEach((photo, index) => {
    photo.addEventListener("click", function(evt) {
      updatePhoto( index );
    });
  });

  getConfig();
  updatePhoto(currentIndex);
}

PhotoCarousel();