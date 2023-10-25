const display = document.querySelector("#display");
const remove = document.querySelector("#remove");

display.disabled = true;

let displayValue = display.value;
let result = 0;
let longueur;

test = false;

function click(value) {
    if (displayValue != "0" && test == false) {
        displayValue = displayValue + value
    } else {
        displayValue = value;
        test = false;
    }

    display.value = displayValue;
}
remove.addEventListener("click", () => {

    if (displayValue.length === 1 || test == true) {
        displayValue = "0";
        test = false;
    } else {
        displayValue = displayValue.slice(0, -1);
    }

    display.value = displayValue;
    console.log(displayValue.length);

})


function one() { click("1") }
function two() { click("2") }
function three() { click("3") }
function four() { click("4") }
function five() { click("5") }
function six() { click("6") }
function seven() { click("7") }
function eight() { click("8") }
function nine() { click("9") }
function zero() { click("0") }


function addition() { click("+") }
function substraction() { click("-") }
function multiplication() { click("x") }
function division() { click("/") }

function comma() { click(".") }
function leftParenthesis() { click("(") }
function rightParenthesis() { click(")") }

function enter() {
    displayValue = displayValue.replace("x", "*");
    try {
        result = eval(displayValue);

    } catch (erreur) {
        result = "error";
    }
    display.value = result;
    test = true;
}
function reset() {
    displayValue = "0"
    display.value = displayValue

}

