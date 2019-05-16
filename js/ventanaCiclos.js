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
    $(".contenedorModulo:eq(0)").click(() => { cambiarEstadoBoton(); console.log("DAM") })
    $(".contenedorModulo:eq(1)").click(() => { cambiarEstadoBoton(); console.log("DAW") })
    $(".contenedorModulo:eq(2)").click(() => { cambiarEstadoBoton(); console.log("ASIR") })

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
