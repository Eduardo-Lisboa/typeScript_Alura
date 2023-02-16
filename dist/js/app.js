import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
//adiciona um evento de submit ao formulario que chama o metodo adiciona do controller negociacao-controller
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
