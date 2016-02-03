$(document).ready(function () {
    //Seleccionar todos los elementos div que poseen la clase “media”.
    $("div .media");
    
    //Contar el número de opciones del menú de navegación superior de la página y mostrar su nombre por consola.
    console.log("Número de elementos menú de navegación: " + $("ul.nav").children().length);
    $("ul.nav li").children("a").each(function (indice) {
        console.log("Link[" + indice + "]->" + $(this).text());
    });
    
    //Seleccionar el primer elemento p de la clase lead y mostrar su contenido html.
    console.log($("p.lead").children().first().text());
    
    //Cambiar las imágenes de la parte final del documento que tienen justo a continuación un <h4> con el texto "Start Bootstrap..." por otras imágenes diferentes. En este punto se debe usar $.fn.each.
    $("img.media-object").slice(0, 2).each(function () {
        $(this).attr("src", "../images/chucknorris.png");
    });
    
    //Posicionarte en el botón del formulario y a partir de ahí añadir una imagen justo antes del formulario que use la clase "img-responsive".
    $("<img>").addClass("img-responsive").attr("src", "../images/heroes80.jpg").prependTo($("form button").parent());
    
    //Eliminar el elemento div que está contenido en el último div con clase .media.
    $("div.media").last().children("div").remove();
    
    //Seleccionar la primera lista de categorías y luego añadir un nuevo elemento.
    $("ul.list-unstyled").first().append("<li>Soy un nuevo Elemento</li>").css("color", "crimson");
    
    //Copiar la imagen que está al principio del documento en un div que estará ubicado justo antes del footer.
    $("img").first().clone().appendTo($("<div>").insertBefore("footer"));
    
    //Eliminar los elementos pares de la segunda lista de categorías y al resto de elementos establecerle una clase css que hayas creado o bien una de las existentes.
    $("ul.list-unstyled").eq(1).children(":even").remove();
    $("ul.list-unstyled").eq(1).children().addClass("alert-danger");
    
    //Hay que añadir interactividad al párrafo que está justo a continuación del h2 del contenido. Es decir, al hacer click sobre el texto de la cabecera h2 se debe ocultar el párrafo con un efecto de deslizamiento y si volvemos a hacer click sobre el encabezado volveremos a mostrar el texto nuevamente.
    $("h2").click(function () {
        if ($(this).next("div").is(":visible")) {
            $(this).next("div").slideUp(300);
        }
        else {
            $(this).next("div").slideDown(300);
        }
    });
    
    //Añadir una validación al botón del formulario que existe en al página para dejar sugerencias de manera que al hacer click sobre el botón, se compruebe si el usuario ha escrito un comentario. Si lo ha hecho, no haremos nada, y si no ha introducido ningún comentario le mostraremos un alert al usuario indicando que debe introducir un mensaje.
    $("form button").click(function () {
        var $sugerencia = $("span#sugerencia");
        if ($sugerencia.length == 0) {
            $sugerencia = $("<span>").attr("id", "sugerencia").addClass("alert-danger col-md-12").css("margin-bottom", "10px").hide().insertBefore($(this));
            $sugerencia.append($("<p>El textarea no puede estar vacio</p>"));
        }
        if ($("textarea.form-control").val().length == 0) {
            if ($sugerencia.is(":hidden")) {
                $sugerencia.slideDown(300);
            }
        }
        else {
            if ($sugerencia.is(":visible")) {
                $sugerencia.hide();
            }
            alert("!Todo bien!");
        }
        return false;
    });
});