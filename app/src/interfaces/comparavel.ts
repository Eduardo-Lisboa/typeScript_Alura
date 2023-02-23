// Interface que define o método de comparação de objetos genéricos
export interface Comparavel<T> {
    ehIgual(objeto: T): boolean;
}
