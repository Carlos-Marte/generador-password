const CARACTERES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

export const generarPassword = (longitud) => {
    let passwordGenerada = "";

    for(let i = 0; i < longitud; i++) {
        let numRandom = Number.parseInt(Math.random() * (CARACTERES.length - 1 + 1) + 1);
        passwordGenerada += CARACTERES[numRandom];
    }

    return passwordGenerada;
}

console.log(generarPassword(15));