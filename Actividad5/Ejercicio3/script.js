function Contacto(nombre, apellidos, correoElectronico, telefonoFijo, telefonoMovil, twitter, linkedin) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correoElectronico = correoElectronico;
    this.telefonoFijo = telefonoFijo;
    this.telefonoMovil = telefonoMovil;
    this.twitter = twitter;
    this.linkedin = linkedin;
}

Contacto.prototype.mostrarContacto = function() {
    console.log(this.nombre.toUpperCase() + " " + this.apellidos.toUpperCase() + ":");
    console.log("-Correo eléctronico: " + this.correoElectronico);
    console.log("-Teléfono fijo: " + this.telefonoFijo);
    console.log("-Teléfono móvil: " + this.telefonoMovil);
    console.log("-Twitter: " + this.twitter);
    console.log("-LinkedIn: " + this.linkedin + "\n");
};

function validarEmail(email) {
    //Expresión regular para validacion del email
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validarTelefonoFijo(telefonoFijo) {
    //FIXME Arreglar la validación
    var re = /^[0-9]{9}$/i;
    re.test(telefonoFijo);
}

function validarTelefonoMovil(telefonoMovil) {
    //TODO Añadir validación al teléfono móvil
}

var agenda = [];

function aniadirContacto(agenda) {
    do {
        var nombre = prompt("Nombre: ");
        if(nombre == "")
            alert("El campo nombre no debe estar vacio.");
    }while(nombre == "");

    do {
        var apellidos = prompt("Apellido/s: ");
        if(apellidos == "")
            alert("El campo nombre no debe estar vacio.");
    }while(apellidos == "");

    do {
        var email = prompt("Correo eléctronico:");
        if(!validarEmail(email))
            alert("El correo electrónico introducido no es válido.");
    }while(!validarEmail(email));

    do {
        var telefonoFijo = parseInt(prompt("Teléfono fijo:"));
        if(!validarTelefonoFijo(telefonoFijo))
            alert("El número de teléfono no es valido.");
    }while(!validarTelefonoFijo(telefonoFijo));

    //do {
        var telefonoMovil = prompt("Teléfono móvil:");
        //if(!validarTelefonoMovil(telefonoMovil))
            //alert("El número de teléfono no es valido.");
    //}while(!validarTelefonoMovil(telefonoMovil));

    var twitter = prompt("Twitter:");
    var linkedin = prompt("LinkedIn:");
    var contacto = new Contacto(nombre, apellidos, email, telefonoFijo, telefonoMovil, twitter, linkedin);
    agenda.push(contacto);
    alert("Contacto añadido.");
}

function mostrarAgenda(agenda) {
    console.clear();
    if(agenda.length == 0) {
        var aceptar = confirm("La agenda está vacía, añade algún contacto. ¿Desea añadir un contacto?");
        if(aceptar)
            aniadirContacto(agenda);
    }
    else
        for(var i = 0; i < agenda.length; i++)
            agenda[i].mostrarContacto();
}

