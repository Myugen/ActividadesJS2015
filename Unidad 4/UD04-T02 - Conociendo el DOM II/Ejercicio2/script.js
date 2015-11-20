function showPic(link) {
    var imagen = document.createElement("IMG");
    imagen.src = link;
    var thumbnail = document.createElement("DIV");
    thumbnail.className = "thumbnail";
    thumbnail.appendChild(imagen);
    var muestrario = document.getElementById("muestrario");
    if(muestrario.hasChildNodes())
        muestrario.removeChild(muestrario.childNodes[0]);
    muestrario.appendChild(thumbnail);
}

/*function cargar() {
    var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++)
        links[i].addEventListener('click', showPic(links[i].href), false);
}*/