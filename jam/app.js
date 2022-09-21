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

function days() {
    for (let i=28;i<32;i++) {
        const row5 = document.querySelector("#row5");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = i;
        row5.appendChild(newDiv);
    }
    
    for (let j=1;j<31;j++) {
        const row5 = document.querySelector("#row5");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = j;
        row5.appendChild(newDiv);
    }

    const row5 = document.querySelector("#row5");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "1";
    row5.appendChild(newDiv);
}

days();