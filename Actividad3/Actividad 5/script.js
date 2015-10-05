//Funciones
function buscarAlumno(clase, nombre) {
    for (var i = 0; i < clase.length; i++)
        if (clase[i].hasOwnProperty(nombre))
            return i;
    return (-1);
}

function modificarNota(clase) {
    var nombre = prompt("Escribe el nombre del alumno:");
    var alumnoBuscado = buscarAlumno(clase, nombre);
    if (alumnoBuscado != -1) {
        var notaNueva = parseInt(prompt("Alumno - " + Object.keys(clase[i]) + "\nEscriba nueva nota:"));
        var correcto = false;
        while(!correcto)
            if(isNaN(notaNueva))
                notaNueva = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
            else
                correcto = true;
        clase[alumnoBuscado][nombre] = notaNueva;
        alert("Nota modificada");
    }
    else
        alert("No existe alumno con ese nombre.");
}

function obtenerMedia (clase) {
    var media = 0;
    for (var i = 0; i < clase.length; i++)
        media += clase[i][Object.keys(clase[i])];
    media = media/clase.length;
    return media;
}

function obtenerMejorNota(clase) {
    var candidato = clase[0];
    for (var i = 1; i < clase.length; i++)
        if (candidato[Object.keys(candidato)] < clase[i][Object.keys(clase[i])])
            candidato = clase[i];
    return candidato;
}

function obtenerPeorNota(clase) {
    var candidato = clase[0];
    for (var i = 1; i < clase.length; i++)
        if (candidato[Object.keys(candidato)] > clase[i][Object.keys(clase[i])])
            candidato = clase[i];
    return candidato;
}

//Creacion del array
var clase = new Array();
for (var i = 0; i < 3; i++) {
    var alumno = {};
    var nombre = prompt("Nombre del alumno:");
    var nota = parseInt(prompt("Nota del alumno:"));
    var correcto = false;
    while(!correcto)
        if(isNaN(nota))
            nota = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
        else
            correcto = true;
    alumno[nombre] = nota;
    clase[i] = alumno;
}

//Menu
var salir = false;
while(!salir) {
    var correcto = false;
    while(!correcto) {
        var opcion = parseInt(prompt("MENÚ:\n[1]Buscar alumno.\n[2]Modificar nota de alumno.\n[3]Obtener media\n[4]Obtener el alumno con más nota.\n[5]Obtener el alumno con menos nota.\n[0]Salir.\nElija una opción:"));
        if(isNaN(opcion))
            alert("La opción introducida no es numérica");
        else
            correcto = true;
    }
    switch(opcion) {
        case 1: var nombre = prompt("Escriba el nombre del alumno:");
            var alumnoBuscado = buscarAlumno(clase, nombre);
            if(alumnoBuscado != -1)
                alert("Alumno - " + Object.keys(clase[alumnoBuscado]) + "\nNota: " + clase[alumnoBuscado][nombre]);
            else
                alert("No existe un alumno con ese nombre.")
            break;
        case 2: modificarNota(clase);
            break;
        case 3: var media = obtenerMedia(clase);
            alert("Media de la clase: " + media);
            break;
        case 4: var alumnoMejorNota = obtenerMejorNota(clase);
            alert("Alumno con mejor nota.\nNombre: " + Object.keys(alumnoMejorNota) + "\nNota:" + alumnoMejorNota[Object.keys(alumnoMejorNota)]);
            break;
        case 5: var alumnoPeorNota = obtenerPeorNota(clase);
            alert("Alumno con peor nota.\nNombre: " + Object.keys(alumnoPeorNota) + "\nNota:" + alumnoPeorNota[Object.keys(alumnoPeorNota)]);
            break;
        case 0: salir = true;
            break;
    }
}