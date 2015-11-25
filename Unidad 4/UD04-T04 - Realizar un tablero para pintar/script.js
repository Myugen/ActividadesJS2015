function pintar(punto) {
    var colores = document.getElementById("paleta").children[1].children[0];
    for(var i = 0; i < colores.children.length; i++) {
        var color = colores.children[i];
        if(color.classList.length == 2)
            var colorSeleccionado = color.classList[0];
    }
    var pincel = document.getElementById("pincel");
    for(var i = 0; i < pincel.children.length; i++) {
        if(pincel.children[i].checked)
            var valor = pincel.children[i].value;
    }
    if(valor == "0")
        punto.className = colorSeleccionado;
    else {
        punto.className = colorSeleccionado
        var posicion = punto.cellIndex;
        var filaActual = punto.parentElement;
        if((posicion+1) < 30)
            punto.nextElementSibling.className = colorSeleccionado;
        if((posicion-1) >= 0)
            punto.previousElementSibling.className = colorSeleccionado;
        var filaSiguiente = filaActual.nextElementSibling;
        if(filaSiguiente != null) {
            filaSiguiente.children[posicion].className = colorSeleccionado;
            if((posicion+1) < 30)
                filaSiguiente.children[posicion].nextElementSibling.className = colorSeleccionado;
            if((posicion-1) >= 0)
                filaSiguiente.children[posicion].previousElementSibling.className = colorSeleccionado;
        }
        var filaAnterior = filaActual.previousElementSibling;
        if(filaAnterior != null) {
            filaAnterior.children[posicion].className = colorSeleccionado;
            if((posicion+1) < 30)
                filaAnterior.children[posicion].nextElementSibling.className = colorSeleccionado;
            if((posicion-1) >= 0)
                filaAnterior.children[posicion].previousElementSibling.className = colorSeleccionado;
        }
    }
}
function getColor(seleccion) {
    var colores = document.getElementById("paleta").children[1].children[0];
    for(var i = 0; i < colores.children.length; i++) {
        var color = colores.children[i];
        color.className = "color" + (i+1);
    }
    var claseCSS = seleccion.className;
    claseCSS = claseCSS + " seleccionado";
    seleccion.className = claseCSS;
}

function cargar() {
    //Creación del tablero
    var zonaDibujo = document.getElementById("zonadibujo");
    var tabla = document.createElement("TABLE");
    tabla.border = "1";
    for(var i = 0; i < 30; i++) {
        var fila = document.createElement("TR");
        for(var j = 0; j < 30; j++) {
            var columna = document.createElement("TD");
            columna.width = "10px";
            columna.height = "10px";
            columna.addEventListener("click", function() {pintar(this)});
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    zonaDibujo.appendChild(tabla);
    
    //Añado evento onClick a la paleta
    var colores = document.getElementById("paleta").children[1].children[0];
    for(var i = 0; i < colores.children.length; i++) {
        var color = colores.children[i];
        color.addEventListener("click", function () {getColor(this)});
    }
}