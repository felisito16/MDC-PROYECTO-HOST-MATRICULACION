/* CAMBIAR ESTADO BOTON */ 

//Funcion cambiar estado del boton siguiente
function cambiarEstadoBoton() {

    $("#btnSiguiente").removeAttr("disabled").removeAttr("style");

    $("#btnSiguiente").mouseover(function () {
        $(this).css("background-color", "rgb(7, 148, 14)")
    }).mouseout(function () {
        $(this).css("background-color", "rgb(131, 153, 166)")
    });;
}