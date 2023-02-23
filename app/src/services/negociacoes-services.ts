import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then((dados: Array<NegociacoesDoDia>) => {
                return dados.map((dado) => {
                    return new Negociacao(
                        new Date(),
                        dado.vezes,
                        dado.montante
                    );
                });
            });
    }
}
