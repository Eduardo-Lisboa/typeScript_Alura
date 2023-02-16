//classe negociacoes que recebe um array de negociacoes
export class Negociacoes {
    constructor() {
        //encapsulamento de negociacoes
        this.negociacoes = [];
    }
    //metodo adiciona que recebe uma negociacao
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //metodo lista que retorna um array de negociacoes do tipo readonly para que nao seja possivel alterar o array
    lista() {
        return this.negociacoes;
    }
}
