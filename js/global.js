//Funcion Habilitar Boton
function botonHabilitar() {

    $("#btnSiguiente").removeAttr("disabled").removeAttr("style").removeAttr("title");
    $("#btnSiguiente").attr("style","-webkit-animation:jello-vertical 0.9s both;animation:jello-vertical 0.9s both")
    $("#btnSiguiente").mouseover(function() {$(this).css("background-color","rgb(7, 148, 14)")})
    .mouseout(function() {$(this).css({"background-color":"rgb(131, 153, 166)","border-color":"rgb(7, 148, 14)"})})

}


//Funcion Deshabilitar Boton
function botonDeshabilitar() {

    $("#btnSiguiente").attr("disabled",true).attr("style","cursor: not-allowed;");
    $("#btnSiguiente").attr("title","Rellena todos los campos para seguir con el proceso de matriculación.");

}


// Obtencion de datos del LocalStorage
$(document).ready(() => {
 
    var arrayParametros = ["ciclo","nombre", "primerApellido", "segundoApellido", 
    "fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad", 
    "provincia", "nombreLocalidad", "cpLocalidad", 
    "calleDom", "numeroDom", "telefono", "email", "nombreCentroInscripcion", "localidadCentroInscripcion",
    "codigoCentro", "curso", "viaAcceso"];

    for(var i = 0;i<20;i++)
    {
        switch(localStorage.getItem(arrayParametros[i]))
        {
            case "DAM": $(".contenedorModulo:eq(0)").addClass("contenedorActivo")
            break;
            case "DAW": $(".contenedorModulo:eq(1)").addClass("contenedorActivo")
            break;
            case "ASIR": $(".contenedorModulo:eq(2)").addClass("contenedorActivo")
            break;
        }
        $("#" + arrayParametros[i]).val(localStorage.getItem(arrayParametros[i]))
    }
    
    if(localStorage.getItem("tipoDocumentacion") == null)
    {
        $("#tipoDocumentacion").val("Tipo Documentacion")
    }

    if(localStorage.getItem("curso") == null && localStorage.getItem("viaAcceso") == null)
    {
        $("#curso").val("Curso Matriculación")
        $("#viaAcceso").val("Vía Acceso")
    }

});


/* ¡¡¡¡¡   MEJORAR   !!!!!! */

// var i = 0;
// var nombre = new RegExp('^[a-zA-Z]+$');
// var primerApellido = new RegExp('^[a-zA-Z]+$');

// var arrayExpresiones = [nombre,primerApellido]

// var arrayParametros = ['nombre', 'primerApellido'];

// for(var i = 0;i<2;i++)
// {
//     $('#' + arrayParametros[i]).change(function(){

//         if($('#'  + arrayParametros[i]).val() == "")
//         {
//             $('#' + arrayParametros[i]).removeClass("campoValidar")
//             $('#' + arrayParametros[i]).removeClass("campoInvalidar")
//         }
//         else
//         {
//             if(arrayExpresiones[i].test($('#' + arrayParametros[i] + "").val()) == true)
//             {
//                 $('#' + arrayParametros[i]).removeClass("campoInvalidar")
//                 $('#' + arrayParametros[i]).addClass("campoValidar")
//             }
//             else
//             {
//                 $('#' + arrayParametros[i]).removeClass("campoValidar")
//                 $('#' + arrayParametros[i]).addClass("campoInvalidar")
//             }
//         }
//     })
// }






