export class Negociacao {
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
}
