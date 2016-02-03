function validarNumero(numero) {
    'use strict';
    var re = /^\d$/i;
    return re.test(numero);
}

function menu () {
    'use script';
    var mensaje = "Menú:\n";
    mensaje += "\t[1] Selectores\n";
    mensaje += "\t[2] Recorrer DOM\n";
    mensaje += "\t[3] Manipulación\n";
    mensaje += "\t[4] Crear sugerencia\n";
    mensaje += "\t[5] Navegación por pestañas\n";
    mensaje += "\t[6] Mostrar texto oculto\n";
    mensaje += "\t[7] Menú desplegable\n";
    mensaje += "\t[8] Crear Slideshow\n\n";
    mensaje += "\t[0] Salir";
    do {
        var opcion = prompt(mensaje)
        if (!validarNumero(opcion))
            alert("¡Introduzca un número!");
    }while (!validarNumero(opcion));
    return parseInt(opcion);
}

$("document").ready (function () {
    do {
        var opcion = menu();
        switch(opcion) {
            case 1:
                console.log("---1. Selectores---");
                //Seleccionar todos los elementos div que poseen la clase “module”.
                $(".module").css("color", "crimson");
                /*Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
                Respuesta: El mejor es mediante el método 'eq()' proporcionado por JQuery. Porque mediante ID tendríamos que asegurarnos de que sea único, y por el pseudo-selector de CSS3 habría que asegurarnos de que soporte el selector que fuésemos a usar (en la página anuncia que soporta CASI todos los pseudo-selectores, no todos). En resumen, la mejor manera de asegurarnos es el propio de JQuery*/
                $("#myList li:nth-child(3)").css("color", "crimson");
                $("#myListItem").css("color", "crimson");
                $("#myList li").eq(2).css("color", "crimson");
                //Seleccionar el elemento label del elemento input utilizando un selector de atributo.
                $("label[for='q']").css("color", "crimson");
                /*var nombre = $("input").attr("id");
                $("label[for="+ nombre +"]")*/
                //Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
                console.log("Hay " + $(":hidden").length + " elementos ocultos");
                //Averiguar cuantas imágenes en la página poseen el atributo alt.
                console.log("Hay " + $("img[alt]").length + " imágenes con el atributo 'alt'");
                //Seleccionar todas las filas impares del cuerpo de la tabla.
                $("table tr:odd").css("background-color", "crimson");
                break;
            case 2:
                console.log("---2. Recorrer DOM---");
                //Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
                $("img[alt]").each(function() {
                    console.log("img->alt: " + $(this).attr("alt"));
                });
                //Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
                $("#search:input").addClass("clase1");
                //Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
                $("#myList .current").removeClass("current").next().addClass("current");
                //Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
                $("#specials select").parent().next().children().css("box-shadow", "1px 5px 5px black");
                //Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.
                $("#slideshow li").eq(0).addClass("current").siblings().hide();
                break;
            case 3:
                console.log("---3. Manipulación---");
                //Añadir 5 nuevos ítems al final de la lista desordenada #myList.
                for (var i = 0; i < 5; i++) {
                    $("#myList").append("<li>Elemento nuevo nº" + i + "</li>");
                }
                //Remover los ítems impares de la lista.
                $("#myList li:odd").remove();
                //Añadir otro elemento h2 y otro párrafo al último div.module.
                $(".module").last().append("<h2>ChuckNorris</h2>", "<p>Soy un hacker</p>");
                //Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
                $("select").append("<option>Wednesday</option>");
                //Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
                $(".module").last().after($("<div>").addClass("module").append($("img").eq(0).clone()));
                break;
            case 4:
                console.log("---4. Crear una sugerencia---");
                //Utilizar el texto del elemento label y aplicar una “sugerencia” en la caja de ingreso de texto
                //Establecer el valor del elemento input igual al valor del elemento label.
                $("input[name=q]").val($("label[for=q]").text());
                //Añadir la clase “hint” al elemento input.
                $("input[name=q]").addClass("hint");
                //Remover el elemento label.
                $("label[for=q]").remove();
                
                break;
            case 5:
                console.log("---5. Navegación por pestañas---");
                //Ocultar todos los elementos div.module.
                $(".module").hide();
                //Crear una lista desordenada antes del primer div.module para utilizar como pestañas.
                var nav = $("<ul>").addClass("tab").insertBefore($(".module").eq(0));
                //Interactuar con cada div utilizando $.fn.each. Por cada uno, utilizar el texto del elemento h2 como el texto para el ítem de la lista desordenada.
                //Vincular un evento click a cada ítem de la lista de forma que:
                //+muestre el div correspondiente y oculte el otro.
                //+añada la clase “current” al ítem seleccionado.
                //+remueva la clase “current” del otro ítem de la lista.
                $(".module").each(function () {
                    var modulo = $(this);
                    var pestana = $("<li>").appendTo(nav);
                    pestana.text(modulo.children("h2").text());
                    pestana.click(function() {
                        $(this).addClass("current").siblings().removeClass("current");
                        modulo.show().siblings(".module").hide();
                    });
                });
                //Finalmente, mostrar la primera pestaña.
                $(".module").eq(0).show();
                nav.children().eq(0).addClass("current");
                break;
            case 6:
                console.log("---6. Mostrar texto oculto---");
                //al hacer click en alguno de los titulares del div #blog, se debe mostrar el párrafo correspondiente con un efecto de deslizamiento
                //al hacer click en otro titular, se debe ocultar el párrafo mostrado con un efecto de deslizamiento y mostrar nuevamente el párrafo correspondiente también con un efecto de deslizamiento. Ayuda: No se olvide de utilizar el selector :visible.
                $("#blog").find("h3").click(function () {
                    $("#blog").find("p:visible").hide();
                    $(this).next("p").show();
                });
                break;
            case 7:
                //Desplegar los ítems del menú superior de la página.
                //Al pasar el puntero del ratón por encima de un ítem del menú, se debe mostrar su submenú en caso que exista;
                //Al no estar más encima de un ítem, el submenú se debe ocultar.
                console.log("---7. Menú desplegable---");
                $("#nav li").hover(function () {
                    $("ul", this).stop().slideDown(300);
                },
                function () {
                    $("ul", this).stop().slideUp(300);
                });
                break;
            case 8:
                console.log("---8. Crear un slideshow---");
                //Mover el elemento #slideshow a la parte superior de la página.
                $("#main").children("form").after($("#slideshow"));
                //Escribir un código que permita mostrar los ítems de forma cíclica, mostrando un ítem por unos segundos, luego ocultándolo con un efecto fade out y mostrando el siguiente con un efecto fade in;
                //Una vez llegado al último ítem de la lista, comenzar de nuevo con el primero;
                //Incluir un área de navegación por debajo del slideshow que muestre cuantas imágenes existen y en cual se encuentra (ayuda: $.fn.prevAllpuede resultar útil).
                $("#slideshow").find("li").hide();
                $("#slideshow").find("li").first().show();
                setInterval(function() {
                    $("#slideshow li:visible").each(function () {
                        $(this).hide().fadeOut();
                        if ($(this).next().text() == "") {
                            $(this).siblings("li").eq(0).show().fadeIn();
                        }
                        else {
                            $(this).next().fadeIn();
                        }
                    });
                }, 2000);
                break;
            case 0:
                alert("¡Hasta la vista, baby!");
                break;
            default:
                alert("¡Elija una opción válida!");
                break;
        }
        
    }while(opcion != 0);
});