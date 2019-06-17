// Obtencion de datos del sessionStorage
var arrayParametros = ["ciclo","nombre", "primerApellido", "segundoApellido", 
"fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad", 
"provincia", "nombreLocalidad", "cpLocalidad", 
"calleDom", "numeroDom", "telefono", "email", "nombreCentroInscripcion", "localidadCentroInscripcion",
"codigoCentro", "curso", "viaAcceso"];


for(var i = 0;i<20;i++){
    // sessionStorage.getItem(arrayParametros[i])
    $("#" + arrayParametros[i]).text(sessionStorage.getItem(arrayParametros[i]))
}

$("#btnConfirmar").attr("style","-webkit-animation:jello-vertical 0.9s both;animation:jello-vertical 0.9s both");

// Crear Matricula
$("#btnConfirmar").click(function(){

    var uri = "https://proyecto-mdc-api.herokuapp.com/saveMatricula"
    console.log("URI: " + uri)

    for(var i = 0;i<20;i++){
        console.log(sessionStorage.getItem(arrayParametros[i]))
    }

    // Envion de datos del sessionStorage por post
    $.post(uri, {
        ciclo:sessionStorage.getItem(arrayParametros[0]),
        nombre:sessionStorage.getItem(arrayParametros[1]),
        primerApellido:sessionStorage.getItem(arrayParametros[2]),
        segundoApellido:sessionStorage.getItem(arrayParametros[3]),
        fechaNacimiento:sessionStorage.getItem(arrayParametros[4]),
        tipoDocumentacion:sessionStorage.getItem(arrayParametros[5]),
        numDNI:sessionStorage.getItem(arrayParametros[6]), 
        nacionalidad:sessionStorage.getItem(arrayParametros[7]), 
        provincia:sessionStorage.getItem(arrayParametros[8]), 
        nombreLocalidad:sessionStorage.getItem(arrayParametros[9]), 
        cpLocalidad:sessionStorage.getItem(arrayParametros[10]),
        calleDom:sessionStorage.getItem(arrayParametros[11]), 
        numeroDom:sessionStorage.getItem(arrayParametros[12]), 
        telefono:sessionStorage.getItem(arrayParametros[13]), 
        email:sessionStorage.getItem(arrayParametros[14]), 
        nombreCentroInscripcion:sessionStorage.getItem(arrayParametros[15]), 
        localidadCentroInscripcion: sessionStorage.getItem(arrayParametros[16]), 
        codigoCentro:sessionStorage.getItem(arrayParametros[17]), 
        curso:sessionStorage.getItem(arrayParametros[18]), 
        viaAcceso:localStorage.getItem(arrayParametros[19]),
        fechaInscripcion: "19/05/2019",
        estadoMatricula: "pendiente",
        gradoSuperior: true,
        familiaProfesional: "Informatica"
    
    })

    // Eliminar datos sessionStorage
    for(var i = 0;i<20;i++){
        console.log(sessionStorage.removeItem(arrayParametros[i]))
    }

    //Animacion Confirmar
    Swal.fire({
        type: 'success',
        title: '¡Matrícula Creada!',
        showConfirmButton: false,
        timer: 1800,
    })

    var enlace ="https://felisito16.github.io/MDC-PROYECTO-HOST-MATRICULACION/ventanaCiclos.html";
    setTimeout(() => {location.href = enlace},2000)
}) 

