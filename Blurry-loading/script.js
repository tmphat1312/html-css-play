
const background = document.querySelector(".bg");
const progress = document.querySelector(".loading-progress");

var load = 0;
var int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  progress.innerText = `${load}%`;
  progress.style.opacity = `${scale(load, 0, 100, 0, 1)}`;
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
