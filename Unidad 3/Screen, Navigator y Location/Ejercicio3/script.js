var urlCompleta = location.protocol + "//" + location.hostname + ":" + location.port + location.pathname;
var plugins = navigator.plugins;
var cadena = "<strong>Plugins instalados:</strong><br>";
for(var i = 0; i < plugins.length; i++) {
    cadena += "  -> <strong>" + plugins[i].name + ":</strong><br>";
    cadena += "     -Descripción: " + plugins[i].description + "<br>";
    cadena += "     -Archivo: " + plugins[i].filename + "<br>";
}

cadena += "<br><strong>URL:</strong> " + urlCompleta + "<br>";

document.getElementById("informacion").innerHTML = cadena;