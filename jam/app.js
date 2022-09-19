const viewCalender = document.querySelector(".button");
const view_m = document.querySelector(".dropdown-content");

function clickedViewCalender() {
    view_m.style.display = "block";
}

function bluredViewCalender() {
    view_m.style.display = "none";
}

viewCalender.addEventListener("click", clickedViewCalender);
viewCalender.addEventListener("blur", bluredViewCalender);