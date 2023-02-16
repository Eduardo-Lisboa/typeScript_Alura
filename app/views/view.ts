// Classe abstrata para ser herdada por outras classes
export abstract class View<T> {
    // T (t se remete a type)é um tipo generico que pode ser qualquer coisa

    // protected para que as classes filhas possam acessar
    protected elemento: HTMLElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector);
    }

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    protected abstract template(model: T): string;
}
