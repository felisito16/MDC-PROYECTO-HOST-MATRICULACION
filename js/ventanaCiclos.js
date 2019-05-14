 // Evento de clic para cambiar el modulo activo
 $(".contenedorModulo").click(function () {
    $(".contenedorModulo").not("contenedorActivo").removeClass("contenedorActivo").css({ "pointer-events": "auto" })
    $(this).addClass("contenedorActivo").css({ "pointer-events": "none" })
});

 // Evento de hover si esta activo el modulo
 $(".contenedorModulo").css("color", "black").hover(function () {
    !($(this).hasClass("contenedorActivo"))
        ? $(this).addClass("contenedorActivohover").css("color", "black")
        : $(this).css("color", "black")
}, function () {
    $(this).removeClass("contenedorActivohover").css("color","black");
});


$(document).ready(function () {

    // Funcionalidad con la API
    $(".contenedorModulo:eq(0)").click(() => { matriculaCiclos("DAM"); console.log("DAM")})
    $(".contenedorModulo:eq(1)").click(() => { matriculaCiclos("DAW"); console.log("DAW")})
    $(".contenedorModulo:eq(2)").click(() => { matriculaCiclos("ASIR"); console.log("ASIR")})
});

//Funcion Matricula Ciclos
function matriculaCiclos(familiaProfesional) {
   
    var uri = "https://proyecto-mdc-api.herokuapp.com/crearMatricula";
    console.log("URI: " + uri)

    $.post(uri, { familiaProfesional: familiaProfesional})
   
    $("#btnSiguiente").removeAttr("disabled");

    $("#btnSiguiente").hover(function(){
        $(this).css("background-color", "rgb(7, 148, 14)")
    })

}