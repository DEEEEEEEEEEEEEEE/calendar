const viewCalender = document.querySelector(".dropdown-button");
const view_m = document.querySelector(".dropdown-content");

function clickedViewCalender() {
    view_m.style.display = "block";
}

function bluredViewCalender() {
    view_m.style.display = "none";
}

viewCalender.addEventListener("click", clickedViewCalender);
viewCalender.addEventListener("blur", bluredViewCalender);

const arrayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

for (let w=0;w<arrayWeek.length;w++) {
    const newSpan = document.createElement("span");
    newSpan.innerHTML = arrayWeek[w];
    const r4 = document.querySelector("#row4");
    r4.appendChild(newSpan);
}