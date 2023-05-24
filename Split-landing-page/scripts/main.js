
const container = document.getElementById("main");
const left = document.querySelector(".split-left");
const right = document.querySelector(".split-right");

left.addEventListener("mouseenter", function(evt) {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", function(evt) {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", function(evt) {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", function(evt) {
  container.classList.remove("hover-right");
});


