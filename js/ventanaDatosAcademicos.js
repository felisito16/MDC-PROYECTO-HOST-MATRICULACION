var texto = new RegExp(/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/);
var numeros = new RegExp(/^[0-9]*$/);


//Habilitar boton "Siguiente" si estan todos los campos rellenos al cargar la página.
$(document).ready(() => {
    var contadorRellenos = 0;
    $('.form-control').each(function() {
        if($(this).val()!=""  && $(this).val() != "Curso Matriculación" && $(this).val() != "Vía Acceso" ){
            $(this).addClass("campoValidar")
            contadorRellenos++;
        
            (contadorRellenos == 5)?botonHabilitar():botonDeshabilitar()
            console.log(contadorRellenos)
        }
    })
})


// Validacion de campos
$('.form-control').each(function(index) {
    $(this).keyup(function(){

        if($(this).val() == "")
        {
            $(this).removeClass("campoValidar")
            $(this).removeClass("campoInvalidar")
        }
        else
        {
            switch(index)
            {
                case 0 : case 1 :
                (texto.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 2 :
                (numeros.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

            }
        }
    })

    $(this).change(function(){

        if($(this).val() == "")
        {
            $(this).removeClass("campoValidar")
            $(this).removeClass("campoInvalidar")
        }
        else
        {
            switch(index)
            {
                case 3 : case 4 :
                (texto.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;
            }
        }
    })
})



// Habilitar boton "Siguiente" si estan todos los campos rellenos al levantar una tecla (input)
$('.form-control').keyup(() => 
{
    var contadorRellenos = 0;
    $('.form-control').each(function() {
        if($(this).hasClass("campoValidar")){
            contadorRellenos++;
            (contadorRellenos == 5)?botonHabilitar():botonDeshabilitar()
            console.log(contadorRellenos)
        }
        
    })
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al producirse un cambio (select)
$('.form-control').change(() => 
{
    var contadorRellenos = 0;
    $('.form-control').each(function() {
        if($(this).hasClass("campoValidar")){
            contadorRellenos++;
            (contadorRellenos == 5)?botonHabilitar():botonDeshabilitar()
            console.log(contadorRellenos)
        }
    })
})


// Insercion de datos en el sessionStorage
var arrayParametros = ["nombreCentroInscripcion", "localidadCentroInscripcion", "codigoCentro", 
                        "curso", "viaAcceso"];

$("#btnSiguiente").click(() => {                      

    for(var i=0;i<5;i++)
    {
        sessionStorage.setItem(arrayParametros[i],$(".form-control:eq(" + i + ")").val())
    }
    bNavegacionHabilitar(3)
})

