let getAll = document.querySelectorAll("*");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const body = document.querySelector("body");
let getTheme = JSON.parse(localStorage.getItem("myTheme"));

let myTheme = getTheme;

function setColor(color, getColor, border) {
    for (let i = 0; i < getAll.length; i++) {
        let style = window.getComputedStyle(getAll[i]);
        if (style.backgroundColor === getColor) {
            getAll[i].style.backgroundColor = color;
            body.style.backgroundColor = color;
            getAll[i].style.color = getColor;
            getAll[i].style.borderColor = border;
            getAll[i].style.outlineColor = border;
        }

    }
}

if (!myTheme) {
    setColor("", "rgb(60, 60, 60)", "");
} else {
    setColor("rgb(60, 60, 60)", "rgb(255, 255, 255)", "rgb(103, 103, 103)")
}

light.addEventListener("click", () => {
    myTheme = false;
    setColor("", "rgb(60, 60, 60)", "");
    localStorage.setItem("myTheme", myTheme);
})
dark.addEventListener("click", () => {
    myTheme = true;
    setColor("rgb(60, 60, 60)", "rgb(255, 255, 255)", "rgb(103, 103, 103)");
    localStorage.setItem("myTheme", myTheme);

})