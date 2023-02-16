import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/neogciacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "./../views/mensagem.view.js";

//classes negociacao-controller que recebe os dados do formulario e adiciona a lista de negociacoes
export class NegociacaoController {
    // atributos que recebem os dados do formulario
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor?: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    //metodo construtor que recebe os dados do formulario
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    //metodo adiciona que adiciona uma negociacao a lista de negociacoes
    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(
                "Somente negociações em dias úteis, por favor!"
            );
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.autializaView();
    }

    private ehDiaUtil(data: Date): boolean {
        return (
            data.getDay() > DiaDaSemana.DOMINGO &&
            data.getDay() < DiaDaSemana.SABADO
        );
    }

    //metodo criaNegociacao que cria uma negociacao
    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    //metodo limparFormulario que limpa os dados do formulario
    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    //metodo autializaView que atualiza a view
    private autializaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
