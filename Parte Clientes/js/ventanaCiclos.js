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