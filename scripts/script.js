import { generarPassword } from "./passwordAleatoria.js";

const inputRange = document.querySelector("#input-range");
const inputBoton = document.querySelector("#input-boton");
const pPassword = document.querySelector("#p-password");

inputRange.addEventListener('click', () => {
    const longitudP = inputRange.nextElementSibling;

    longitudP.innerHTML = `Longitud: ${inputRange.value}`;
});

inputBoton.addEventListener('click', () => {
    let randomPassword = generarPassword(inputRange.value);
    
    pPassword.innerHTML = randomPassword;
});