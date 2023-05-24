
const toggles = document.querySelectorAll(".faq__toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", function(evt) {
    evt.target.closest(".faq").classList.toggle("active");
  })
});