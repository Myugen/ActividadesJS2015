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
    //CHANGES Hacer que la consola se borre
    console.log(this.nombre.toUpperCase() + " " + this.apellidos.toUpperCase() + ":");
    console.log("-Correo eléctronico: " + this.correoElectronico);
    console.log("-Teléfono fijo: " + this.telefonoFijo);
    console.log("-Teléfono móvil: " + this.telefonoMovil);
    console.log("-Twitter: " + this.twitter);
    console.log("-LinkedIn: " + this.linkedin + "\n");
};

function validarEmail(email) {
    //TODO Buscar el validar email
}

function validarTelefonoFijo(telefonoFijo) {
    //TODO Buscar el validar telefono fijo español
}

function validarTelefonoMovil(telefonoMovil) {
    //TODO Buscar el validar telefono móvil español
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

    //do {
        var email = prompt("Correo eléctronico:");
        //if(!validarEmail(email))
            //alert("El correo electrónico introducido no es válido.");
    //}while(!validarEmail(email));

    //do {
        var telefonoFijo = prompt("Teléfono fijo:");
        //if(!validarTelefonoFijo(telefonoFijo))
            //alert("El número de teléfono no es valido.");
    //}while(!validarTelefonoFijo(telefonoFijo));

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
    if(agenda.length == 0) {
        var aceptar = confirm("La agenda está vacía, añade algún contacto. ¿Desea añadir un contacto?");
        if(aceptar)
            aniadirContacto(agenda);
    }
    else
        for(var i = 0; i < agenda.length; i++)
            agenda[i].mostrarContacto();
}

