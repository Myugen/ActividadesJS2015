/**
 * Método que comprueba mediante una expresión regular que el año introducido es de 4 cifras
 * @param   {String}  anio Año de entrada
 * @returns {Boolean} Resultado de la comprobación del año mediante la expresión regular (TRUE si es correcto)
 */
function anioValido(anio) {
    var re = /^\d{4}$/i;
    return re.test(anio);
}

/**
 * Método que comprueba si el año introducido es bisiesto
 * @param   {String}  anio Año de entrada
 * @returns {Boolean} Resultado de la comprobación
 */
function esBisiesto(anio) {
    if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
        return true;
    else
        return false;
}

/**
 * Método que establece si el día seleccionado es acorde con el máximo de días que tiene un mes
 * @param   {String}  dia  Día de entrada
 * @param   {String}  mes  Mes de entrada
 * @param   {String}  anio Año de entrada
 * @returns {Boolean} Resultado de la comprobación
 */
function diaMesValido(dia, mes, anio) {
    var diasMes = 30;
    switch(mes) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '7':
        case '9':
        case '11':
            diasMes = 31;
            break;
        case '1':
            if(esBisiesto(anio))
                diasMes = 29;
            else
                diasMes = 28;
            break;
        default:
            diasMes = 30;
    }
    if(parseInt(dia) <= diasMes)
        return true;
    else
        return false;
}

/**
 * Método que comprueba si la fecha de nacimiento introducida no es mayor a la actual
 * @param   {Date}    fecha Fecha de entrada
 * @returns {Boolean} Resultado de la comprobación
 */
function fechaValida(fecha) {
    var hoy = new Date();
    if(fecha <= hoy)
        return true;
    else
        return false;
}

/**
 * Método que comprueba si el nombre introducido tiene una letra A
 * @param   {String} nombre Nombre de entrada
 * @returns {Multiple} En caso de que exista una posición con la letra A, retorno la primera posición
 *                     donde se encuentra.
 *                     En caso, contrario un mensaje personalizado.
 */
function obtenerPrimeraLetraA(nombre) {
    var posicion = nombre.toUpperCase().indexOf("A");
    if(posicion == -1)
        return "No contiene la letra A.";
    return posicion;
}

/**
 * Método que comprueba si el nombre introducido tiene una letra A
 * @param   {String} nombre Nombre de entrada
 * @returns {Multiple} En caso de que exista una posición con la letra A, retorno la última posición
 *                     donde se encuentra.
 *                     En caso, contrario un mensaje personalizado.
 */
function obtenerUltimaLetraA(nombre) {
    var posicion = nombre.toUpperCase().lastIndexOf("A");
    if(posicion == -1)
        return "No contiene la letra A.";
    return posicion;
}

/**
 * Método que obtiene la edad (en años y meses).
 * @param   {Date}  fecha Fecha de nacimiento
 * @returns {Array} Array que guarda en la primera posición los años que se tiene y, en la segunda posición, los meses.
 */
function obtenerEdad(fecha) {
    var array = [];
    var hoy = new Date();
    if(fecha.getMonth() <= hoy.getMonth()) {
        array.push(hoy.getFullYear() - fecha.getFullYear());
        array.push(Math.abs(fecha.getMonth() - hoy.getMonth()));
    }
    else {
        array.push(hoy.getFullYear() - fecha.getFullYear() - 1);
        array.push(12 - (fecha.getMonth() - hoy.getMonth()));
    }
    return array;
}

/**
 * Método que comprueba que todos los datos estén bien y envía los datos a la ventana padre.
 */
function comprobarEnviar() {
    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var dia = document.getElementById("selectDia").value;
    var mes = document.getElementById("selectMes").value;
    var anio = document.getElementById("inputAnio").value;
    if((nombre.length != 0) && (apellido.length != 0))
        if(anioValido(anio))
            if(diaMesValido(dia, mes, anio)) {
                var fecha = new Date(anio, mes, dia);
                if(fechaValida(fecha)) {
                    var arrayHistorial = [];
                    if(localStorage["datosHistorial"] != undefined)
                        arrayHistorial = JSON.parse(localStorage["datosHistorial"]);
                    var anioYMeses = obtenerEdad(fecha);
                    var cadena = "Buenos días " + nombre + " " + apellido + "\n";
                    cadena += "Tu nombre tiene " + nombre.length + " caractéres. Incluidos espacios.\n";
                    cadena += "La primera letra A de tu nombre está en la posición: " + obtenerPrimeraLetraA(nombre) + "\n";
                    cadena += "La última letra A de tu nombre está en la posición: " + obtenerUltimaLetraA(nombre) + "\n";
                    cadena += "Tu nombre menos las 3 primeras letras es: " + nombre.split(" ", 3) + "\n";
                    cadena += "Tu nombre y apellidos todo en mayúsculas es: " + nombre.toUpperCase() + "\n";
                    cadena += "Tu edad es: " + anioYMeses[0] + " años y " + anioYMeses[1] + " meses\n";
                    parent.opener.document.getElementById("textHistorial").value = cadena;
                    arrayHistorial.push(cadena);
                    localStorage["datosHistorial"] = JSON.stringify(arrayHistorial);
                    window.close();
                }
                else
                    document.getElementById("info").innerHTML = "<p style='color:red'>Fecha incorrecta: mayor a la de hoy</p>";
            }
            else
                document.getElementById("info").innerHTML = "<p style='color:red'>Fecha incorrecta</p>";
        else
            document.getElementById("info").innerHTML = "<p style='color:red'>Año incorrecto</p>";
    else
        document.getElementById("info").innerHTML = "<p style='color:red'>Nombre y/o Apellido no introducido</p>";
}
