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

function setCookie(name, value, days) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + days*24*60*60*1000);
    document.cookie = name+"="+encodeURIComponent (value)+";expires=" + expdate.toUTCString();
}


function cargar() {
    /* 
    ** Obtengo el número de visitas siempre y cuando exista la cookie, en caso de no existe, creo la cookie, la seteo a 1;
    ** luego muestro el número de visitas.
    */
    var contador = getCookie("contador");
    if(contador == null) {
        contador = 1;
        setCookie("contador", contador, 30);
    }
    else {
        contador = parseInt(contador) + 1;
        setCookie("contador", contador, 30);
    }
    var cadena = "<p>contador de visita: " + contador + "</p><br>";
    
    /* 
    ** Obtengo el nombre de usuario siempre y cuando exista la cookie, en caso de no existor, pido el nombre de usuario
    ** y creo la cookie con el nombre pedido como valor, luego muestro el usuario.
    */
    var userID = getCookie("userID");
    if(userID == null) {
        userID = prompt("Escriba su nombre de usuario:");
        setCookie("userID", userID, 30);
    }
    cadena += "<p>Bienvenido, " + userID + "</p>";
}