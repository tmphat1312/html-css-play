function ProgressSteps() {
  "use strict";
  var line = document.querySelector(".line");
  var circles = document.querySelectorAll(".circles .step");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var currentIndex = 0;
  var numberOfSteps = circles.length;
  var segmentWidth = 100 / (numberOfSteps - 1);

  prevBtn.onclick = function (evt) {
    update(evt, -1);
  };

  nextBtn.onclick = function (evt) {
    update(evt, 1);
  };

  function update(evt, move) {
    var newIndex = currentIndex + move;
    if (newIndex < 0 || newIndex >= numberOfSteps) {
      return;
    }

    // line width
    line.style.width = segmentWidth * newIndex + "%";

    // circle border
    if (move == 1) {
      circles[newIndex].classList.add("active");
    }
    else {
      circles[currentIndex].classList.remove("active");
    }

    // button
    if (newIndex == 0) {
      prevBtn.disabled = true;
    }
    else if (newIndex == (numberOfSteps - 1)) {
      nextBtn.disabled = true;
    }
    else {
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }

    currentIndex = newIndex;
  }
}

ProgressSteps();