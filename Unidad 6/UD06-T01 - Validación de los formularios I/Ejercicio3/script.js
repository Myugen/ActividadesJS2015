function comprobarCheckbox () {
    "use strict";
    var labels = [];
    var checkboxesChecked = [];
    var mensaje = document.getElementById('mensajeAlerta');
    var formulario = document.getElementById('myForm');
    
    //Obtenemos los labels
    for (var i = 0, len = formulario.children.length; i < len; i++) {
        if(formulario.children[i].tagName === "LABEL") {
            labels[labels.length] = formulario.children[i];
        }
    }
    
    //Obtenemos los checkboxes que han sido seleccionados
    for (var i = 0, len = formulario.children.length; i < len; i++) {
        if (formulario.children[i].tagName === "INPUT") {
            if (formulario.children[i].checked) {
                checkboxesChecked[checkboxesChecked.length] = formulario.children[i];
            }
        }
    }
    
    //Iniciamos el mensaje de alerta como cadena vacía en caso de que ya estuviera mostrado
    mensaje.innerHTML = "";
    
    //Iniciamos todos los labels en negro (por si antes estuviera alguno en rojo)
    for (var i = 0, len = labels.length; i < len; i++) {
        labels[i].style.color = "black";
    }
    
    //En caso de encontrar mas de 3 checkboxes seleccionados mostramos un mensaje y pintaremos sus hermanos siguientes (los labels)
    if (checkboxesChecked.length > 3) {
        mensaje.innerHTML = "¡Lea! Solo puede seleccionar máximo 3 checkboxes";
        mensaje.style.color = "crimson";
        for (var i = 0, len = checkboxesChecked.length; i < len; i++) {
            checkboxesChecked[i].nextElementSibling.style.color = "crimson";
        }
    }
}

function validar (formulario) {
    var checkboxesChecked = [];
    
    //Obtenemos los checkboxes que han sido seleccionados
    for (var i = 0, len = formulario.children.length; i < len; i++) {
        if (formulario.children[i].tagName === "INPUT") {
            if (formulario.children[i].checked) {
                checkboxesChecked[checkboxesChecked.length] = formulario.children[i];
            }
        }
    }
    
    //En caso de encontrar más de 3 checkboxes no validamos el formulario y mostramos un alert avisando al usuario
    if (checkboxesChecked.length > 3) {
        alert("Pero si ha leído que solo puede seleccionar máximo 3 checkboxes, ¿por qué lo sigue intentando?");
        return false;
    }
    
    alert("Todo está correcto");
    return true;
}