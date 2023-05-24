// Definitions
function handleExpandingCards() {
  var panels = document.querySelectorAll(".panel");
  var currentIndex = 0;

  function activePanel(panel) {
    panel.classList.add("active");
  }

  function inactivePanel() {
    panels[currentIndex].classList.remove("active");
  } 

  panels.forEach((panel, index) => {
    panel.addEventListener('click', evt => {
      activePanel(panel);
      if (currentIndex != index) {
        inactivePanel();
        currentIndex = index;
      }
    });
  });
}


// Implementaion
handleExpandingCards();