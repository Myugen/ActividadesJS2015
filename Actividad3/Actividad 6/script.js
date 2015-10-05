function introducirCliente(clientes) {
    var nuevoCliente = {};
    var nombre = prompt("Nombre del cliente:");
    var horas = parseInt(prompt("Horas estacionadas:"));
    var correcto = false;
    while(!correcto)
        if(isNaN(horas))
            horas = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
        else
            correcto = true;
    nuevoCliente[nombre] = horas;
    clientes.push(nuevoCliente);
    return clientes;
}
//TODO: Test

function realizarCobro(clientes) {
    var tarifa = [2, 0.5, 0.5, 10];
    var clienteCobrado = clientes.pop();
    var hora = clienteCobrado[Object.keys(clienteCobrado)] - 1;
    var fraccionHora = parseInt(hora/3);
    var resto = hora%3;
    var cobro = 0;
    switch(fraccionHora) {
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
            cobro = (fraccionHora - 1)*tarifa[2];
        case 1:
            if(fraccionHora == 1)
                for (var i = resto; i >= 0; i--)
                    cobro += tarifa[1];
            else {
                var montoCobro = tarifa[1] * 3;
                cobro += montoCobro;
            }
        case 0:
            cobro += tarifa[0];
            break;
    }
    if ((hora + 1) >= 24) {
        cobro = tarifa[3];
        var horasDeMas = hora - 24;
        for (var i = 0; i < horasDeMas; i++)
            cobro += tarifa[3];
    }
    console.log(Object.keys(clienteCobrado) + ": " + cobro + "€");
    return clientes;
}
//Menu
var clientes = new Array();
var salir = false;
while(!salir) {
    var correcto = false;
    while(!correcto) {
        var opcion = parseInt(prompt("MENÚ:\n[1]Introducir cliente/s.\n[2]Realizar cobro.\n[0]Salir.\nElija una opción:"));
        if(isNaN(opcion))
            alert("La opción introducida no es numérica");
        else
            correcto = true;
    }
    switch(opcion) {
        case 1:
            do {
                clientes = introducirCliente(clientes);
                var seguir = confirm("¿Desea introducir otro cliente?");
            }while(seguir);
            break;
        case 2:
            do {
                if(clientes.length > 0) {
                    clientes = realizarCobro(clientes);
                    var seguir = confirm("¿Desea realizar otro pago?");
                }
                else {
                    alert("No hay clientes pendiente de cobro.");
                    seguir = false;
                }
            }while(seguir);
            break;
        case 0: salir = true;
            break;
        default: alert("No existe opción con ese valor.");
    }
}
