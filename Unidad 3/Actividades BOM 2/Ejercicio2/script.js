function elPutoArmaggeddon (ventanaNueva) {
    var ventanaNuevisima = ventanaNueva.open("Armaggeddon", "Armaggeddon", "width=300, height=300");
    ventanaNuevisima.document.write("¡¡BooOOOOoOOoOOOoOooooooooooooOOOOOM!! ¡A la mierda todo ya!");
    ventanaNueva.opener.close();
}
function explosionNuclear() {
    var ventanaNueva = window.open("Alerta nuclear", "Explosión nuclear", "width=250, height=250");
    ventanaNueva.document.write("Era mentira, pero por quedarte mirando ahora te quedan 10 segundos para salir en vez de 15. ¡Ésta sí va a estallar!");
    var myTimeout2 = setTimeout(function() {elPutoArmaggeddon(ventanaNueva)}, 3000);
}

var myTimeout = setTimeout(explosionNuclear, 5000);