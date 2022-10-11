import { generarPassword } from "./passwordAleatoria.js";
import { copiarClipboard } from "./copyClipboard.js";

// Elementos
const inputRange = document.querySelector("#input-range");
const pPassword = document.querySelector("#p-password");
const contenedor = document.querySelector(".contenedor");

// Actualiza el input range
const actualizarRange = () => {
    const longitudOutput = inputRange.nextElementSibling;

    longitudOutput.innerHTML = `Longitud: ${inputRange.value}`;
}

// Contenedor event 
contenedor.addEventListener('click', (event) => {
    // Botón generar
    if (event.target.className === "contenedor__boton") {
        let randomPassword = generarPassword(inputRange.value);

        pPassword.innerHTML = randomPassword;
    }

    // Botón clipboard
    if (event.target.className === "password__icon") {
        let texto = pPassword.textContent;

        if (texto !== "¡Presiona generar!") {
            copiarClipboard(texto);
        }
    }

    // Botón reiniciar
    if (event.target.classList[1] === "contenedor__boton--reiniciar") {
        pPassword.textContent = "¡Presiona generar!";
        inputRange.value = 5;
        actualizarRange();
    }
});

// Input range event 
inputRange.addEventListener('input', actualizarRange, false);

