// Decorator para injetar elementos do DOM em propriedades de classes
export function domInjector(selector: string) {
    return function (target: any, propertyKey: string) {
        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(selector);
                console.log(
                    `Buscando ${selector} para injetar em ${propertyKey}`
                );
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
