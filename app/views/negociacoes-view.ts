import { Negociacoes } from "../models/neogciacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
    // delcara o template que sera usado
    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>

                    </tr>
                </thead>
                <tbody>
                ${model
                    .lista()
                    .map((negociacao) => {
                        return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                    })
                    .join("")}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}
