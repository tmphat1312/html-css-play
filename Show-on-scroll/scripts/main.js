const contents = document.querySelectorAll(".container");
const triggerTop = window.innerHeight / 2;

window.addEventListener("scroll", showContent);


function showContent() {
  contents.forEach(content => {
    const offsetTop = content.getBoundingClientRect().top;
    console.log( offsetTop );

    if (offsetTop > 0 && offsetTop < triggerTop) {
      content.classList.add("show");
    }
    else {
      content.classList.remove("show");
    }
  })
}

showContent();