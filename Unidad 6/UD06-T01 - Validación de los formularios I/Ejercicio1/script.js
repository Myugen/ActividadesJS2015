function campoNoVacio (valor) {
    "use strict";
    if ((valor.length === 0) || (valor === undefined) || (valor === null) || (/^\s+$/.test(valor)))
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

function validarNumerosLetras (valor) {
    "use strict";
    var re = /^([A-Za-zÑñáéíóúÁÉÍÓÚ0-9]+)$/i;
    return re.test(valor);
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
    
    //Borramos los mensajes previos, si existen, de los labels
    for (var i = 0, len = labels.length; i < len; i++)
        if(labels[i].innerHTML.length != 0)
            labels[i].innerHTML = "";
    
    //Miramos los inputs, obtenemos sus valores, comprobamos si están vacíos y mediante su id comprobamos
    //que validación tienen que pasar
    for (var i = 0, len = inputs.length; i < len; i++) {
        if(inputs[i].type == "text") {
            var mensaje = document.getElementById(inputs[i].id + 'Resultado');
            if(!campoNoVacio(inputs[i].value)) {
                inputs[i].focus();
                mensaje.innerHTML = "El campo no puede estar vacío";
                mensaje.style.color = "crimson";
                return false;
            }
            var inputID = inputs[i].id;
            switch(inputID) {
                case "numero":
                    var mensaje = document.getElementById(inputs[i].id + 'Resultado');
                    if(!validarNumeros(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "Solo permite números";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                    break;
                case "texto":
                    var mensaje = document.getElementById(inputs[i].id + 'Resultado');
                    if(!validarLetras(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "Solo permite letras";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                    break;
                case "numeroTexto":
                    var mensaje = document.getElementById(inputs[i].id + 'Resultado');
                    if(!validarNumerosLetras(inputs[i].value)) {
                        inputs[i].focus();
                        mensaje.innerHTML = "Solo permite números y letras";
                        mensaje.style.color = "crimson";
                        return false;
                    }
                    else {
                        mensaje.innerHTML = "Correcto";
                        mensaje.style.color = "#7D7";
                    }
                    break;
            }
        }
    }
    
    alert("¡Todo parece estar bien!");
}