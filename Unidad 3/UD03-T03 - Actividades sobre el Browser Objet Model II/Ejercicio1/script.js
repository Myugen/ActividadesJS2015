var contador = 0;
var nombre = prompt("Escriba su nombre:");
var colores = ["crimson", "royalblue", "mediumseagreen", "rebeccapurple", "sandybrown"];
var tamanioVector = colores.length;

/**
 * Cambia el color de la fuente, entre los colores representados en el vector
 */
function cambiaColor() {
    document.getElementById("resultado").style.color = colores[contador%tamanioVector];
    document.getElementById("resultado").innerHTML = "<p>" + nombre + "</p>";
    contador++;
}

var myInval = setInterval(cambiaColor, 2000);
