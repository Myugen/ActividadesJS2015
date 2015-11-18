function cargar() {
    var cadena = "<strong>INFO</strong><br>";
    var elementoFirstChild = document.getElementById("content").firstElementChild.nodeName;
    var elementoLastChild = document.getElementById("content").lastElementChild.nodeName;
    var elementoNextSibling = document.getElementById("header").nextElementSibling.nodeName;
    var elementoPreviousSibling = document.getElementById("content").previousElementSibling.nodeName;
    var elementoParentNode = document.getElementById("header").parentElement.nodeName;
    var elementosChildNodes = document.getElementById("page").childNodes;
    cadena += "First child de 'content': " + elementoFirstChild + "<br>";
    cadena += "Last child de 'content': " + elementoLastChild + "<br>";
    cadena += "Next sibling de 'header': " + elementoNextSibling + "<br>";
    cadena += "Previous sibling de 'content': " + elementoPreviousSibling + "<br>";
    cadena += "Parent node de 'header': " + elementoParentNode + "<br>";
    cadena += "Child nodes de 'page': <br>"
    for(var i = 0; i < elementosChildNodes.length; i++){
        cadena += "Child node[" + i + "]: " + elementosChildNodes[i].nodeName + "<br>";
    }
    document.getElementById("info").innerHTML = cadena;
}