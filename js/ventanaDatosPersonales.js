// Datepicker de Fecha de Nacimiento
$('#fechaNacimiento').datepicker({
    locale: 'es-es',
    uiLibrary: 'bootstrap4',
    format: 'dd/mm/yyyy'
});


//Habilitar boton "Siguiente" si estan todos los campos rellenos al cargar la página.
$(document).ready(() => {
    var contadorRellenos = 0;
    var selectTipoDocumentacion = $("#tipoDocumentacion").val()

    $('.form-control').each(function() {
        if($(this).val()!= ""  && selectTipoDocumentacion != "Tipo Documentacion"  && selectTipoDocumentacion != null){
            contadorRellenos++;
            (contadorRellenos == 14)?botonHabilitar():botonDeshabilitar()
        }
    })
    
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al levantar una tecla en un input
$('.form-control').keyup(() =>
{
    var contadorRellenos = 0;
    var selectTipoDocumentacion = $("#tipoDocumentacion").val()
    $('.form-control').each(function() {
        if($(this).val()!= "" && selectTipoDocumentacion != "Tipo Documentacion"  && selectTipoDocumentacion != null){
            contadorRellenos++;
            (contadorRellenos == 14)?botonHabilitar():botonDeshabilitar() 
        }
    });
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al producirse un cambio en el select
$('.form-control').change(() =>
{
    var contadorRellenos = 0;
    var selectTipoDocumentacion = $("#tipoDocumentacion").val()
    $('.form-control').each(function() {
        if($(this).val()!= ""  && selectTipoDocumentacion != "Tipo Documentacion" && selectTipoDocumentacion != null){
            contadorRellenos++;
            (contadorRellenos == 14)?botonHabilitar():botonDeshabilitar()
        }
    });
})


// Insercion de datos en el LocalStorage
var arrayParametros = ["nombre", "primerApellido", "segundoApellido",
                        "fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad",
                        "provincia", "nombreLocalidad", "cpLocalidad",
                        "calleDom", "numeroDom", "telefono", "email"];

$("#btnSiguiente").click(() => {

    for(var i=0;i<14;i++)
    {
        localStorage.setItem(arrayParametros[i],$(".form-control:eq(" + i + ")").val())
        
    }
    bNavegacionHabilitar(2)
})



