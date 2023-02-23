import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/neogciacoes.js";
import { NegociacoesServices } from "../services/negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "./../views/mensagem.view.js";

//classes negociacao-controller que recebe os dados do formulario e adiciona a lista de negociacoes
export class NegociacaoController {
    // atributos que recebem os dados do formulario
    @domInjector("#data")
    private inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    private negociacaoService = new NegociacoesServices();

    //metodo construtor que recebe os dados do formulario
    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    //metodo adiciona que adiciona uma negociacao a lista de negociacoes
    @inspect
    @logarTempoDeExecucao(true)
    public adiciona(): void {
        const negociacao = Negociacao.CriaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(
                "Somente negociações em dias úteis, por favor!"
            );
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.autializaView();
    }

    public importarDados(): void {
        this.negociacaoService
            .obterNegociacoes()
            .then((negociacoesDeHoje) => {
                return negociacoesDeHoje.filter((negociacaoDeHoje) => {
                    return !this.negociacoes
                        .lista()
                        .some((negociacao) =>
                            negociacao.ehIgual(negociacaoDeHoje)
                        );
                });
            })
            .then((negociacoesDeHoje) => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }

    private ehDiaUtil(data: Date): boolean {
        return (
            data.getDay() > DiaDaSemana.DOMINGO &&
            data.getDay() < DiaDaSemana.SABADO
        );
    }

    //metodo criaNegociacao que cria uma negociacao

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
