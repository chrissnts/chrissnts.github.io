let valS = 00;
let valM = 00;
let valH = 00;
let id;

function add() {

    if (valS >= 60) {
        valS = 0;
        valM++;

    }

    if (valM >= 60) {
        valM = 0;
        valH++;
    }

    valS++;

    if (valS < 10) {
        document.querySelector("#valS").textContent = "0" + valS;
    }
    else {
        document.querySelector("#valS").textContent = valS;
    }

    if (valM < 10) {
        document.querySelector("#valM").textContent = "0" + valM;
    } else {
        document.querySelector("#valM").textContent = valM;
    }

    if (valH < 10) {
        document.querySelector("#valH").textContent = "0" + valH;
    } else {
        document.querySelector("#valH").textContent = valH;
    }


}

function contar() {
    id = setInterval(add, 1000)
}