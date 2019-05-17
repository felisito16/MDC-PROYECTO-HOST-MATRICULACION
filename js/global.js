/* CAMBIAR ESTADO BOTON */ 

//Funcion cambiar estado del boton siguiente
function botonActivado() {

    $("#btnSiguiente").removeAttr("disabled").removeAttr("style");

    $("#btnSiguiente").mouseover(function () {
        $(this).css("background-color", "rgb(7, 148, 14)")
    }).mouseout(function () {
        $(this).css("background-color", "rgb(131, 153, 166)")
    });;
}

function botonDesactivado() {
    $("#btnSiguiente").attr("disabled",true).attr("style","cursor: not-allowed;");
}

$("a[href='ventanaCiclos.html'] button[id='btnAtras']").click(() => {

  
        $(".contenedorModulo > .filaTituloModulo > h1").text(localStorage.getItem("ciclo")).addClass("contenedorActivo")
        

    
    
})