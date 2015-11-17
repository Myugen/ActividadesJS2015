/**
 * Metodo que obtiene el valor de una cookie
 * @param   {String} nombre Nombre de la cookie que se va a obtener
 * @returns {String} Valor de la cookie que se obtiene
 */
function getCookie(nombre) {
    var index = document.cookie.indexOf(nombre+"=");
    if (index == -1)
        return null;
    index = document.cookie.indexOf("=", index) + 1;
    var endstr = document.cookie.indexOf(";", index);
    if (endstr == -1)
        endstr = document.cookie.length;
    return decodeURIComponent (document.cookie.substring(index, endstr));
}

/**
 * Método que establece/crea una cookie
 * @param {String} name  Nombre de la cookie que se quiere crear
 * @param {Object} value Valor que tendrá la cookie
 * @param {Number} days  Días que se preestablecerá la cookie
 */
function setCookie(name, value, days) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + days*24*60*60*1000);
    document.cookie = name+"="+encodeURIComponent (value)+";expires=" + expdate.toUTCString();
}

/**
 * Abre una nueva ventana y muestra información de la ventana padre en ella
 */
function abrirVentanaHija() {
    var protocolo = location.protocol;
    var URLCompleta = location.hostname + location.pathname;
    var navegador = navigator.userAgent;
    var enableJS = navigator.javaEnabled;
    var ventanaHija = window.open("VentanaHija1", "Ventana Hija 1", "width=300, height=300, resizable=NO");
    var cadena = "<h3>Ejemplo de ventana nueva por Miguel Ignacio Cabrera San-Gil</h3>";
    cadena += "<p style='text-align:right'><strong>URL completa:</strong> " + URLCompleta + "</p>";
    cadena += "<p><strong>Protocolo:</strong> " + protocolo + "</p>";
    cadena += "<p style='text-align:center'><strong>Nombre del navegador:</strong> " + navegador + "</p>";
    if(enableJS)
        cadena += "<p style='color:green'>JavaScript SI disponible</p>";
    else
        cadena += "<p style='color:red'>JavaScript NO disponible</p>";
    ventanaHija.document.write(cadena);
}
/**
 * Método que abre otra ventana nueva, recogiendo la información de un html.
 */
function abrirOtraVentanaHija() {
    var ancho = screen.availWidth;
    var alto = screen.availHeight;
    window.open("../VentanaHija/index.html", "Nueva ventana", "width=300, height=300, top=" + (ancho/2)-150 +", left="+ (alto/2)-150);
}

/**
 * Método que obtiene el historial de los datos guardados en localStorage["datosHistorial"]
 * @returns {String} Historial obtenido
 */
function obtenerHistorial() {
    var auxArray = JSON.parse(localStorage["datosHistorial"]);
    var aux = "";
    for (var i = 0; i < auxArray.length; i++)
        aux += auxArray[i];
    return aux;
}

/**
 * Método que resetea la cookie "contador" y el WebStorage
 */
function reset() {
    localStorage.clear();
    setCookie("contador", "", -1);
    location.reload();
}

/**
 * Método que muestra el historial, en caso de existir, en un DIV
 */
function mostrarHistorial() {
    if(localStorage["datosHistorial"] == undefined)
        document.getElementById("historial").innerHTML = "<p>No hay historial</p>";
    else {
        document.getElementById("historial").innerHTML = "<textarea cols='100' rows='10'>" + obtenerHistorial() + "</textarea>";
    }
}

/**
 * Método que se ejecuta en la carga de la página
 */
function cargar() {
    var myTimeout = setTimeout(abrirVentanaHija, 3000);
    var contador = getCookie("contador");
    if(contador == null) {
        contador = 1;
        setCookie("contador", contador, 7);
    }
    else {
        contador = parseInt(contador) + 1;
        setCookie("contador", contador, 7);
    }
    var cadena = "<p>contador de visita: " + contador + "</p><br>";
    document.getElementById("contador").innerHTML = cadena;
}
