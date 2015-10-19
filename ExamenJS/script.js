//Clase Producto
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

//Variable que almacena los productos
var stockProductos = [];

//Creación del array de Productos
function cargarDatos(stockProductos) {
    stockProductos.push(new Producto("caramelos", 0.90, 0));
    stockProductos.push(new Producto("gominolas", 0.20, 0));
    stockProductos.push(new Producto("judías", 0.10, 0));
    stockProductos.push(new Producto("nubes", 0.30, 0));
    stockProductos.push(new Producto("lacasitos", 0.40, 0));
}

//Método para buscar los productos
function buscarProducto(nombre, stockProductos) {
    for(var i = 0; i < stockProductos.length; i++)
        if(stockProductos[i].nombre == nombre)
            return i;
    return -1;
}

//Función de validación para que la entrada sea un dato numérico
function validarNumero(dato) {
    var re = /^\d{1,}$/i;
    return re.test(dato);
}

//Función para validar si la entrada de datos es 'S', 's', 'N' o 'N'
function validarOpcion(dato) {
    var re = /^(s|S|n|N)$/i;
    return re.test(dato);
}

//Función que añade una cantidad al producto, su nombre viene dado por el ID en el html
function aniadirCantidad(nombre, stockProductos) {
    var productoEncontrado = buscarProducto(nombre, stockProductos);
    if(productoEncontrado == -1)
        alert("El producto no se encuenta.");
    else {
        var correcto = false;
        do {
            var cantidad = prompt("Introduzca la cantidad que desea:")
            if(!validarNumero(cantidad))
                alert("Por favor introduzca un valor numérico positivo.");
        }while(!validarNumero(cantidad));
        stockProductos[productoEncontrado].cantidad = cantidad;
    }
}

function generarFactura(stockProductos) {
    var facturacion = document.getElementById("facturacion");  //DIV donde mostrará toda la información de facturacion
    var montoTotal = 0;
    var hayProductos = false;                                  //Control para mostrar en un mensaje en caso de no algún producto con cantidad superior a 0
    do {
        var descuento = prompt("Introduzca un descuento:");
        if(!validarNumero(descuento))
            alert("Por favor introduzca un valor numérico positivo.")
    }while(!validarNumero(descuento));
    descuento = parseInt(descuento);
    for(var i = 0; i < stockProductos.length; i++) {
        if(stockProductos[i].cantidad > 0) {
            if(!hayProductos)
                hayProductos = true;
            var total= (stockProductos[i].cantidad * stockProductos[i].precio);
            montoTotal += total;
            var producto = document.createElement("div");                           //DIV que mostrara la informacion de un producto (imagen, cantidad, nombre, precio, etc.)
            var imgSource = document.getElementById(stockProductos[i].nombre).src;
            var img = document.createElement("img");                                //IMG que muestra la imagen del producto
            img.src = imgSource;
            img.width = "50";
            img.height = "50";
            producto.appendChild(img);
            var cadena = "Cantidad: " + stockProductos[i].cantidad + " -> Nombre: " + stockProductos[i].nombre + " -> Precio/Unidad: " + stockProductos[i].precio + "€ -> Total: " + total + "€";
            var informacionProducto = document.createElement("p");                  //P que muestra toda la informacion del producto recogida en la variable Nodo Texto
            var nodo = document.createTextNode(cadena);
            informacionProducto.appendChild(nodo);
            producto.appendChild(informacionProducto);
            facturacion.appendChild(producto);                                      //Añado la información del DIV producto al de facturación
        }
    }
    if(!hayProductos) {                                     //En caso no haber encontrado un producto arriba solo muestro un mesaje
        alert("No hay productos seleccionados");
    }
    else {                                                  //En cambio si lo encuentra hay información del total y lo muestro
        var igic = montoTotal * 0.07;
        var totalFactura = montoTotal + igic;
        var informacionTotal = document.createElement("div"); //DIV que muestra toda la información del total de la factura
        var cadena = "Monto total (sin IGIC): " + montoTotal + "€ -> IGIC 7%: " + igic + "€";
        if(descuento > 0) {                                 //Si hay descuento muestro añado la información de él y recalculo el total con el descuento
            cadena += " -> Descuento: " + descuento + "%";
            totalFactura *= (descuento/100);
        }
        cadena += " -> Total: " + totalFactura + "€";
        console.log("Total factura: " + totalFactura + "€");
        var parrafo = document.createElement("p");          //Al igual que en la información del producto creo una etiqueta P para mostrar
        var nodo = document.createTextNode(cadena);
        parrafo.appendChild(nodo);
        informacionTotal.appendChild(parrafo);
        facturacion.appendChild(informacionTotal);          //La información del total la añado al DIV de facturación
        do {
            var nuevaFactura = prompt("¿Desea realizar otra factura? Introduzca S/s para confirmar o N/n para rechazar");
            if(!validarOpcion(nuevaFactura))
                alert("Opción no valida");
        }while(!validarOpcion(nuevaFactura));
        if((nuevaFactura == "S") || (nuevaFactura == "s"))
            location.reload();
    }
}
