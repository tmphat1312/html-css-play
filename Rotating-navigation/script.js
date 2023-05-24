function RotateNavigation() {
    var show = document.querySelector(".nav__show");
    var close = document.querySelector(".nav__close");
    var nav = document.querySelector(".nav");
    var content = document.querySelector(".content");


    show.addEventListener("click", function (evt) {
        nav.classList.add("nav--show");
        content.classList.add("rotate20");
    });

    close.addEventListener("click", function (evt) {
        nav.classList.remove("nav--show");
        content.classList.remove("rotate20");
    });
}

RotateNavigation();