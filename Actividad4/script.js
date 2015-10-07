var asientos = new Array();
function inicializarAsientos (asientos, asientosBalcon, asientosPatio) {
    asientos.push(new Array(asientosBalcon));
    asientos.push(new Array(asientosPatio));

    var contador = 1;
    for (var i = 0; i < asientos.length; i++)
        for (var j = 0; j < asientos[i].length; j++) {
            asientos[i][j] = new Object()
            asientos[i][j].numeracion = contador++;
            asientos[i][j].ocupado = false;
        }
    return asientos;

}

function mostrarAsientos (asientos) {
    var cadena = "<h2>Disponibilidad de asientos:</h2><br>";
    for (var i = 0; i < asientos.length; i++) {
        if (i == 0)
            cadena += "<strong>BALCÓN:</strong><br>";
        else if (i == 1)
            cadena += ("<br><strong>PATIO DE BUTACAS:</strong><br>");
        for (var j = 0; j < asientos[i].length; j++) {
            cadena += " " + asientos[i][j].numeracion + ": ";
            if (asientos[i][j].ocupado)
                cadena += "<canvas width='10px' height='10px' style='border: 1px solid black; background-color: red'></canvas>";
            else
                cadena += "<canvas width='10px' height='10px' style='border: 1px solid black; background-color: green'></canvas>";
        }
        document.getElementById("informacion").innerHTML = "<p>" + cadena + "</p>";
    }
}

function buscarAsiento (asientos, zona) {
    for (var i = 0; i < asientos[zona].length; i++)
        if (!asientos[zona][i].ocupado)
            return i;
    return -1;
}

function reservarAsiento (asientos) {
    var correcto = false;
    do {
        var opcion = prompt("Elija la zona donde quiere estar ubicado:\n1 - Balcón\n2 - Patio de butacas\nEscriba una opción:");
        if ((opcion == "1") || (opcion == "2"))
            correcto = true;
        else
            alert("Por favor, escriba una opción válida.");
    }while(!correcto);
    var zona = parseInt(opcion) - 1;
    var asiento = buscarAsiento (asientos, zona);
    if (asiento == -1)
        alert("Disculpe no quedan asientos.");
    else {
        asientos[zona][asiento].ocupado = true;
        var cadena = "Su reserva -> Zona: ";
        if(zona == 0)
            cadena += "Balcón ";
        else if (zona == 1)
            cadena += "Patio de butacas ";
        cadena += "- Asiento: " + asientos[zona][asiento].numeracion;
        alert(cadena);
    }
}

function cargar (asientos) {
    const MAX_BALCON = 6;
    const MAX_PATIO = 9;
    asientos = inicializarAsientos(asientos, MAX_BALCON, MAX_PATIO);
}
