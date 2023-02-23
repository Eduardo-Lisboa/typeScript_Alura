// Decorator para imprimir informações sobre o método que foi chamado
export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        console.log(
            `Método ${propertyKey} foi chamado com os parâmetros: ${JSON.stringify(
                args
            )}`
        );
        const retorno = metodoOriginal.apply(this, args);
        console.log(
            `O retorno do método ${propertyKey} é: ${JSON.stringify(retorno)}`
        );
        return retorno;
    };

    return descriptor;
}
