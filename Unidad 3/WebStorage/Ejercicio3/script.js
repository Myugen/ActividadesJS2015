function obtenerHistorial() {
    var auxArray = JSON.parse(localStorage["historial"]);
    var aux = "";
    for (var i = 0; i < auxArray.length; i++)
        aux += auxArray[i];
    return aux;
}
function iniciar() {
    var historial = "";
    if(localStorage["respuesta"] == undefined)
        localStorage["respuesta"] = "EXPEDIENTE X";
    if(localStorage["historial"] == undefined)
        localStorage["historial"] = new Array();
    if(localStorage["errores"] == undefined)
        localStorage["errores"] = 0;
    if(localStorage["aciertos"] == undefined)
        localStorage["aciertos"] = 0;
    var errores = localStorage["errores"];
    var aciertos = localStorage["aciertos"];
    if(localStorage["historial"].length == 0)
        historial = "No hay historial";
    else
        historial = obtenerHistorial();
    document.getElementById("errores").innerHTML = errores;
    document.getElementById("aciertos").innerHTML = aciertos;
    document.getElementById("historial").innerHTML = historial;
}

function clickComprobar() {
    if(localStorage["historial"].length != 0)
        var array = JSON.parse(localStorage["historial"]);
    else
        var array = [];
    var cadena = "";
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        cadena += inputs[i].value;
        if(i == inputs.length - 2)
            cadena += " ";
    }
    cadena = cadena.toUpperCase();
    if(cadena == localStorage["respuesta"]) {
        localStorage["aciertos"]++;
        var mensaje = "<p class='text-success'>ACIERTO-> Respuesta: " + cadena + "</p><br>";
    }
    else {
        localStorage["errores"]++;
        var mensaje = "<p class='text-danger'>FALLO-> Respuesta: " + cadena + "</p><br>";
    }
    array.push(mensaje);
    localStorage["historial"] = JSON.stringify(array);
    document.getElementById("errores").innerHTML = localStorage["errores"];
    document.getElementById("aciertos").innerHTML = localStorage["aciertos"];
    document.getElementById("historial").innerHTML = obtenerHistorial();
}