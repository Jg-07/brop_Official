let key = document.querySelector(".plane");
let sideNav = document.querySelector(".sec3");
let hidder = document.querySelector(".hidder");
let button1 = document.querySelector("#b1");
let button2 = document.querySelector("#b2");
let button3 = document.querySelector("#b3");
let i = 0;


key.addEventListener("click", function () {
    if (i % 2 == 0) {
        sideNav.classList.add("exp")
        hidder.classList.add("display")
        key.classList.add("rot")
    }
    else {
        sideNav.classList.remove("exp")
        hidder.classList.remove("display")
        key.classList.remove("rot")
    }
    i++;
})

button1.addEventListener("click", function () {
    sideNav.classList.remove("exp")
    hidder.classList.remove("display")
    key.classList.remove("rot")
    i++;
})

button2.addEventListener("click", function () {
    sideNav.classList.remove("exp")
    hidder.classList.remove("display")
    key.classList.remove("rot")
    i++;
})

button3.addEventListener("click", function () {
    sideNav.classList.remove("exp")
    hidder.classList.remove("display")
    key.classList.remove("rot")
    i++;
})