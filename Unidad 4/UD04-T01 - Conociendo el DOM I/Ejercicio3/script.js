function cargar() {
    var cadena = "<strong>INFO</strong><br>";
    var elementoTitle = document.getElementById("header");
    var elementoAppendChild = document.createElement("P");
    elementoAppendChild.innerText = "Soy el nuevo elemento <P> introducido por appendChild";
    elementoTitle.appendChild(elementoAppendChild);
    var elementoInsertBefore = document.createElement("P");
    elementoInsertBefore.innerText = "Soy el nuevo elemento <P> introducido por insertBefore";
    elementoTitle.insertBefore(elementoInsertBefore, elementoTitle.childNodes[0]);
    var elementoContent = document.getElementById("content");
    var elementoBorrado = elementoContent.firstElementChild;
    cadena += "El elemento que vamos a borrar es: " + elementoBorrado.tagName + "<br>";
    var nuevoTexto = document.createTextNode("Soy el elemento reemplazado");
    var elementoReemplazado = elementoContent.lastElementChild;
    elementoContent.replaceChild(nuevoTexto, elementoReemplazado);
    cadena += "El elemento que vamos a reemplazar es: " + elementoReemplazado.tagName;
    document.getElementById("info").innerHTML = cadena;
}