// Datepicker de Fecha de Nacimiento
$('#fechaNacimiento').datepicker({ 
    locale: 'es-es',
    uiLibrary: 'bootstrap4',
    format: 'dd/mm/yyyy'
});


$(".form-control").change(() =>{

    var contadorRellenos = 0;

    for(var i = 0;i<14;i++)
    {
        ($(".form-control:eq(" + i + ")").val() != "" && $(".form-control:eq(" + i + ")").val() != " "?contadorRellenos++:"")
    }
    
    (contadorRellenos == 14)?botonActivado():botonDesactivado()
    
});

function dimeIndiceVacio(){

    var indice;

    for(var i = 0;i<14;i++)
    {
        ($(".form-control:eq(" + i + ")").val() == ""?indice = i:"")
    }

    return indice;
}


var arrayParametros = ["nombre", "primerApellido", "segundoApellido", 
                        "fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad", 
                        "provincia", "nombreLocalidad", "cpLocalidad", 
                        "calleDom", "numeroDom", "telefono", "email"];


// function siTodoEstaEscrito(){



// }


// $("#btnSiguiente").click(() =>
// {
//     for(var i = 0;i<14;i++)
//     {
//         localStorage.setItem(arrayParametros[i], $(".columnaFormulario input:nth-child(2)").val()[i])
//     }
// })                 
