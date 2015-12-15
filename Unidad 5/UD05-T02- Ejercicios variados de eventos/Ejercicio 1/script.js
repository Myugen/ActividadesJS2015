function seleccionarImagen(imagen) {
    imagen.src = "source/" + imagen.id + "_m.png";
}

function deseleccionarImagen(imagen) {
    imagen.src = "source/" + imagen.id + ".png";
}

function cargar() {
    var menu = document.getElementById("menu");
    for(var i = 0; i < menu.children.length; i++) {
        var imagen = menu.children[i].firstChild;
        imagen.onmouseover = function (){seleccionarImagen(this)};
        imagen.onmouseleave = function(){deseleccionarImagen(this)};
    }
}