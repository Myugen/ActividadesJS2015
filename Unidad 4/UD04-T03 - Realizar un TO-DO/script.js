function clickCheckBox(checkbox) {
    if(checkbox.checked) {
        var mensaje = checkbox.nextSibling.childNodes[0];
        checkbox.nextSibling.removeChild(mensaje);
        var del = document.createElement("DEL");
        del.appendChild(mensaje);
        checkbox.nextSibling.appendChild(del);
    }
    else {
        var del = checkbox.nextSibling.childNodes[0];
        var mensaje = del.childNodes[0];
        checkbox.nextSibling.removeChild(del);
        checkbox.nextSibling.appendChild(mensaje);
    }
}

function removeTasks() {
    var tareasABorrar = [];
    var agenda = document.getElementById("agenda");
    var badge = document.getElementById("badge");
    var tareas = agenda.children;
    for(var i = 0; i < tareas.length; i++)
        if(tareas[i].children[0].checked)
            tareasABorrar.push(tareas[i]);
    if(tareasABorrar.length == 0)
        alert("Seleccione una o varias tareas para eliminar.");
    else
        for(var i = 0; i < tareasABorrar.length; i++)
            agenda.removeChild(tareasABorrar[i]);
    if(badge.hasChildNodes())
        badge.removeChild(badge.childNodes[0]);
    badge.appendChild(document.createTextNode(agenda.children.length));
    if(agenda.children.length == 0)
        cargar();
}

function addTask() {
    var mensaje = prompt("Tarea pendiente:");
    var badge = document.getElementById("badge");
    var agenda = document.getElementById("agenda");
    var checkbox = document.createElement("INPUT");
    checkbox.type ="checkbox";
    checkbox.addEventListener("click", function (){clickCheckBox(this)});
    var li = document.createElement("li");
    li.className = "list-group-item list-group-item-info";
    li.appendChild(checkbox);
    var span2 = document.createElement("SPAN");
    span2.style.paddingLeft = "2px";
    span2.appendChild(document.createTextNode(" " + mensaje));
    li.appendChild(span2);
    if(agenda.children[0].id == "noTarea") {
        agenda.removeChild(agenda.children[0]);
    }
    agenda.appendChild(li);
    if(badge.hasChildNodes())
        badge.removeChild(badge.childNodes[0]);
    badge.appendChild(document.createTextNode(agenda.children.length));
}

function cargar() {
    var agenda = document.getElementById("agenda");
    var badge = document.getElementById("badge");
    var mensaje = "Enhorabuena, no hay tareas pendientes";
    var li = document.createElement("SPAN");
    var glyphicon = document.createElement("SPAN");
    if(badge.hasChildNodes())
        badge.removeChild(badge.childNodes[0]);
    badge.appendChild(document.createTextNode("0"));
    glyphicon.className = "glyphicon glyphicon-ok";
    li.id = "noTarea";
    li.className = "list-group-item list-group-item-success";
    li.appendChild(glyphicon);
    li.appendChild(document.createTextNode(" " + mensaje));
    agenda.appendChild(li);
}