function horaYMensajeDelDía() {
    var fechaActual = new Date();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
    
    var cadena = "<p>" + hora + ":" + minutos + ":" + segundos + "</p><br>";
    if((hora >= 5) && (hora < 12)) {
        cadena += "<img src='images/amanecer.jpg' width='150' heigth='100'/>";
    }
    else if((hora >=12) && (hora < 15)) {
        cadena += "<img src='images/bocadillo.png' width='150' heigth='100'/>";
    }
    else if((hora >= 18) && (hora < 22)) {
        cadena += "<img src='images/mesa.jpg' width='150' heigth='100'/>";
    }
    else {
        cadena += "<p>¡A currar!</p><br>";
    }
    document.getElementById("informacion").innerHTML = cadena;
}

var myInval = setInterval(horaYMensajeDelDía, 1000);