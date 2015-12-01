/**
 * Función que se ejecuta en el evento onClick de los TD del tablero pinta y añade una X en la celda
 * @param {object} celda Celda obtenida mediante el evento onClick
 */
function rellenarCelda(celda) {
    //Busco el radioButton chequeado en la paleta de colores para obtener su value (el color)
    var paleta = document.getElementById("paleta");
    var radioCheckedColor = paleta.children[0];
    do {
        var colorSeleccionado = radioCheckedColor;
        radioCheckedColor = radioCheckedColor.nextElementSibling;
    }while(!colorSeleccionado.checked);
    var color = colorSeleccionado.value;

    //Busco el radioButton en el estilo para obtener su value (el tipo de fuente)
    var fuente = document.getElementById("fuente");
    var radioCheckedFuente = fuente.children[0];
    do {
        var estiloSeleccionado = radioCheckedFuente;
        radioCheckedFuente = radioCheckedFuente.nextElementSibling;
    }while(!estiloSeleccionado.checked);
    var estilo = estiloSeleccionado.value;

    //Buscamos posibles hermanos que no sean NULL y que no tengan el mismo BgColor para poder pintar, en caso de
    //encontrar un hermano con el mismo BgColor podemosPintar será false.
    var podemosPintar = true;
    var hermanoSiguiente = celda.nextElementSibling;
    var hermanoAnterior = celda.previousElementSibling;
    if(hermanoSiguiente != null)
        if(hermanoSiguiente.style.backgroundColor == color)
            podemosPintar = false;
    if(hermanoAnterior != null)
        if(hermanoAnterior.style.backgroundColor == color)
            podemosPintar = false;
    if(podemosPintar) {
    celda.style.backgroundColor = color;
        var span = document.createElement("SPAN");
        //Borramos, en caso de que haya, el textNode de la 'X' para no ir acumulando 'X's
        while(span.hasChildNodes())
            span.firstElementChild(span.firstChild);
        span.style.fontWeight = estilo;
        span.appendChild(document.createTextNode("X"));
        celda.appendChild(span);
    }
    else
        alert("Tiene casillas adyacentes con el mismo color elegido: '" + color + "'");
}

/**
 * Función que inicializa una tabla 10x10
 */
function crearTablero() {
    var tablero = document.getElementById("tablero");
    if(tablero.children.length > 0)
        tablero.removeChild(tablero.children[0]);
    var tabla = document.createElement("TABLE");
    tabla.border = "1";
    for(var i = 0; i < 10; i++) {
        var fila = document.createElement("TR");
        for(var j = 0; j < 10; j++) {
            var columna = document.createElement("TD");
            columna.height = "30px";
            columna.width = "30px";
            columna.style.textAlign = "center";
            columna.onclick = function() {rellenarCelda(this)};
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);
}


/**
 * Función que válida si la cadena de entrada es un dígito o no, mediante una expresión regular.
 */
function validarNúmero(numero) {
    var re = /^\d$/i;
    return re.test(numero);
}

/**
 * Función que se ejecuta en el onLoad del body, y creo los radioButton para los colores (que se piden mediante un
 * mensaje), los radioButton del estilo de la fuente y el tablero.
 */
function cargar() {
    //creo la palet
    var paleta = document.getElementById("paleta");
    while(paleta.hasChildNodes()) {
        paleta.removeChild(paleta.firstChild);
    }
    do {
        var numero = prompt("¿Cúantos colores desea? Escriba un número");
        if(!validarNúmero(numero))
            alert("Por favor, asegúrese de escribir un número.");
    }while(!validarNúmero(numero));
    numero = parseInt(numero);
    for(var i = 0; i < numero; i++) {
        var radioButton = document.createElement("INPUT");
        var color = prompt("Escriba el color nº" + (i+1));
        radioButton.type = "radio";
        radioButton.name = "color";
        radioButton.value = color;
        if(i == 0)
            radioButton.checked = true;
        paleta.appendChild(radioButton);
        paleta.appendChild(document.createTextNode(color));
    }

    //creo fuentes
    var fuente = document.getElementById("fuente");
    while(fuente.hasChildNodes())
        fuente.removeChild(fuente.firstChild);
    for(var i = 0; i < 2; i++) {
        var radioButton2 = document.createElement("INPUT");
        radioButton2.type = "radio";
        radioButton2.name = "fuente";
        if(i == 0) {
            var fuenteTexto = "Normal";
            radioButton2.value = "normal";
            radioButton2.checked = true;
        }
        if(i == 1) {
            var fuenteTexto = "Negrita";
            radioButton2.value = "bold";
        }
        fuente.appendChild(radioButton2);
        fuente.appendChild(document.createTextNode(fuenteTexto));
    }

    //creo tablero
    crearTablero();
}
