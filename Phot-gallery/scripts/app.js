const $slta = document.querySelectorAll.bind(document);
const $slt  = document.querySelector.bind(document);

{
  var galleryPhotos         = $slta('.gallery__photo img');
  var currentIndex          = 0;
  var numOfPhotos           = galleryPhotos.length;
  var gallerySlider         = $slt('.gallery__slider');
  var sliderNumbers         = $slt('.slider__numbers');
  var sliderPhoto           = $slt('.slider__photo');

  var closeGallerySliderBtn = $slt('.slider__close');
  var nextPhotoBtn          = $slt('.slider__forward');
  var previousPhotoBtn      = $slt('.slider__backward');

  // Show gallery slider
  function toggleGallerySlider() {
    gallerySlider.classList.toggle('hidden');
  }

  // Update photo on slider
  function updateSlider() {
    sliderNumbers.innerText = `${currentIndex + 1} / ${numOfPhotos}`;
    sliderPhoto.src = galleryPhotos[currentIndex].src;
    
    // Limit changing photo on slider buttons
    if (currentIndex == 0) {
      previousPhotoBtn.style.display = 'none';
    } 
    else if (currentIndex == numOfPhotos - 1) {
      nextPhotoBtn.style.display = 'none';
    } 
    else {
      previousPhotoBtn.style.display = 'block';
      nextPhotoBtn.style.display = 'block';
    }
  }

  // previous or next photo on slider
  function updateSliderPhoto(move) {
    var newIndex = currentIndex + move;
    if (newIndex >= 0 && newIndex < numOfPhotos) {
      currentIndex = newIndex;
    }
    updateSlider();
  }

  // Show photos slider by clicking on photos in gallery
  galleryPhotos.forEach((photo, index) => {
    photo.addEventListener('click', function(event) {
      currentIndex = index;
      updateSlider();
      toggleGallerySlider();
    });
  })


  // Close photo slider
  closeGallerySliderBtn.addEventListener('click', toggleGallerySlider);
  // gallerySlider.addEventListener('click', function(event) {
  //   if (event.target == event.currentTarget) {
  //     toggleGallerySlider();
  //   }
  // });
  document.addEventListener('keydown', function(event) {
    var key = event.keyCode;
    // Hide photos slider by click on close button or pres ESC
    if (key == 27) {
      toggleGallerySlider();
    } 
    else if (key == 37) {
      updateSliderPhoto(-1);
    }
    else if (key == 39) {
      updateSliderPhoto(1);
    } 
  });



  // Show next photo on slider
  nextPhotoBtn.addEventListener('click',function(event) {
    updateSliderPhoto(1);
  });

  // Show previous photo on slider
  previousPhotoBtn.addEventListener('click', function(event) {
    updateSliderPhoto(-1);
  });
}
