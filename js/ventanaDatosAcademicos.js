//Habilitar boton "Siguiente" si estan todos los campos rellenos al cargar la página.
$(document).ready(() => {
    var contadorRellenos = 0;
    var selectCurso = $("#curso").val()
    var selectViaAcceso = $("#viaAcceso").val()

    $('.form-control').each(function() {
        if($(this).val()!= "" && selectCurso != "Curso Matriculación" && selectCurso != null && selectViaAcceso != "Vía Acceso" && selectViaAcceso != null){
            contadorRellenos++;
            (contadorRellenos == 5)?botonHabilitar():botonDeshabilitar()
        }
    });
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al levantar una tecla (input)
$('.form-control').keyup(() => 
{
    var contadorRellenos = 0;
    var selectCurso = $("#curso").val()
    var selectViaAcceso = $("#viaAcceso").val()
    $('.form-control').each(function() {
        if($(this).val()!= "" && selectCurso != "Curso Matriculación" && selectCurso != null && selectViaAcceso != "Vía Acceso" && selectViaAcceso != null){
            contadorRellenos++;
            (contadorRellenos == 5)?botonHabilitar():botonDeshabilitar()
        }
    });
})


// Habilitar boton "Siguiente" si estan todos los campos rellenos al producirse un cambio (select)
$('.form-control').change(() => 
{
    var contadorRellenos = 0;
    var selectCurso = $("#curso").val()
    var selectViaAcceso = $("#viaAcceso").val()
    $('.form-control').each(function() {
        if($(this).val()!= "" && selectCurso != "Curso Matriculación" && selectCurso != null && selectViaAcceso != "Vía Acceso" && selectViaAcceso != null){
            contadorRellenos++;
            (contadorRellenos == 5)?botonHabilitar():botonDeshabilitar()
        }
    });
})


// Insercion de datos en el LocalStorage
var arrayParametros = ["nombreCentroInscripcion", "localidadCentroInscripcion", "codigoCentro", 
                        "curso", "viaAcceso"];

$("#btnSiguiente").click(() => {                      

    for(var i=0;i<5;i++)
    {
        localStorage.setItem(arrayParametros[i],$(".form-control:eq(" + i + ")").val())
    }
    bNavegacionHabilitar(3)
})

