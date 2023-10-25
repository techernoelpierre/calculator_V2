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
function setActive(bool, btn, btnNotActive) {
    if (bool) {
        btn.style.boxShadow = "inset 0px 0px 25px -2px rgba(0,0,0,0.38)";
        btnNotActive.style.boxShadow = "";
    } else {
        btn.style.boxShadow = "";
    }
}


if (!myTheme) {
    setColor("", "rgb(60, 60, 60)", "");
    setActive(!myTheme, light, dark)
} else {
    setColor("rgb(60, 60, 60)", "rgb(255, 255, 255)", "rgb(103, 103, 103)")
    setActive(myTheme, dark, light)
}

light.addEventListener("click", () => {
    myTheme = false;
    setColor("", "rgb(60, 60, 60)", "");
    localStorage.setItem("myTheme", myTheme);
    setActive(!myTheme, light, dark)
})
dark.addEventListener("click", () => {
    myTheme = true;
    setColor("rgb(60, 60, 60)", "rgb(255, 255, 255)", "rgb(103, 103, 103)");
    localStorage.setItem("myTheme", myTheme);
    setActive(myTheme, dark, light)
})