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

//Funcion Habilitar Barra Navegacion
function bNavegacionHabilitar(numeroA){

     $(".nav-item:eq(" + numeroA + ")").removeAttr("style").removeAttr("title");
     $(".nav-item:eq(" + numeroA + ")").mouseover(function() {$(this).css("background-color","rgb(7, 148, 14)")})
     .mouseout(function() {$(this).css({"background-color":"rgb(131, 153, 166)","border-color":"rgb(7, 148, 14)"})})

}

//Funcion Deshabilitar Barra Navegacion
function bNavegacionDeshabilitar(numeroA){

    $(".nav-item:eq(" + numeroA + ")").attr("title","Rellena todos los campos para seguir con el proceso de matriculación.");
    $(".nav-item:eq(" + numeroA + ")").attr("style","cursor: not-allowed;pointer-events: none;background-color:rgb(175, 189, 197)");
    

}


$(document).ready(() => {
 
    var arrayParametros = ["ciclo","nombre", "primerApellido", "segundoApellido", 
    "fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad", 
    "provincia", "nombreLocalidad", "cpLocalidad", 
    "calleDom", "numeroDom", "telefono", "email", "nombreCentroInscripcion", "localidadCentroInscripcion",
    "codigoCentro", "curso", "viaAcceso"];

    for(var i = 0;i<20;i++)
    {

        // Añadir clase "contenedorActivo" a div de ciclo seleccionado
        switch(localStorage.getItem(arrayParametros[0]))
        {
            case "DAM": $(".contenedorModulo:eq(0)").addClass("contenedorActivo")
            break;
            case "DAW": $(".contenedorModulo:eq(1)").addClass("contenedorActivo")
            break;
            case "ASIR": $(".contenedorModulo:eq(2)").addClass("contenedorActivo")
            break;
        }


        // Obtencion de datos del LocalStorage
        $("#" + arrayParametros[i]).val(localStorage.getItem(arrayParametros[i]))


        // Añadir valor a select  Tipo Documentacion si es nulo
        if(localStorage.getItem("tipoDocumentacion") == null)
        {
            $("#tipoDocumentacion").val("Tipo Documentacion")
        }


        // Añadir valor a select  Curso y Vía de Acceso si es nulo
        if(localStorage.getItem("curso") == null && localStorage.getItem("viaAcceso") == null)
        {
            $("#curso").val("Curso Matriculación")
            $("#viaAcceso").val("Vía Acceso")
        }


        // Deshabilitar Barra Navegacion
        if(localStorage.getItem(arrayParametros[i]) == undefined && i == 0)
        {
            for(var a = 1;a<6;a++)
            {
                bNavegacionDeshabilitar(a)
            }
        }

        else if(localStorage.getItem(arrayParametros[i]) == undefined && i > 1 && i==14)
        {
            for(var e = 2;e<6;e++)
            {
                bNavegacionDeshabilitar(e)
            }
        }

        else if(localStorage.getItem(arrayParametros[i]) == undefined && i > 14 && i==19)
        {
            for(var o = 3;o<6;o++)
            {
                bNavegacionDeshabilitar(o)
            }
        }
    }



});








