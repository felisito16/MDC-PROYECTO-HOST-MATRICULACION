$(document).ready(() => {
    
    botonHabilitar($("#btnSiguiente"));
    
    for(var i = 4;i<6;i++)
    {
        bNavegacionDeshabilitar(i)
    }
})


$("#btnSiguiente").click(() => {
   
    bNavegacionHabilitar(4)

}) 