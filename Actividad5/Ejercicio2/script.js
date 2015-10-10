var triangulo = {
    base : 0,
    altura : 0,
    area : 0,
    inicializarTriangulo : function(base, altura) {
        this.base = base;
        this.altura = altura;
        this.area = base * altura / 2;
    },
    mostrarTriangulo : function() {
        var cadena = "Las propiedades del triángulo son:<br>";
        cadena += "<strong> -Base: </strong>" + this.base + "<br>";
        cadena += "<strong> -Altura: </strong>" + this.altura + "<br>";
        cadena += "<strong> -Area: </strong>" + this.area + "<br>";
        document.getElementById("informacion").innerHTML = cadena;
    }
};

function cargar() {
    do {
        var base = parseInt(prompt("Escriba el tamaño de la base que tendrá el triágulo:"));
        if(isNaN(base))
            alert("Por favor, asegúrese de introducir un número.");
        if(base <= 0)
            alert("Un triágulo no puede tener una base de tamaño " + base + ". Aségurese de introducir un número mayor de 0.");
    }while(isNaN(base) || base <= 0);

    do {
        var altura = parseInt(prompt("Escriba el tamaño de la altura que tendrá el triágulo:"));
        if(isNaN(altura))
            alert("Por favor, asegúrese de introducir un número.");
        if(altura <= 0)
            alert("Un triágulo no puede tener una altura de tamaño " + altura + ". Aségurese de introducir un número mayor de 0.");
    }while(isNaN(altura) || altura <= 0);

    triangulo.inicializarTriangulo(base, altura);
}
