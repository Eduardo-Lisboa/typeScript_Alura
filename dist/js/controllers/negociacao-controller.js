import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/neogciacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "./../views/mensagem.view.js";
//classes negociacao-controller que recebe os dados do formulario e adiciona a lista de negociacoes
export class NegociacaoController {
    //metodo construtor que recebe os dados do formulario
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    //metodo adiciona que adiciona uma negociacao a lista de negociacoes
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Somente negociações em dias úteis, por favor!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.autializaView();
    }
    ehDiaUtil(data) {
        return (data.getDay() > DiaDaSemana.DOMINGO &&
            data.getDay() < DiaDaSemana.SABADO);
    }
    //metodo criaNegociacao que cria uma negociacao
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    //metodo limparFormulario que limpa os dados do formulario
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    //metodo autializaView que atualiza a view
    autializaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
