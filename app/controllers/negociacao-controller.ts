import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/neogciacoes.js";

//classes negociacao-controller que recebe os dados do formulario e adiciona a lista de negociacoes
export class NegociacaoController {
    // atributos que recebem os dados do formulario
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor?: HTMLInputElement;
    private negociacoes = new Negociacoes();

    //metodo construtor que recebe os dados do formulario
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    //metodo adiciona que adiciona uma negociacao a lista de negociacoes
    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    //metodo criaNegociacao que cria uma negociacao
    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    //metodo limparFormulario que limpa os dados do formulario
    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
