function campoNoVacio (valor) {
    "use strict";
    if ((valor.length === 0) || (valor === undefined) || (valor === null) || (/^\s+$/.test(valor)))
        return false;

    return true;
}

function validarEmail (valor) {
    "use strict";
    var re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
    if (!re.test(valor))
        return false;
    var dominioEmail = valor.substring(valor.indexOf('@') + 1, valor.indexOf('.'));
    var tuNombre = document.getElementById('nombre').value;
    if (!(dominioEmail === tuNombre))
        return false;
    return true;
}

function validarNumeros (valor) {
    "use strict";
    var re = /^(\d+)$/i;
    return re.test(valor);
}

function validarLetras (valor) {
    "use strict";
    var re = /^([A-Za-zÑñáéíóúÁÉÍÓÚ]+)$/i;
    return re.test(valor);
}

function validarExtensionFichero (file) {
    "use strict";
    var extension = file.name.split('.').pop().toLocaleLowerCase();
    if ((extension === "gif") || (extension === "jpg"))
        return true;
    return false;
}

function validarTamanioMaximoFichero (file, limite) {
    "use strict";
    var tamanio = file.size;
    if (tamanio > limite)
        return false;
    return true;
}

function validaciones (formulario) {
    "use strict";
    var inputs = [];
    var labels = [];
    
    //Obtenemos los inputs
    for (var i = 0, len = formulario.children.length; i < len; i++)
        if (formulario.children[i].tagName === "INPUT")
            inputs[inputs.length] = formulario.children[i];
    
    //Obtenemos los labels
    for (var i = 0, len = formulario.children.length; i < len; i++)
        if (formulario.children[i].tagName === "LABEL")
            labels[labels.length] = formulario.children[i];
    
    //Obtenemos el textarea sugerencia
    var textarea = document.getElementById('sugerencia');
    
    //Borramos los mensajes previos, si existen, de los labels
    for (var i = 0, len = labels.length; i < len; i++)
        if(labels[i].innerHTML.length != 0)
            labels[i].innerHTML = "";
    
    //Miramos los inputs, obtenemos sus valores, comprobamos si están vacíos y mediante su id comprobamos
    //que validación tienen que pasar
    for (var i = 0, len = inputs.length; i < len; i++) {
        if(inputs[i].type == "text") {
            var inputID = inputs[i].id;
            switch(inputID) {
                case "usuario":
                    var mensaje = document.getElementById(inputID + 'Resultado');
                    if (!campoNoVacio(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "El campo no puede estar vacío";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else if (!validarLetras(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "Solo se permiten letras";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                case "nombre":
                    var mensaje = document.getElementById(inputID + 'Resultado');
                    if (!campoNoVacio(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "El campo no puede estar vacío";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else if (!validarLetras(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "Solo se permiten letras";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                    break;
                case "apellidos":
                    var mensaje = document.getElementById(inputID + 'Resultado');
                    if (!campoNoVacio(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "El campo no puede estar vacío";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else if (!validarLetras(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "Solo se permiten letras";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                    break;
                case "email":
                    var mensaje = document.getElementById(inputID + 'Resultado');
                    if (!campoNoVacio(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "El campo no puede estar vacío";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else if (!validarEmail(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "El email introducido no debe acojerse al formato: [lo_que_quieras]@tu_nombre.[com], donde el dominio debe ser tu nombre introducido anteriormente";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                    break;
                case "telefono":
                    var mensaje = document.getElementById(inputID + 'Resultado');
                    if (inputs[i].value.length > 0) {
                        if (!validarNumeros(inputs[i].value)) {
                            inputs[i].focus();
                            mensaje.innerHTML = "Solo permite números";
                            mensaje.style.color = "crimson";
                            return false;
                        }
                        else {
                            mensaje.innerHTML = "Correcto";
                            mensaje.style.color = "#7D7";
                        }
                    }
                    break;
            }
        }
        if (inputs[i].type === "file") {
            var mensaje = document.getElementById(inputs[i].id + 'Resultado');
            if (inputs[i].files.length === 1) {
                if (!validarExtensionFichero(inputs[i].files[0])) {
                    inputs[i].focus();
                    mensaje.innerHTML = "Solo se permiten archivos con extensión 'jpg' o 'gif'";
                    mensaje.style.color = "crimson";
                    return false;
                }
                else if (!validarTamanioMaximoFichero(inputs[i].files[0], 1000000)) {
                    inputs[i].focus();
                    mensaje.innerHTML = "El tamaño máximo del archivo es de 1 MB";
                    mensaje.style.color = "crimson";
                    return false;
                }
                else {
                    mensaje.innerHTML = "Correcto";
                    mensaje.style.color = "#7D7";
                }
            }
            else if (inputs[i].files.length > 1) {
                inputs[i].focus();
                mensaje.innerHTML = "Solo se permite la subida de un archivo";
                mensaje.style.color = "crimson";
                return false;
            }
        }
    }
    
    var mensaje = document.getElementById(textarea.id + 'Resultado');
    if (!campoNoVacio(textarea.value)) {
        textarea.focus();
        mensaje.innerHTML = "El campo no puede estar vacío";
        mensaje.style.color = "crimson";
        return false;
    }
    else {
        mensaje.innerHTML = "Correcto";
        mensaje.style.color = "#7D7";
    }
    alert("¡Todo parece estar bien!");
}

function maximoTextarea (textarea, limite) {
    "use strict";
    if(textarea.value.length >= limite)
        textarea.value = textarea.value.substring(0, limite);
}
