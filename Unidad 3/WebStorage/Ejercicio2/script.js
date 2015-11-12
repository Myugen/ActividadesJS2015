
function cargar() {
    if(localStorage["contador"] != undefined) {
        var cadena = "<p class='text-success'>Ha clicado " + localStorage["contador"] + " veces el botón \"Me gusta\".</p>";
        document.getElementById("info").innerHTML = cadena;
    }
}

function clickLike() {
    if(localStorage["contador"] != undefined) {
        localStorage["contador"]++;
    }
    else {
        localStorage["contador"] = 1;
    }
    var cadena = "<p class='text-success'>Ha clicado " + localStorage["contador"] + " veces el botón \"Me gusta\".</p>";
    document.getElementById("info").innerHTML = cadena;
}