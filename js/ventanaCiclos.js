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
    $(".contenedorModulo:eq(0)").click(() => { matriculaCiclos(); console.log("DAM") })
    $(".contenedorModulo:eq(1)").click(() => { matriculaCiclos(); console.log("DAW") })
    $(".contenedorModulo:eq(2)").click(() => { matriculaCiclos(); console.log("ASIR") })

    // Boton Siguiente Click
    $("#btnSiguiente").click(() => {
        var algunCicloSeleccionado = false

        $(".contenedorModulo").each((e) => {
            console.log(e)
            $(".contenedorModulo:eq("+e+")").hasClass("contenedorActivo") ? algunCicloSeleccionado = true : ""
        })

        if (algunCicloSeleccionado == true) {
            var cicloSelect = $(".contenedorActivo h1").text()
            localStorage.setItem("ciclo", cicloSelect);
        } else {
            alert("A ti que te pasa")
        }

    })
});

//Funcion Matricula Ciclos
function matriculaCiclos() {

    /* var uri = "https://proyecto-mdc-api.herokuapp.com/crearMatricula";
    console.log("URI: " + uri)

    $.post(uri, { familiaProfesional: familiaProfesional }) */

    $("#btnSiguiente").removeAttr("disabled");

    $("#btnSiguiente").mouseover(function () {
        $(this).css("background-color", "rgb(7, 148, 14)")
    }).mouseout(function () {
        $(this).css("background-color", "rgb(131, 153, 166)")
    });;
}