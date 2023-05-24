const $get = document.querySelector.bind(document);

var range = $get(".range");
var progress = $get(".progress");
var progressNumber = $get(".progress__number");

range.addEventListener("mousemove", function(evt) {
  var progressWidth = Math.round((evt.clientX - this.offsetLeft) / this.clientWidth * 100);
  
  progress.style.width = progressWidth + "%";
  progressNumber.innerText = progressWidth + "%";
});
