import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

// Classe abstrata para ser herdada por outras classes
export abstract class View<T> {
    // T (t se remete a type)é um tipo generico que pode ser qualquer coisa

    // protected para que as classes filhas possam acessar
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.elemento = element as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
    protected abstract template(model: T): string;
}
