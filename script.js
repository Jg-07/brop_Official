let key = document.querySelector(".plane");
let key2 = document.querySelector(".key2");
let sideNav = document.querySelector(".sec3");
let hidder = document.querySelector(".hidder");
let button1 = document.querySelector("#b1");
let button2 = document.querySelector("#b2");
let button3 = document.querySelector("#b3");
let topNav = document.querySelector(".topnav");
let t1 = document.querySelector("#l1");
let t2 = document.querySelector("#l2");
let t3 = document.querySelector("#l3");
let load = document.querySelector('.load');

let i = 0;
let j = 0;


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

key2.addEventListener("click", function () {
    if (j % 2 == 0) {
        topNav.classList.add("exp1")
        hidder.classList.add("display")
        key2.classList.add("rot")
    }
    else {
        topNav.classList.remove("exp1")
        hidder.classList.remove("display")
        key2.classList.remove("rot")
    }
    j++;
})

t1.addEventListener("click", function () {
    topNav.classList.remove("exp1")
    hidder.classList.remove("display")
    key2.classList.remove("rot")
    j++;
})

t2.addEventListener("click", function () {
    topNav.classList.remove("exp1")
    hidder.classList.remove("display")
    key2.classList.remove("rot")
    j++;
})

t3.addEventListener("click", function () {
    topNav.classList.remove("exp1")
    hidder.classList.remove("display")
    key2.classList.remove("rot")
    j++;
})

document.getElementById('copy_btn').onclick = function () {
    const text = this
    navigator.clipboard.writeText('support@brop.in')
        .then(function () {
            text.innerText = 'Mail Copied';
            text.style.color = '#0455CB';
            text.style.backgroundColor = "white";

            setTimeout(function () {
                text.innerText = 'support@brop.in';
                text.style.color = 'white';
                text.style.backgroundColor = '#0455CB';
            }, 1000)
        })
}


