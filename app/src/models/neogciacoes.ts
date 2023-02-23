import { Negociacao } from "./negociacao.js";
import { Modelo } from "./../interfaces/modelo";

//classe negociacoes que recebe um array de negociacoes
export class Negociacoes implements Modelo<Negociacoes> {
    //encapsulamento de negociacoes
    private negociacoes: Array<Negociacao> = [];

    //metodo adiciona que recebe uma negociacao
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //metodo lista que retorna um array de negociacoes do tipo readonly para que nao seja possivel alterar o array
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(objeto: Negociacoes): boolean {
        return (
            JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista())
        );
    }
}
