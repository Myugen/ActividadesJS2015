var SO = navigator.platform;
var navegador = navigator.appCodeName;
var navegador2 = navigator.appName;
var navegador3 = navigator.userAgent;
var versionNavegador = navigator.appVersion;
var enableCookie = navigator.cookieEnabled;
var enableJS = navigator.javaEnabled;
var plugins = navigator.plugins;

var cadena = "<p><strong>SO:</strong> " + SO + "<br>";
cadena += "<strong>Información del navegador:</strong> " + navegador + "<br>";
cadena += "<strong>Información del navegador 2:</strong> " + navegador2 + "<br>";
cadena += "<strong>Información del navegador 3:</strong> " + navegador3 + "<br>";
cadena += "<strong>Versión del navegador:</strong> " + versionNavegador + "<br>";
cadena += "<strong>Cookies:</strong> ";
if(enableCookie)
    cadena += "Habilitado<br>";
else
    cadena += "Deshabilitado<br>";
cadena += "<strong>JavaScript:</strong> ";
if(enableJS)
    cadena += "Habilitado<br></p>";
else
    cadena += "Deshabilitado<br>";
cadena += "<strong>PLUGINS:</strong><br>";
for(var i = 0; i < plugins.length; i++) {
    cadena += "  -> <strong>" + plugins[i].name + ":</strong><br>";
    cadena += "     -Descripción: " + plugins[i].description + "<br>";
    cadena += "     -Archivo: " + plugins[i].filename + "<br>";
}
cadena += "</p>"

document.getElementById("informacion").innerHTML = cadena;
