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
}, () => {
    $(this).removeClass("contenedorActivohover").css("color", "black");
});


// Habilitar boton "Siguiente" si se ha seleccionado un ciclo
$(".contenedorModulo:eq(0)").click(() => {botonHabilitar()})
$(".contenedorModulo:eq(1)").click(() => {botonHabilitar()})
$(".contenedorModulo:eq(2)").click(() => {botonHabilitar()})


// Añadir clase 'contenedorActivo' al seleccionar un ciclo
$("#btnSiguiente").click(() => {
    var algunCicloSeleccionado = false

    $(".contenedorModulo").each((e) => {
        $(".contenedorModulo:eq("+e+")").hasClass("contenedorActivo") ? algunCicloSeleccionado = true : ""
    })

    if (algunCicloSeleccionado == true) {
        var cicloSelect = $(".contenedorActivo h1").text()
        localStorage.setItem("ciclo", cicloSelect);
    } else {
        alert("A ti que te pasa")
    }
    
})


//Habilitar boton "Siguiente" si hay un ciclo seleccionado.
$(document).ready(() => {
    (localStorage.getItem("ciclo") != undefined)?botonHabilitar():botonDeshabilitar()
});


// Insercion de datos en el LocalStorage
$("#btnSiguiente").click(() => {
   
    $("").text(localStorage.getItem("ciclo")).addClass("contenedorActivo")

}) 