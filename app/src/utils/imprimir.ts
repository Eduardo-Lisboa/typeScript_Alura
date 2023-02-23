import { Imprimivel } from "./imprimivel.js";

//function imprimir que recebe um array de objetos que implementam a interface Imprimivel
export function imprimir(...objetos: Array<Imprimivel>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
