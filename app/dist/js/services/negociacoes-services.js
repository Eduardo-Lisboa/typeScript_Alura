import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error(res.statusText);
            }
        })
            .then((dados) => {
            return dados.map((dado) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
