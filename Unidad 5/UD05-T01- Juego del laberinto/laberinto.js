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
    alert("¡Has perdido!");
    var bloques = document.getElementsByClassName("bloque");
    for(var i = 0; i < bloques.length; i++) {
        bloques[i].onmouseover = null;
        bloques[i].classList.add("youlose");
    }
    var fin = document.getElementById("fin");
    fin.onmouseover = null;
    var laberinto = document.getElementById("laberinto");
    laberinto.onmouseout = null;
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
    laberinto.onmouseout = perdiste;
}

function cargar() {
    var bloquesLose = document.getElementsByClassName("youlose");
    var tamanioBloquesLoses = bloquesLose.length;
    for(var i = 0; i < tamanioBloquesLoses; i++)
        bloquesLose[i].classList.remove("youlose");
    var inicio = document.getElementById("inicio");
    inicio.onclick = iniciar;
}