import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
0;
//# sourceMappingURL=mensagem.view.js.map