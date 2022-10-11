import { generarPassword } from "./passwordAleatoria.js";
import { copiarClipboard } from "./copyClipboard.js";

const inputRange = document.querySelector("#input-range");
const pPassword = document.querySelector("#p-password");
const contenedor = document.querySelector(".contenedor");

contenedor.addEventListener('click', (event) => {

    // Botón generar
    if(event.target.className === "contenedor__boton") {
        let randomPassword = generarPassword(inputRange.value);
    
        pPassword.innerHTML = randomPassword;
    }

    // Botón clipboard
    if(event.target.className === "password__icon") {
        let texto = pPassword.textContent;

        if(texto !== "¡Presiona generar!") {
            copiarClipboard(texto);
        }
     }
});

inputRange.addEventListener('input', () => {
    const longitudOutput = inputRange.nextElementSibling;

    longitudOutput.innerHTML = `Longitud: ${inputRange.value}`;
}, false);
