function cargarFecha() {
    var diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var diaSemana = diasDeLaSemana[fecha.getDay()];
    document.write("<p>Hoy es " + diaSemana + ", " + hora + ":" + minutos + ":" + segundos);
}