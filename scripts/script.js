import { generarPassword } from "./passwordAleatoria.js";

const inputRange = document.querySelector("#input-range");
const inputBoton = document.querySelector("#input-boton");
const pPassword = document.querySelector("#p-password");

inputRange.addEventListener('input', () => {
    const longitudP = inputRange.nextElementSibling;

    longitudP.innerHTML = `Longitud: ${inputRange.value}`;
}, false);

inputBoton.addEventListener('click', () => {
    let randomPassword = generarPassword(inputRange.value);
    
    pPassword.innerHTML = randomPassword;
});