import { Negociacao } from "./negociacao";

//classe negociacoes que recebe um array de negociacoes
export class Negociacoes {
    //encapsulamento de negociacoes
    private negociacoes: Array<Negociacao> = [];

    //metodo adiciona que recebe uma negociacao
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //metodo lista que retorna um array de negociacoes do tipo readonly para que nao seja possivel alterar o array
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
