// Datepicker de Fecha de Nacimiento
$('#fechaNacimiento').datepicker({
    locale: 'es-es',
    uiLibrary: 'bootstrap4',
    format: 'dd/mm/yyyy'
});


//Habilitar boton "Siguiente" si estan todos los campos rellenos al cargar la página.
$(document).ready(() => {
    var contadorRellenos = 0;
    $('.form-control').each(function() {
        if($(this).val()!=""){
            $(this).addClass("campoValidar")
            contadorRellenos++;
            (contadorRellenos == 14)?botonHabilitar():botonDeshabilitar()
            console.log(contadorRellenos)
        }
    })
    
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al levantar una tecla en un input
$('.form-control').keyup(() =>
{
    var contadorRellenos = 0;
    $('.form-control').each(function() {
        if($(this).hasClass("campoValidar") && $(this).val()!=""){
            contadorRellenos++;
            (contadorRellenos == 14)?botonHabilitar():botonDeshabilitar()
            console.log(contadorRellenos)
        }
    })
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al producirse un cambio en el select
$('.form-control').change(() =>
{
    var contadorRellenos = 0;
    $('.form-control').each(function() {
        if($(this).hasClass("campoValidar") && $(this).val()!=""){
            contadorRellenos++;
            (contadorRellenos == 14)?botonHabilitar():botonDeshabilitar()
            console.log(contadorRellenos)
        }
    })
})


// Insercion de datos en el LocalStorage
var arrayParametros = ["nombre", "primerApellido", "segundoApellido",
                        "fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad",
                        "provincia", "nombreLocalidad", "cpLocalidad",
                        "calleDom", "numeroDom", "telefono", "email"];

var texto = new RegExp(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/);
var telefono = new RegExp(/^[0-9/+-]*$/);
var textoNumeroSimbolo = new RegExp(/^[ A-Za-z0-9_@./#&+-]*$/);
var fecha = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i);
var nif = new RegExp(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/);
var nie = new RegExp(/^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/);
var cPostal = new RegExp(/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/);
var email = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)


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
                case 0 : case 1 : case 2 : case 6 : case 7 : case 8 : 
                (texto.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 10 : case 11 : 
                (textoNumeroSimbolo.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 12 :
                (telefono.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 3 : 
                (fecha.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 5:
                (nie.test($(this).val()) == true || nif.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 9:
                (cPostal.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;

                case 13:
                (email.test($(this).val()) == true)
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
                case 3 : 
                (fecha.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;
                
                case 4 : 
                (texto.test($(this).val()) == true)
                ?$(this).removeClass("campoInvalidar").addClass("campoValidar")
                :$(this).removeClass("campoValidar").addClass("campoInvalidar")
                break;
            }
        }
    })
})


$("#btnSiguiente").click(() => {

    for(var i=0;i<14;i++)
    {
        localStorage.setItem(arrayParametros[i],$(".form-control:eq(" + i + ")").val())
        
    }
    bNavegacionHabilitar(2)
})



