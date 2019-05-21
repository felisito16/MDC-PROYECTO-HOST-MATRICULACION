// Obtencion de datos del LocalStorage
var arrayParametros = ["ciclo","nombre", "primerApellido", "segundoApellido", 
"fechaNacimiento", "tipoDocumentacion", "numDNI", "nacionalidad", 
"provincia", "nombreLocalidad", "cpLocalidad", 
"calleDom", "numeroDom", "telefono", "email", "nombreCentroInscripcion", "localidadCentroInscripcion",
"codigoCentro", "curso", "viaAcceso"];


for(var i = 0;i<20;i++){
    
    // localStorage.getItem(arrayParametros[i])
    $("#" + arrayParametros[i]).text(localStorage.getItem(arrayParametros[i]))
    
}


// Crear Matricula
$("#btnConfirmar").click(function(){

    var uri = "https://proyecto-mdc-api.herokuapp.com/saveMatricula"
    console.log("URI: " + uri)
<<<<<<< Updated upstream

    // Mostrar datos LocalStorage
=======
    
>>>>>>> Stashed changes
    for(var i = 0;i<20;i++){
        console.log(localStorage.getItem(arrayParametros[i]))
    }

    // Envion de datos del LocalStorage por post
    $.post(uri, {
        ciclo:localStorage.getItem(arrayParametros[0]),
        nombre:localStorage.getItem(arrayParametros[1]),
        primerApellido:localStorage.getItem(arrayParametros[2]),
        segundoApellido:localStorage.getItem(arrayParametros[3]),
        fechaNacimiento:localStorage.getItem(arrayParametros[4]),
        tipoDocumentacion:localStorage.getItem(arrayParametros[5]),
        numDNI:localStorage.getItem(arrayParametros[6]), 
        nacionalidad:localStorage.getItem(arrayParametros[7]), 
        provincia:localStorage.getItem(arrayParametros[8]), 
        nombreLocalidad:localStorage.getItem(arrayParametros[9]), 
        cpLocalidad:localStorage.getItem(arrayParametros[10]),
        calleDom:localStorage.getItem(arrayParametros[11]), 
        numeroDom:localStorage.getItem(arrayParametros[12]), 
        telefono:localStorage.getItem(arrayParametros[13]), 
        email:localStorage.getItem(arrayParametros[14]), 
        nombreCentroInscripcion:localStorage.getItem(arrayParametros[15]), 
        localidadCentroInscripcion: localStorage.getItem(arrayParametros[16]), 
        codigoCentro:localStorage.getItem(arrayParametros[17]), 
        curso:localStorage.getItem(arrayParametros[18]), 
        viaAcceso:localStorage.getItem(arrayParametros[19]),
        fechaInscripcion: "19/05/2019",
        estadoMatricula: "pendiente",
        gradoSuperior: true,
        familiaProfesional: "Informatica"
    
    })

    // Eliminar datos LocalStorage
    for(var i = 0;i<20;i++){
        console.log(localStorage.removeItem(arrayParametros[i]))
    }

    //Animacion Confirmar
    Swal.fire({
        type: 'success',
        title: '¡Matrícula Creada!',
        showConfirmButton: false,
        timer: 1800,
    })
    //https://felisito16.github.io/MDC-PROYECTO-HOST-MATRICULACION/ventanaCiclos.html
    //file:///C:/Users/lbarriga/Desktop/REPOSITORIO/MDC-PROYECTO-HOST-MATRICULACION/ventanaCiclos.html

    var enlace ="file:///C:/Users/lbarriga/Desktop/REPOSITORIO/MDC-PROYECTO-HOST-MATRICULACION/ventanaCiclos.html";
    setTimeout(() => {location.href = enlace},2000)
}) 

