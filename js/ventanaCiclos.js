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
    $(this).removeClass("contenedorActivohover").css("color", "black");
});


$(document).ready(function () {

    // Funcionalidad con la API
    $(".contenedorModulo:eq(0)").click(() => { console.log("DAM") })
    $(".contenedorModulo:eq(1)").click(() => { console.log("DAW") })
    $(".contenedorModulo:eq(2)").click(() => { console.log("ASIR") })

    // Boton Siguiente Click
    $("#btnSiguiente").click(() => {
        if ($(".contenedorModulo:eq(0)") == $(this)) {
            localStorage.setItem("ciclo", "DAM");
        } else if ($(".contenedorModulo:eq(1)") == $(this)) {
            localStorage.setItem("ciclo", "DAW");
        } else if ($(".contenedorModulo:eq(2)") == $(this)) {
            localStorage.setItem("ciclo", "ASIR");
        } else {
            alert("Picha escogeme un ciclo, arme el favo")
        }
    })
});

//Funcion Matricula Ciclos
function matriculaCiclos(familiaProfesional) {

    var uri = "https://proyecto-mdc-api.herokuapp.com/crearMatricula";
    console.log("URI: " + uri)

    $.post(uri, { familiaProfesional: familiaProfesional })

    $("#btnSiguiente").removeAttr("disabled");

    $("#btnSiguiente").mouseover(function () {
        $(this).css("background-color", "rgb(7, 148, 14)")
    }).mouseout(function () {
        $(this).css("background-color", "rgb(131, 153, 166)")
    });;
}