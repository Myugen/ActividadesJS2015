//Clase Producto
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

var stockProductos = [];

//Creación del array de Productos
function cargarDatos(stockProductos) {
    stockProductos.push(new Producto("caramelos", 0.90, 0));
    stockProductos.push(new Producto("gominolas", 0.20, 0));
    stockProductos.push(new Producto("judías", 0.10, 0));
    stockProductos.push(new Producto("nubes", 0.30, 0));
    stockProductos.push(new Producto("lacasitos", 0.40, 0));
}

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

function validarOpcion(dato) {
    var re = /^(s|S|n|N)$/i;
    return re.test(dato);
}

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
    var facturacion = document.getElementById("facturacion");
    var montoTotal = 0;
    var hayProductos = false;
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
            var producto = document.createElement("div");
            var imgSource = document.getElementById(stockProductos[i].nombre).src;
            var img = document.createElement("img");
            img.src = imgSource;
            img.width = "50";
            img.height = "50";
            producto.appendChild(img);
            var cadena = "Cantidad: " + stockProductos[i].cantidad + " -> Nombre: " + stockProductos[i].nombre + " -> Precio/Unidad: " + stockProductos[i].precio + "€ -> Total: " + total + "€";
            var informacionProducto = document.createElement("p");
            var nodo = document.createTextNode(cadena);
            informacionProducto.appendChild(nodo);
            producto.appendChild(informacionProducto);
            facturacion.appendChild(producto);
        }
    }
    if(!hayProductos) {
        var cadena = "No hay productos seleccionados";
        var parrafo = document.createElement("p");
        var nodo = document.createTextNode(cadena);
        parrafo.appendChild(nodo);
        facturacion.appendChild(parrafo);
    }
    else {
        var igic = montoTotal * 0.07;
        var totalFactura = montoTotal + igic;
        var informacionTotal = document.createElement("div");
        var cadena = "Monto total (sin IGIC): " + montoTotal + "€ -> IGIC 7%: " + igic + "€";
        if(descuento > 0) {
            cadena += " -> Descuento: " + descuento + "%";
            totalFactura *= (descuento/100);
        }
        cadena += " -> Total: " + totalFactura + "€";
        console.log("Total factura: " + totalFactura + "€");
        var parrafo = document.createElement("p");
        var nodo = document.createTextNode(cadena);
        parrafo.appendChild(nodo);
        informacionTotal.appendChild(parrafo);
        facturacion.appendChild(informacionTotal);
        do {
            var nuevaFactura = prompt("¿Desea realizar otra factura? Introduzca S/s para confirmar o N/n para rechazar");
            if(!validarOpcion(nuevaFactura))
                alert("Opción no valida");
        }while(!validarOpcion(nuevaFactura));
        if(nuevaFactura == "S" || nuevaFactura == "s")
            location.reload();
    }
}
