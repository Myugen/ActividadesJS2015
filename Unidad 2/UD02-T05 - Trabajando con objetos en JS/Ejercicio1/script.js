//Objeto Matriz
var matriz = new Object();
matriz.filas = 0;
matriz.columnas = 0;
matriz.vector = [];
matriz.inicializarMatriz = function(filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
    for(var i = 0; i < filas; i++) {
        var vectorUnitario = [];
        for(var j = 0; j < columnas; j++) {
            vectorUnitario.push(0);
        }
        this.vector.push(vectorUnitario);
    }
};
matriz.mostrarMatriz = function() {
    var cadena = "";
    for(var i = 0; i < this.filas; i++) {
        for(var j = 0; j < this.columnas; j++) {
            cadena += this.vector[i][j] + " ";
        }
        cadena += "<br>";
    }
    if(this.columnas == 0 || this.filas == 0)
        cadena = "<strong>La matriz no está inicializada.</strong>";
    document.getElementById("informacion").innerHTML = cadena;
};

function cargar() {
    do {
        var filas = parseInt(prompt("Escriba el número de filas que tendrá la matriz:"));
        if(isNaN(filas))
            alert("Por favor, asegúrese de introducir un número.");
        if(filas <= 0)
            alert("Una matriz no puede tener " + filas + " filas. Aségurese de introducir un número mayor de 0.");
    }while(isNaN(filas) || filas <= 0);

    do {
        var columnas = parseInt(prompt("Escriba el número de columnas que tendrá la matriz:"));
        if(isNaN(columnas))
            alert("Por favor, asegúrese de introducir un número.");
        if(columnas <= 0)
            alert("Una matriz no puede tener " + columnas + " columnas. Aségurese de introducir un número mayor de 0.");
    }while(isNaN(columnas) || columnas <= 0);

    matriz.inicializarMatriz(filas, columnas);
}
