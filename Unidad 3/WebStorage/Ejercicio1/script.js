function obtenerHistorial() {
    var auxArray = JSON.parse(localStorage["frase"]);
    var aux = "";
    for (var i = 0; i < auxArray.length; i++)
        aux += auxArray[i];
    return aux;
}
function iniciar() {
    var sustantivo = "";
    var nombre = "";
    var adjetivo = "";
    var historial = "";
    if(localStorage["name"] != undefined)
        nombre = localStorage["name"];
    if(localStorage["frase"] == undefined)
        localStorage["frase"] = new Array();
    if(localStorage["adjective"] != undefined)
        adjetivo = localStorage["adjective"];
    if(localStorage["noun"] != undefined)
        sustantivo = localStorage["noun"];
    if(localStorage["frase"].length == 0)
        historial = "No hay historial";
    else
        historial = obtenerHistorial();
    document.getElementById("name").value = nombre;
    document.getElementById("noun").value = sustantivo;
    document.getElementById("adjective").value = adjetivo;
    document.getElementById("info").innerHTML = historial;
}

function keypress(varIN) {
    localStorage[varIN.id] = varIN.value;
}