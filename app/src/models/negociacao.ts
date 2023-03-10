import { Modelo } from "./../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
    //class Negociacao com os atributos data, quantidade e valor
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    //metodo construtor que recebe os atributos data, quantidade e valor
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public paraTexto(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
    `;
    }

    public static CriaDe(
        dateString: string,
        quantidadeString: string,
        valorString: string
    ): Negociacao {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return (
            this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() &&
            this.data.getFullYear() == negociacao.data.getFullYear()
        );
    }
}
