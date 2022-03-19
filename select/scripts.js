const seleccion = document.querySelector(".selector")
const boton = document.querySelector(".boton");

const elegirColor = () => {
    let valor = seleccion.value;
    console.log(`Has seleccionado el color ${valor}`);
};




boton.addEventListener("click", ()  => {
    elegirColor();
})



