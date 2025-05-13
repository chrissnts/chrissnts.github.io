let valS = 0;
let valM = 0;
let valH = 0;
let id;
let posicao = 0;
let contando = false;
let pausando = false;
const velocidadeTiro = 10;
const intervalo = 30;
const shots = [];
let life = 3;
let score = 0;
let velocidadeQueda = 5;
let intervaloInimigos; 

window.onload = function () {
    contar();
    moverNaveInimiga();
};

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

let content = document.body

function pararContar() {
    clearInterval(id);
    contando = false;
    pausando = true;

}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (contando) {
            pararContar();
            document.getElementById("paused").style.display = 'flex';
           
        } else {
            contar();
            document.getElementById("paused").style.display = 'none';
            
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

document.addEventListener('keydown', function (event) {
    if (event.key == ' ') {
        
        shot();
    }
});


function shot() {
    if (pausando) return;
    const shot = document.createElement('div');
    shot.classList.add('shot');


    const contentRect = document.querySelector('#content').getBoundingClientRect();
    const naveRect = nave.getBoundingClientRect();

    console.log(contentRect.left);
    console.log(naveRect.left);
    console.log(naveRect.left - contentRect.left + naveRect.width / 2 - 5);
    shot.style.left = `${(naveRect.left - contentRect.left + naveRect.width / 2 - 5) + 293}px`;
    shot.style.top = `${naveRect.top - contentRect.top - 20}px`;


    shot.style.position = 'absolute';
    document.querySelector('#content').appendChild(shot);
    shots.push({
        element: shot,
        direcao: 'subindo'

    });

}

function moveShots() {
    if (pausando) return;

    const inimigas = document.querySelectorAll("#naveInimiga");

    for (let i = shots.length - 1; i >= 0; i--) {
        const shot = shots[i];
        const el = shot.element;
        let top = parseInt(el.style.top);

        if (shot.direcao === 'subindo') {
            top -= velocidadeTiro;
            el.style.top = `${top}px`;

            if (top < -20) {
                el.remove();
                shots.splice(i, 1);
                continue;
            }

            const shotRect = el.getBoundingClientRect();


            for (let j = 0; j < inimigas.length; j++) {
                const inimiga = inimigas[j];

                if (inimiga.style.display === "none") continue;

                const inimigaRect = inimiga.getBoundingClientRect();

                if (
                    shotRect.bottom >= inimigaRect.top &&
                    shotRect.top <= inimigaRect.bottom &&
                    shotRect.left <= inimigaRect.right &&
                    shotRect.right >= inimigaRect.left
                ) {
                    
                    el.remove();
                    shots.splice(i, 1);
                    
                    inimiga.style.visibility = "hidden";
            
                    score += 1;
                    document.getElementById("score").textContent = "ALIEN: " + score;
                    changeScreen(score);
    
                    break;
                }
            }
        }
    }
}


setInterval(moveShots, intervalo);


function moverNaveInimiga() {
    const inimiga = document.getElementById("containerEnemies");
    const amiga = document.getElementById("naveAmiga");

    intervaloInimigos = setInterval(() => {
        if (pausando) return; 

        const inimigaTop = parseInt(getComputedStyle(inimiga).top || 0);
        inimiga.style.top = (inimigaTop + velocidadeQueda) + "px";

        const inimigaRect = inimiga.getBoundingClientRect();
        const amigaRect = amiga.getBoundingClientRect();

        if (inimigaRect.bottom >= amigaRect.top &&
            inimigaRect.left < amigaRect.right &&
            inimigaRect.right > amigaRect.left) {

            clearInterval(intervaloInimigos);
            life--;
            if (life == 0) {
                document.getElementById("paused").style.display = "flex";
                document.getElementById("paused").innerHTML = "<p>GAME OVER</p>";
                setTimeout(() => location.reload(), 3000);
            } else {
                document.querySelector("#life").textContent = "LIFE: " + life;
                inimiga.style.top = 0;
                moverNaveInimiga();
            }
        }
    }, 30);
}



function changeScreen(score) {
    const body = document.body;

    if (score === 3) {
        body.className = "level2";
        velocidadeQueda += 2;
        life = 3;
        document.querySelector("#life").textContent = "LIFE: " + life;
        reiniciarInimigos();
    } else if (score === 6) {
        body.className = "level3";
        velocidadeQueda += 2;
        life = 3;
        document.querySelector("#life").textContent = "LIFE: " + life;
        reiniciarInimigos();
    } else if (score === 9) {
        body.className = "level4";
        velocidadeQueda += 2;
        life = 3;
        document.querySelector("#life").textContent = "LIFE: " + life;
        reiniciarInimigos();
    }else if (score === 12){
        clearInterval(intervaloInimigos);
        document.getElementById("paused").style.display = "flex";
        document.getElementById("paused").innerHTML = "<p>YOU WIN</p>";
    }
}

function reiniciarInimigos() {
    const inimigas = document.querySelectorAll("#naveInimiga");
    const container = document.getElementById("containerEnemies");

    clearInterval(intervaloInimigos);

    container.style.top = "0"; 
    inimigas.forEach(inimiga => {
        inimiga.style.visibility = "visible";
    });

    moverNaveInimiga();
}
