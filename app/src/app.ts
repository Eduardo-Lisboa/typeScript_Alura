import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    //adiciona um evento de submit ao formulario que chama o metodo adiciona do controller negociacao-controller
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error(
        "Não foi possível inicializar a aplicação. Verifique se o form existe."
    );
}
