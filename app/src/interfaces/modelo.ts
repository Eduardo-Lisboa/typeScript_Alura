import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

// interface que extende as interfaces imprimivel e comparavel genéricas
export interface Modelo<T> extends Imprimivel, Comparavel<T> {}
