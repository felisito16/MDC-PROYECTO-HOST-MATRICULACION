// Evento de clic para cambiar el menu activo
$("a.aAumentado").click(function () {
    $("a.aAumentado").not("activo").removeClass("activo").css({ "pointer-events": "auto" })
    $(this).addClass("activo").css({ "pointer-events": "none" })
});

// Evento de hover, si esta activo solo pondra el color blanco
$("a.aAumentado").css("color", "white").hover(function () {
    !($(this).hasClass("activo"))
        ? $(this).addClass("aAumentadohover").css("color", "white")
        : $(this).css("color", "white")
}, function () {
    $(this).removeClass("aAumentadohover").css("color", "white");
});