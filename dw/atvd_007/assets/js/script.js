let valS = 0;
let valM = 0;
let valH = 0;
let id;
let posicao = 0;
let contando = false;
let pausando = false;


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
    contando = true;
    pausando = false;
}

function pararContar() {
    clearInterval(id);
    contando = false;
    pausando = true;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (contando) {
            pararContar();
        } else {
            contar();
        }
    }
});

let nave = document.getElementById("naveAmiga");

document.addEventListener('keydown', function (event) {

    if (pausando == false) {
        if (event.key == 'ArrowRight' && posicao < 700) {
            posicao += 20;
            nave.style.left = posicao + 'px';
        }

        if (event.key == 'ArrowLeft' && posicao > -800) {
            posicao -= 20;
            nave.style.left = posicao + 'px';
        }
    }

});