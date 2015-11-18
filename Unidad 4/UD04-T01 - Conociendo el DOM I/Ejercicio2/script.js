function cargar() {
    var cadena = "<strong>INFO</strong><br>";
    var elementoFirstChild = document.getElementById("content").firstElementChild.nodeName;
    var nodoValor = document.getElementById("content").firstElementChild.innerText;
    var nuevoNodoValor = "Hola soy el nuevo valor";
    var antiguoValorAttr = document.body.firstElementChild.getAttribute("id");
    document.body.firstElementChild.setAttribute("id", "nuevoID");
    var nuevoValorAttr = document.body.firstElementChild.getAttribute("id");
    document.getElementById("content").firstElementChild.innerText = nuevoNodoValor;
    cadena += "Antiguo valor del elemento " + elementoFirstChild + ": " + nodoValor + "<br>";
    cadena += "Antiguo valor del atributo id: " + antiguoValorAttr + "<br>";
    cadena += "Nuevo valor del atributo id: " + nuevoValorAttr + "<br>";
    document.getElementById("info").innerHTML = cadena;
}