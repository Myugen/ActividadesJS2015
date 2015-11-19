function buscarContenido(contenidos, nombre) {
    var id = "c" + nombre;
    for(var i = 0; i < contenidos.length; i++)
        if(contenidos[i].id == id)
            return i;
    return -1;
}

function buscarOpciones(opciones, nombre) {
    var id = "o" + nombre;
    for(var i = 0; i < opciones.length; i++)
        if(opciones[i].id == id)
            return i;
    return -1;
}

function cambiarNoVisible(contenidos) {
    for(var i = 0; i < contenidos.length; i++)
        contenidos[i].className = "contenido oculto";
}

function cambiarNoSeleccionado(opciones) {
    for(var i = 0; i < opciones.length; i++)
        opciones[i].className = "opcion no-seleccionada";
}

function cambiar(seccion) { 
    var contenidos = document.getElementsByClassName("contenido");
    var opciones = document.getElementsByClassName("opcion");
    var contenidoSeleccionado = buscarContenido(contenidos, seccion);
    var opcionSeleccionada = buscarOpciones(opciones, seccion);
    cambiarNoVisible(contenidos);
    cambiarNoSeleccionado(opciones);
    contenidos[contenidoSeleccionado].className = "contenido visible";
    opciones[opcionSeleccionada].className = "opcion seleccionada";
}