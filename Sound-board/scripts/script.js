const buttons = document.getElementsByTagName("button");
const audios = document.getElementsByTagName("audio");
var currentActiveIndex = 0;

Array.from(buttons).forEach((button, index) => {

  button.addEventListener("click", evt => {
    // stop and reset time track of current audio
    audios[currentActiveIndex].currentTime = 0;
    audios[currentActiveIndex].pause();
    // start clicked audio and update current active audio
    audios[index].play();
    currentActiveIndex = index;
  });
})

