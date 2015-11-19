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

function contenidoNoVisible(contenidos) {
    for(var i = 0; i < contenidos.length; i++)
        contenidos[i].
}

function cambiar(seccion) { 
    var contenidos = document.getElementsByClassName("contenido");
    var opciones = document.getElementsByClassName("opcion");
    var posicionContenido = buscarContenido(contenidos, seccion);
    var posicionOpcion = buscarOpciones(opciones, seccion);
    
}