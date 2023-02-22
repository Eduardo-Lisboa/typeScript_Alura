export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Método ${propertyKey} foi chamado com os parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`O retorno do método ${propertyKey} é: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
