function VideoMusical(titulo, artista, propietario, segundos) {
    this.titulo = titulo;
    this.artista = artista;
    this.propietario = propietario;
    this.segundos = segundos;
}

VideoMusical.prototype.mostrarConsola = function() {
    console.log("Has escuchado " + this.titulo + " de " + this.artista);
}

var videosMusicales = [];

function aniadirVideoMusical(videosMusicales) {
    do {
        do {
            var titulo = prompt("Título:");
            if(titulo == "")
                alert("El campo artista no puede estar vacío.");
        }while(titulo == "");

        do {
            var artista = prompt("Artista:");
            if(artista == "")
                alert("El campo artista no puede estar vacío.");
        }while(artista == "");

        do {
            var propietario = prompt("Propietario:");
            if(propietario == "")
                alert("El campo artista no puede estar vacío.");
        }while(propietario == "");

        do {
            var segundos = parseInt(prompt("Duración (en segundos):"));
            if(isNaN(segundos))
                alert("Por favor introduzca un número");
        }while(isNaN(segundos));

        var videoMusical = new VideoMusical(titulo, artista, propietario, segundos);
        videosMusicales.push(videoMusical);
        alert("Vídeo musical añadido correctamente.");
    }while(confirm("¿Desea añadir otro vídeo musical?"));
}

function mostrarVideosMusicales(videosMusicales) {
    //CHANGES Hacer clear en la consola
    if(videosMusicales.length == 0) {
        var aceptar = confirm("No hay ningún vídeo musical en la playlist. ¿Desea añadir alguno?");
        if(aceptar)
            aniadirVideoMusical(videosMusicales)
    }
    else
        for(var i = 0; i < videosMusicales.length; i++)
            videosMusicales[i].mostrarConsola();
}
