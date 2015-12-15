function ganaste(fin) {
    alert("¡Enhorabuena, has ganado!");
    var bloques = document.getElementsByClassName("bloque");
    for(var i = 0; i < bloques.length; i++)
        bloques[i].onmouseover = null;
    fin.onmouseover = null;
    if(confirm("¿Desea volver a empezar?"))
        cargar();
}

function perdiste() {
    var bloques = document.getElementsByClassName("bloque");
    for(var i = 0; i < bloques.length; i++) {
        bloques[i].onmouseover = null;
        bloques[i].classList.add("youlose");
    }
    alert("¡Has perdido!");
    var fin = document.getElementById("fin");
    fin.onmouseover = null;
    var laberinto = document.getElementById("laberinto");
    laberinto.onmouseleave = null;
    if(confirm("¿Desea volver a empezar?"))
        cargar();
}

function iniciar() {
    var bloques = document.getElementsByClassName("bloque");
    for(var i = 0; i < bloques.length; i++)
        bloques[i].onmouseover = perdiste;
    var fin = document.getElementById("fin");
    fin.onmouseover = function() {ganaste(this)};
    var laberinto = document.getElementById("laberinto");
    laberinto.onmouseleave = perdiste;
}

function cargar() {
    var bloquesLose = document.getElementsByClassName("youlose");
    var tamanioBloquesLoses = bloquesLose.length;
    while(bloquesLose.length > 0)
        bloquesLose[0].classList.remove("youlose");
    var inicio = document.getElementById("inicio");
    inicio.onclick = iniciar;
}